import {ItemComponent} from './item.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TreeModel} from '../models/TreeModel';
import {IOuterNode} from '../interfaces/IOuterNode';
import {Draggable} from '../dragAndDrop/draggable.directive';
import {Droppable} from '../dragAndDrop/droppable.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ITreeAction, ITreeData, ITreeState} from '../store/ITreeState';
import {Store} from '@ngrx/store';
import {TreeActionsService} from '../store/treeActions.service';
import {ContextMenuService} from 'angular2-contextmenu';
import {Actions} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {DragAndDrop} from '../dragAndDrop/dragAndDrop.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

describe('ItemComponent', () => {
  const TREE_ID = 'treeId';
  let actionsMock: any;
  let component: ItemComponent;
  let contextMenuServiceMock: ContextMenuService;
  let dragAndDropMock: DragAndDrop;
  let fixture: ComponentFixture<ItemComponent>;
  let node: IOuterNode;
  let storeMock: Store<ITreeState>;
  let treeActionServiceMock: TreeActionsService;
  let treeModelMock: TreeModel;
  let actions$: Subject<ITreeAction>;

  beforeEach(() => {
    actions$ = new Subject<ITreeAction>();

    actionsMock = <Actions>jasmine.createSpyObj('actions', ['ofType']);
    contextMenuServiceMock = <ContextMenuService>{};
    storeMock = <Store<ITreeState>>jasmine.createSpyObj('Store', ['dispatch']);
    treeActionServiceMock = <TreeActionsService>jasmine.createSpyObj('TreeActionsService', ['loadTree']);

    dragAndDropMock = <DragAndDrop>{};
    // dragAndDropMock.TREE_EXPAND_NODE = 'TREE_NODE';

    actionsMock.ofType.and.returnValue(actions$);

    node = {
      id: 'node-id',
      name: 'name',
      treeId: TREE_ID,
      children: []
    };

    treeModelMock = new TreeModel(Observable.of(<ITreeData>{}), {isAnimation: false});

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
        Draggable,
        Droppable,
      ]
    })
      .compileComponents();


    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

    component.treeModel = treeModelMock;
    component.node = node;

    fixture.detectChanges();
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

  });


});
