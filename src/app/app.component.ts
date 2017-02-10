import {Component, OnInit, ViewChild} from '@angular/core';
import {IOuterNode} from './tree/interfaces/IOuterNode';
import {FolderService} from './tree/folder.service';
import {ITreeItemEvent} from './tree/interfaces/ITreeItemEvent';
import {TreeComponent} from './tree/tree.component';
import {IContextMenu} from './tree/interfaces/IContextMenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(TreeComponent)
  private treeComponent: TreeComponent;

  public folders: IOuterNode[] = [];

  public contextMenu: IContextMenu[] = [];

  public constructor(protected folderService: FolderService) {
  }

  public ngOnInit() {
    this.folderService.load()
      .subscribe((folders: IOuterNode[]) => this.folders = folders);
  }

  public addNode() {
    this.treeComponent.addNode('Nowy element');
  }

  public onAdd(event: ITreeItemEvent) {
    console.log('onAdd', event);
    let node = event.node;
    let parentNode = node.parentNode;
    let parentNodeId = parentNode ? parentNode.id : null;

    this.folderService.save(event.node.data, parentNodeId)
      .subscribe(
        (folder: IOuterNode) => {
          node.refresh(folder);
        },
        () => {
          node.remove();
        }
      );
  }

  public onRemove(event: ITreeItemEvent) {
    console.log('onRemove', event);
    let node = event.node;

    this.folderService.remove(node.id)
      .subscribe(() => {
        node.remove();
      });
  }

  public onChange(event: ITreeItemEvent) {
    console.log('onChange', event);
    let node = event.node;

    this.folderService.update(node.toJSON())
      .subscribe((folder: IOuterNode) => {
        node.refresh(folder);
        node.collapse();
        node.expand();
      });
  }

  public onToggle(event: ITreeItemEvent) {
    console.log('onToggle', event);
    if (event.status) {
      this.folderService.load(event.node.id)
        .subscribe((folders: IOuterNode[]) => {
          for (let folder of folders) {
            event.node.addChild(folder);
          }
        });
    } else {
      event.node.resetChildren();
    }

  }

  public onSelect(event: ITreeItemEvent) {
    console.log('onSelect', event);
  }
}
