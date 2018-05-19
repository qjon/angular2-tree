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
import {ContextMenuService, IContextMenuClickEvent} from 'ngx-contextmenu';
import {Actions} from '@ngrx/effects';
import {DragAndDrop} from '../dragAndDrop/dragAndDrop.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Subject} from 'rxjs/Subject';
import {TreeActionsDispatcherService} from '../store/treeActionsDispatcher.service';
import {AnimationEvent} from '@angular/animations';
import {Observable} from 'rxjs/Observable';
import {SimpleChange, SimpleChanges} from '@angular/core';
import {NEW_NODE_ID} from '../store/treeReducer';
import SpyObj = jasmine.SpyObj;

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
  let treeActionDispatcherMock: SpyObj<TreeActionsDispatcherService>;
  let selection: Subject<IOuterNode>;

  beforeEach(() => {
    selection = new Subject<IOuterNode>();
    actions$ = new Subject<ITreeAction>();
    treeActionDispatcherMock = jasmine.createSpyObj<TreeActionsDispatcherService>('TreeActionsDispatcherService', [
      'collapseNode',
      'deleteNode',
      'expandNode',
      'loadPath',
      'loadTree',
      'saveNode',
      'selectNode',
    ]);

    actionsMock = <Actions>jasmine.createSpyObj('actions', ['ofType']);
    contextMenuServiceMock = <ContextMenuService>{
      show: new Subject<IContextMenuClickEvent>()
    };
    storeMock = <Store<ITreeState>>jasmine.createSpyObj('Store', ['dispatch']);
    treeActionServiceMock = <TreeActionsService>jasmine.createSpyObj('TreeActionsService', ['deleteNode', 'loadTree', 'saveNode']);

    dragAndDropMock = <DragAndDrop>{};

    actionsMock.ofType.and.returnValue(actions$);

    node = {
      id: 'node-id',
      name: 'name',
      treeId: TREE_ID,
      children: [],
      isExpanded: false,
    };

    treeModelMock = new TreeModel(treeActionDispatcherMock, Observable.of(<ITreeData>{}), {
      disableContextMenu: true,
      isAnimation: false
    });

    spyOn(treeModelMock, 'getChildren').and.returnValue(Observable.of(<ITreeData>{}));
    treeModelMock.currentSelectedNode$ = selection.asObservable();


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
        {provide: TreeActionsDispatcherService, useValue: treeActionDispatcherMock}
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

  describe('ngOnChanges', () => {
    describe('if change is first', () => {
      let nodeChange: SimpleChange;
      let value: SimpleChanges;

      beforeEach(() => {
        nodeChange = new SimpleChange(null, node, true);
        value = {
          node: nodeChange
        };

        component.isExpanded = false;

        component.ngOnChanges(value);
      });

      it('should mark node as not expanded', () => {
        expect(component.isExpanded).toBe(false);
      });
    });

    describe('if change is not first', () => {
      let nodeChange: SimpleChange;
      let value: SimpleChanges;
      let newNode: IOuterNode;

      beforeEach(() => {
        newNode = Object.assign({}, node);
        newNode.id = 'new-node-id';

        nodeChange = new SimpleChange(node, newNode, false);
        value = {
          node: nodeChange
        };

        component.isExpanded = false;

        component.node = newNode;

      });

      it('should set $children for the second time', () => {
        component.ngOnChanges(value);

        expect(treeModelMock.getChildren).toHaveBeenCalledWith('new-node-id')
      });

      it('should mark node as not expanded', () => {
        expect(component.isExpanded).toBe(false);
      });
    });

    describe('if change is not first and node is expanded', () => {
      let nodeChange: SimpleChange;
      let value: SimpleChanges;
      let newNode: IOuterNode;

      beforeEach(() => {
        newNode = Object.assign({}, node);
        newNode.id = 'new-node-id';
        newNode.isExpanded = true;

        nodeChange = new SimpleChange(node, newNode, false);
        value = {
          node: nodeChange
        };

        component.isExpanded = false;

        component.node = newNode;

        component.ngOnChanges(value);
      });

      it('should set $children for the second time', () => {
        expect(treeModelMock.getChildren).toHaveBeenCalledWith('new-node-id')
      });

      it('should mark node as expanded', () => {
        expect(component.isExpanded).toBe(true);
      });
    });

  });


  describe('ngOnInit', () => {
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
    it('should dispatch action expand node', () => {
      component.collapse();

      expect(treeActionDispatcherMock.collapseNode).toHaveBeenCalledWith(TREE_ID, node.id);
    });
  });

  describe('expanded', () => {
    it('should call expand node and tree load if tree is not fully loaded', () => {
      spyOn(treeModelMock, 'isFullyLoaded').and.returnValue(false);
      component.expand();

      expect(treeActionDispatcherMock.expandNode).toHaveBeenCalledWith(TREE_ID, node.id);
      expect(treeActionDispatcherMock.loadTree).toHaveBeenCalledWith(TREE_ID, node.id);
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
    it('should change state to nit edit mode', () => {
      component.onBlur();

      expect(component.isEditMode).toBe(false);
    });

    it('should dispatch deleteNode action if node is new', () => {
      const newNode = Object.assign({}, node);
      newNode.id = NEW_NODE_ID;

      jasmine.clock().install();
      component.node = newNode;

      fixture.detectChanges();
      jasmine.clock().tick(0);

      component.onBlur();
      jasmine.clock().uninstall();

      expect(treeActionDispatcherMock.deleteNode).toHaveBeenCalledWith(TREE_ID, newNode);
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

        component.onChange(event);
      });

      it('should dispatch saveNode event if ENTER key is pressed', () => {
        expect(treeActionDispatcherMock.saveNode).toHaveBeenCalledWith(TREE_ID, {
          id: node.id,
          treeId: node.treeId,
          name: newNodeName,
          parentId: undefined,
          children: [],
          parents: undefined,
          isExpanded: false
        });
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

      expect(treeActionDispatcherMock.selectNode).toHaveBeenCalledWith(TREE_ID, node);
    });


    it('should emit new selection - null', () => {
      const handler = jasmine.createSpy('handler');

      component.isSelected = true;

      component.onSelect();

      component.treeModel.currentSelectedNode$
        .subscribe(handler);


      expect(treeActionDispatcherMock.selectNode).toHaveBeenCalledWith(TREE_ID, null);
    });
  });

  describe('trackByFn', () => {
    it('should return node id', () => {
      expect(component.trackByFn(node)).toBe('node-id');
    });
  });

});
