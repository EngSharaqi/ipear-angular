import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmetics',
  templateUrl: './cosmetics.component.html',
  styleUrls: ['./cosmetics.component.css']
})
export class CosmeticsComponent {

  products = [
    {
      name: 'This is title no. 1',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsI.jpg',
    },
    {
      name: 'This is title no. 2',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsII.jpg',
    },
    {
      name: 'This is title no. 3',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsIII.jpg',
    },
    {
      name: 'This is title no. 4',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsIIII.jpg',
    },
    {
      name: 'This is title no. 5',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsII.jpg',
    },
    {
      name: 'This is title no. 6',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsIII.jpg',
    },
    {
      name: 'This is title no. 7',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsIIII.jpg',
    },
    {
      name: 'This is title no. 8',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsI.jpg',
    },
  ]
}
