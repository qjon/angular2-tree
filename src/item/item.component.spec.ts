import {ItemComponent} from './item.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TreeModel} from '../models/TreeModel';
import {IOuterNode} from '../interfaces/IOuterNode';
import {DraggableDirective} from '../dragAndDrop/draggable.directive';
import {DroppableDirective} from '../dragAndDrop/droppable.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ITreeAction, ITreeData, ITreeState} from '../store/ITreeState';
import {Store} from '@ngrx/store';
import {TreeActionsService} from '../store/treeActions.service';
import {ContextMenuService, IContextMenuClickEvent} from 'angular2-contextmenu';
import {Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {DragAndDrop} from '../dragAndDrop/dragAndDrop.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationEvent} from '@angular/animations';
import {Subject} from 'rxjs/Subject';

describe('ItemComponent', () => {
  const TREE_ID = 'tree';
  let actionsMock: any;
  let component: ItemComponent;
  let contextMenuServiceMock: ContextMenuService;
  let dragAndDropMock: DragAndDrop;
  let fixture: ComponentFixture<ItemComponent>;
  let node: IOuterNode;
  let storeMock: Store<ITreeState>;
  let treeActionServiceMock: any;
  let treeModelMock: TreeModel;
  let actions$: Subject<ITreeAction>;

  beforeEach(() => {
    actions$ = new Subject<ITreeAction>();

    actionsMock = <Actions>jasmine.createSpyObj('actions', ['ofType']);
    contextMenuServiceMock = <ContextMenuService>{
      show: new Subject<IContextMenuClickEvent>()
    };
    storeMock = <Store<ITreeState>>jasmine.createSpyObj('Store', ['dispatch']);
    treeActionServiceMock = <TreeActionsService>jasmine.createSpyObj('TreeActionsService', ['deleteNode', 'loadTree', 'saveNode']);

    dragAndDropMock = <DragAndDrop>{};
    // dragAndDropMock.TREE_EXPAND_NODE = 'TREE_NODE';

    actionsMock.ofType.and.returnValue(actions$);

    node = {
      id: 'node-id',
      name: 'name',
      treeId: TREE_ID,
      children: []
    };

    treeModelMock = new TreeModel(Observable.of(<ITreeData>{}), {disableContextMenu: true, isAnimation: false});

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        {provide: Actions, useValue: actionsMock},
        {provide: ContextMenuService, useValue: contextMenuServiceMock},
        {provide: DragAndDrop, useValue: dragAndDropMock},
        {provide: Store, useValue: storeMock},
        {provide: TreeActionsService, useValue: treeActionServiceMock}
      ],
      declarations: [
        ItemComponent,
        DraggableDirective,
        DroppableDirective,
      ]
    })
      .compileComponents();


    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

    component.treeModel = treeModelMock;
    component.node = node;

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });


  describe('constructor', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('isEditMode should be set to false', () => {
      expect(component.isEditMode).toBe(false);
    });

    it('isSelected should be set to false', () => {
      expect(component.isSelected).toBe(false);
    });

    it('isExpanded should be set to false', () => {
      expect(component.isExpanded).toBe(false);
    });
  });

  describe('ngOnInit', () => {
    it('should call expand method if action TREE_INSERT_NODE has been detected', () => {
      spyOn(component, 'expand');

      actions$.next({
        type: TreeActionsService.TREE_INSERT_NODE,
        payload: {
          treeId: TREE_ID,
          id: node.id
        }
      });

      expect(component.expand).toHaveBeenCalled();
    });


    describe('animationState', () => {
      it('should be null', () => {
        expect(component.animationState).toBeNull();
      });

      it('should be set to "inactive" if animations is ON', () => {
        fixture = TestBed.createComponent(ItemComponent);
        component = fixture.componentInstance;
        treeModelMock.configuration.isAnimation = true;

        component.treeModel = treeModelMock;
        component.node = node;

        fixture.detectChanges();

        expect(component.animationState).toBe('inactive');
      });
    });


    describe('edit node start', () => {
      beforeEach(() => {
        jasmine.clock().install();
        actions$.next({
          type: TreeActionsService.TREE_EDIT_NODE_START,
          payload: {
            treeId: TREE_ID,
            node
          }
        });

        fixture.detectChanges();
        spyOn(component.input.nativeElement, 'focus');
        jasmine.clock().tick(0);
      });

      afterEach(() => {
        jasmine.clock().uninstall();
      });

      it('should set editMode', () => {
        expect(component.isEditMode).toBe(true);
      });

      it('should set focus', () => {
        expect(component.input.nativeElement.focus).toHaveBeenCalled();
      });
    });
  });

  describe('collapse', () => {
    it('should set isExpanded to false if animations is OFF', () => {
      component.isExpanded = true;

      component.collapse();

      expect(component.isExpanded).toBe(false);
    });

    it('should change animation state to "inactive" if animation is ON', () => {
      component.treeModel.configuration.isAnimation = true;
      component.animationState = 'active';

      component.collapse();

      expect(component.animationState).toBe('inactive');
    });
  });

  describe('expanded', () => {
    it('should set isExpanded to true if animations is OFF', () => {
      component.isExpanded = false;

      component.expand();

      expect(component.isExpanded).toBe(true);
    });

    it('should change animation state to "active" if animation is ON', () => {
      component.treeModel.configuration.isAnimation = true;
      component.animationState = 'inactive';

      component.expand();

      expect(component.animationState).toBe('active');
    });
  });

  describe('onAnimationDone', () => {
    it('should change isExpanded to false if target state is "inactive"', () => {
      const event = <AnimationEvent>{
        toState: 'inactive'
      };
      component.isExpanded = true;

      component.onAnimationDone(event);

      expect(component.isExpanded).toBe(false);
    });

    it('should do nothing if target state is not "inactive"', () => {
      const event = <AnimationEvent>{
        toState: 'otherState'
      };
      component.isExpanded = true;

      component.onAnimationDone(event);

      expect(component.isExpanded).toBe(true);
    });
  });

  describe('onBlur', () => {
    describe('isStartSave set to TRUE', () => {
      beforeEach(() => {
        const event = <KeyboardEvent>{
          keyCode: 13,
          altKey: false,
          char: 'ESC',
          stopPropagation: () => {
          }
        };

        spyOn(event, 'stopPropagation');

        component.onChange(event);
      });

      it('should change is startSave to false and do nothing', () => {
        component.isEditMode = true;
        component.onBlur();

        expect(component.isEditMode).toBe(true);

        component.onBlur();
        expect(component.isEditMode).toBe(false);
      });
    });

    describe('isStartSave set to FALSE', () => {
      it('should set editMode to false', () => {
        component.isEditMode = true;

        component.onBlur();

        expect(component.isEditMode).toBe(false);
      });

      it('should dispatch delete action if node is NEW', () => {
        component.node.id = null;
        treeActionServiceMock.deleteNode.and.returnValue('action');
        component.onBlur();

        expect(treeActionServiceMock.deleteNode).toHaveBeenCalledWith(TREE_ID, node);
        expect(storeMock.dispatch).toHaveBeenCalledWith('action');
      });

      it('should not dispatch delete action if node is not NEW', () => {
        treeActionServiceMock.deleteNode.and.returnValue('action');
        component.onBlur();

        expect(treeActionServiceMock.deleteNode).not.toHaveBeenCalled();
        expect(storeMock.dispatch).not.toHaveBeenCalled();
      });
    });
  });

  describe('onChange', () => {
    describe('if ENTER is pressed', () => {
      let newNodeName: string;

      beforeEach(() => {
        const event = <KeyboardEvent>{
          keyCode: 13,
          altKey: false,
          char: 'ENTER',
          stopPropagation: () => {
          }
        };
        newNodeName = 'new name';
        component.isEditMode = true;
        component.nameField.setValue(newNodeName);

        treeActionServiceMock.saveNode.and.returnValue('action');

        component.onChange(event);
      });

      it('should dispatch saveNode event if ENTER key is pressed', () => {
        expect(treeActionServiceMock.saveNode).toHaveBeenCalledWith(TREE_ID, {
          id: node.id,
          treeId: node.treeId,
          name: newNodeName,
          parentId: undefined,
          children: [],
          parents: undefined
        });
        expect(storeMock.dispatch).toHaveBeenCalledWith('action');
      });

      it('should change editMode to false', () => {
        expect(component.isEditMode).toBe(false);
      });
    });

    describe('if ESC key is pressed', () => {
      it('should change editMode to false', () => {
        const event = <KeyboardEvent>{
          keyCode: 27,
          altKey: false,
          char: 'ESC',
          stopPropagation: () => {
          }
        };
        component.isEditMode = true;

        component.onChange(event);

        expect(component.isEditMode).toBe(false);
      });
    });

    describe('if any other key is pressed', () => {
      it('', () => {
        const event = <KeyboardEvent>{
          keyCode: 45,
          altKey: false,
          char: 'ANY',
          stopPropagation: () => {
          }
        };
        component.isEditMode = true;

        component.onChange(event);

        expect(storeMock.dispatch).not.toHaveBeenCalled();
        expect(component.isEditMode).toBe(true);
      });
    });
  });

  describe('onContextMenu', () => {
    let event: MouseEvent;

    beforeEach(() => {
      event = <MouseEvent>jasmine.createSpyObj('event', ['stopPropagation', 'preventDefault']);
    });

    it('should call event.stopPropagation', () => {
      component.onContextMenu(event);

      expect(event.stopPropagation).toHaveBeenCalled();
    });

    it('should call event.preventDefault', () => {
      component.onContextMenu(event);

      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should emit new show value', () => {
      const expectedValue = {
        contextMenu: component.contextMenu,
        event: event,
        item: node
      };

      const handler = jasmine.createSpy('handler');

      component.treeModel.configuration.disableContextMenu = false;

      contextMenuServiceMock.show
        .subscribe(handler);


      component.onContextMenu(event);

      expect(handler).toHaveBeenCalledWith(expectedValue);
    });
  });

  describe('onSelect', () => {
    it('should emit new selection node', () => {
      const handler = jasmine.createSpy('handler');

      component.isSelected = false;

      component.onSelect();

      component.treeModel.currentSelectedNode$
        .subscribe(handler);


      expect(handler).toHaveBeenCalledWith(node);
    });


    it('should emit new selection - null', () => {
      const handler = jasmine.createSpy('handler');

      component.isSelected = true;

      component.onSelect();

      component.treeModel.currentSelectedNode$
        .subscribe(handler);


      expect(handler).toHaveBeenCalledWith(null);
    });
  });


});
