import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-block-viewer',
  templateUrl: './block-viewer.component.html',
  styleUrls: ['./block-viewer.component.scss']
})
export class BlockViewerComponent implements OnInit {

  @Input() public block;

  constructor() { }

  ngOnInit() {
  }

}
