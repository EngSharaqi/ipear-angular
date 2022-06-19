import { Component, OnInit } from '@angular/core';
import { CosmeticsComponent } from '../cosmetics/cosmetics.component';
import { CleanersComponent } from '../cleaners/cleaners.component';
import { SterileComponent } from '../sterile/sterile.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../cosmetics/cosmetics.component.css']
})
export class HomeComponent {

  constructor() { }
  style = "height:" + (window.innerHeight - 100) + "px";
  about = 'Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla Lorem ipsum dolor umet dskdf sdfjdkf bla bla bla';
  cosmetics = [
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
    }
  ]
  cleaners = [
    {
      name: 'This is title no. 1',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/sterile.jpg',
    },
    {
      name: 'This is title no. 2',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/sterileI.jpg',
    },
    {
      name: 'This is title no. 3',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsI.jpg',
    },
    {
      name: 'This is title no. 4',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsIIII.jpg',
    }
  ]
  steriles = [
    {
      name: 'This is title no. 1',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/sterile.jpg',
    },
    {
      name: 'This is title no. 2',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/sterileI.jpg',
    },
    {
      name: 'This is title no. 3',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsI.jpg',
    },
    {
      name: 'This is title no. 4',
      details: 'This is the description for this cosemetic product bla bla bla lorem ipsum',
      img: '../../assets/images/cosemeticsIIII.jpg',
    }
  ]
}
