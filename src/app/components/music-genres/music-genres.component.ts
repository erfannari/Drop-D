import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-genres',
  templateUrl: './music-genres.component.html',
  styleUrls: ['./music-genres.component.scss']
})
export class MusicGenresComponent implements OnInit {

  Genres = [
    {
      name: 'Jazz',
      icon: '../../../assets/icons/trumpet.svg'
    },
    {
      name: 'Country',
      icon: '../../../assets/icons/cowboy-hat2.svg'
    },
    {
      name: 'R&B',
      icon: '../../../assets/icons/microphone.svg'
    },
    {
      name: 'Opera',
      icon: '../../../assets/icons/soprano.svg'
    },
    {
      name: 'Instrumental',
      icon: '../../../assets/icons/cymbals.svg'
    },
    {
      name: 'Rock&Roll',
      icon: '../../../assets/icons/hands-and-gestures.svg'
    },
    {
      name: 'Metal',
      icon: '../../../assets/icons/electric-guitar.svg'
    },
    {
      name: 'Rap',
      icon: '../../../assets/icons/cap.svg'
    },
    {
      name: 'Classic',
      icon: '../../../assets/icons/violin.svg'
    },
    {
      name: 'Ambient',
      icon: '../../../assets/icons/kalimba.svg'
    },
    {
      name: 'Soul',
      icon: '../../../assets/icons/jazz.svg'
    },
    {
      name: 'Folk',
      icon: '../../../assets/icons/accordion.svg'
    },
    {
      name: 'Festival',
      icon: '../../../assets/icons/accordion.svg'
    },
    {
      name: 'Pop',
      icon: '../../../assets/icons/accordion.svg'
    },
    {
      name: 'K_pop',
      icon: '../../../assets/icons/accordion.svg'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
