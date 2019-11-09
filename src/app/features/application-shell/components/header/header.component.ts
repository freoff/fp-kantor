import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ROUTES from '@routes';

@Component({
  selector: 'fp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes = ROUTES;
  @Input() logged = false;

  @Output() openSideNav = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
