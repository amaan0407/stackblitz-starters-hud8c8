import { Component, importProvidersFrom, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
  imports:[SidenavComponent,conversationcompoment],
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}