import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent implements OnInit {

  mostVisited = [
    {name: 'Jazz', icon: '../../../../assets/icons/trumpet.svg'},
    {name: 'Country', icon: '../../../../assets/icons/cowboy-hat2.svg'},
    {name: 'R&B', icon: '../../../../assets/icons/microphone.svg'},
    {name: 'Classic', icon: '../../../../assets/icons/violin.svg'},
    {name: 'Metal', icon: '../../../../assets/icons/electric-guitar.svg'},
    {name: 'Rock&Roll', icon: '../../../../assets/icons/hands-and-gestures.svg'},
    {name: 'Ambient', icon: '../../../assets/icons/kalimba.svg'},
    {name: 'Soul', icon: '../../../assets/icons/jazz.svg'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
