import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  member: string = window.location.pathname.replace(/.*\//, '');

  constructor() { }

  ngOnInit(): void {
  }

}
