import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formations = [
    {img: "https://www.hubone.fr/data/2017/07/algorithme_cryptographie-1-3.jpg",title:"Cryptographie",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni. Maxime pariatur in id incidunt. Facilis cupiditate magnam reprehenderit, a nam dolorem quae ut architecto excepturi sed tempore voluptatum iste?"},
    {img: "https://media.threatpost.com/wp-content/uploads/sites/103/2018/10/16160437/code-security.jpeg",title:"Steganographie",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, magni. Maxime pariatur in id incidunt. Facilis cupiditate magnam reprehenderit, a nam dolorem quae ut architecto excepturi sed tempore voluptatum iste?"},
    
  ]
  constructor() { }

  ngOnInit() {
  }

}
