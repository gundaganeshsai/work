import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('mySidenav', {static:false}) mySidenav:any;
  
  title = 'work2';

  constructor() { }

  ngOnInit(): void {
  }
  openNav(): void{
    this.mySidenav.nativeElement.style.width ="250px";
  }
  closeNav(event:any): void{
    this.mySidenav.nativeElement.style.width ="0px";
  }

}
