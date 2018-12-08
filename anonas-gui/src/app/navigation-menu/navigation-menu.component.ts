import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  constructor() { }
  menuPositions: string[] = ["News", "Messages", "My Profile","Shit1","Shit2","Shit3","Shit4","Shit5","Shit6","Shit7","Shit8","Shit9"];
  isMobile=true;
  ngOnInit() {}

}
