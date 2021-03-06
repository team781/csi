import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  toggler : boolean = false
  formations = [
    {img: "https://www.hubone.fr/data/2017/07/algorithme_cryptographie-1-3.jpg",title:"Cryptographie", delay: "animation-delay:0s"},
    {img: "https://media.threatpost.com/wp-content/uploads/sites/103/2018/10/16160437/code-security.jpeg",title:"Steganographie",delay: "animation-delay:0.3s"},
    {img: "http://www.aslitsecurity.com/images/web-penetration-testing.jpg",title:"Web & Networking",delay: "animation-delay:0.6s"}
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
