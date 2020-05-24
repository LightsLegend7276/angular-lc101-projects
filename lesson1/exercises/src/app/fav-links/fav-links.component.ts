import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://tv.youtube.com/', 'https://www.twitch.tv/'];
  constructor() { }

  ngOnInit() {
  }

}
