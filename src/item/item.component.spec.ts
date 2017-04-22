import {ComponentFixture, TestBed} from "@angular/core/testing";
import {ItemComponent} from "./item.component";
import {NodeModel} from "../models/NodeModel";
import {TreeModel} from "../models/TreeModel";

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let treeModel: TreeModel;

  beforeEach(() => {
    TestBed
      .configureTestingModule({
        declarations: [ItemComponent]
      })
      .compileComponents();


    fixture = TestBed.createComponent(ItemComponent);

    component = fixture.componentInstance;

    treeModel = new TreeModel();

    component.node = new NodeModel({id: '123', name: 'New node'}, null, treeModel);
  });

  describe('constructor', () => {
    it('should create "nameField" FormControl', () => {
      // expect(component.nameField).toBe();
    })
  })
});
