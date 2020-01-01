import { Component, HostListener } from '@angular/core';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-csi';
  scrolltop : boolean = false

  @HostListener("window: scroll",["$event"]) show(){
    console.log(window)
    if(window.scrollY > 150) this.scrolltop = true
    else this.scrolltop = false
  }
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

}
