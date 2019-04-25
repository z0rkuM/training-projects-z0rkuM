import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-loader',
  templateUrl: './show-loader.component.html',
  styleUrls: ['./show-loader.component.css']
})
export class ShowLoaderComponent implements OnInit {
  @Input() showLoader: boolean;
  @Input() text: string;

  constructor() {}

  ngOnInit() {}
}
