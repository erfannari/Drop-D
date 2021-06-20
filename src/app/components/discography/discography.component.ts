import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.scss']
})
export class DiscographyComponent implements OnInit {

  discography = [
    {
      // First Band
      bandName: 'Queen',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums)  ...READ MORE'
    },
    {
      // Second Band
      bandName: 'Nirvana',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums)  ...READ MORE'
    },

    {
      // Third Band
      bandName: 'Beatles',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums)  ...READ MORE'
    },
    {
      // Fourth Band
      bandName: 'Led Zeppelin',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums)  ...READ MORE'
    },
    {
      // Fifth Band
      bandName: 'Pink Floyd',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums) READ MORE...'
    },
    {
      // Sixth Band
      bandName: 'Rolling Stones',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums)  ...READ MORE'
    },
    {
      // Seventh Band
      bandName: ' AC/DC',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums)  ...READ MORE'
    },
    {
      // Eighth Band
      bandName: 'Eagles',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums)  ...READ MORE'
    },
    {
      // Ninth Band
      bandName: 'Guns N Roses',
      image: '../../../assets/images/1.jpg',
      bandDescription:
        'The discography of Metallica includes ten studio albums,' +
        ' eight live albums, three extended plays, 43 singles, ten video albums,' +
        ' 42 music videos, one soundtrack album, one collaboration album and three box sets.' +
        ' They are a San Francisco-based metal band formed in 1981 by James Hetfield' +
        ' (lead vocals, rhythm guitar) and Lars Ulrich (drums)  ...READ MORE'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
