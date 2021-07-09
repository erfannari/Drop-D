import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-right-section',
  templateUrl: './right-section.component.html',
  styleUrls: ['./right-section.component.scss']
})
export class RightSectionComponent implements OnInit {

  mostVisited = [
    {name: 'Freddie Mercury', image: '../../../../assets/images/Queen.jpg'},
    {name: 'Nick Cave', image: '../../../../assets/images/nick-cave.jpg'},
    {name: 'John Lennon', image: '../../../../assets/images/John-Lennon.jpg'},
    {name: 'Willie Nelson', image: '../../../../assets/images/willie-nelson.jpg'},
    {name: 'David Gilmour', image: '../../../../assets/images/david-gilmour.jpg'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
