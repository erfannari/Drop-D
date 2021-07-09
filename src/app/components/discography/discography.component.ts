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
      image: '../../../assets/images/Queen-disco.jpg',
      bandDescription:
        'Queen is a British rock band, whose classic line-up consisted of vocalist' +
        ' and pianist Freddie Mercury, guitarist Brian May, drummer Roger Taylor' +
        ' and bassist John Deacon. Founded in 1970, Queen released their self-titled' +
        ' debut album in 1973, despite not being an immediate success, they quickly' +
        ' gained popularity in Britain with their second album Queen II in 1974'
    },
    {
      // Second Band
      bandName: 'Nirvana',
      image: '../../../assets/images/Nirvana-disco.jpg',
      bandDescription:
        'Nirvana was formed in 1987 by vocalist and guitarist Kurt Cobain' +
        ' and bassist Krist Novoselic, with the position of drummer being ' +
        'filled by various musicians. The band released its debut album, Bleach,' +
        ' in 1989 on independent label Sub Pop. After being joined by final drummer'
    },

    {
      // Third Band
      bandName: 'Beatles',
      image: '../../../assets/images/beatles-disco.jpg',
      bandDescription:
        'In their native United Kingdom, between 1962 and 1970,' +
        ' the British rock band the Beatles released 12 studio albums,' +
        ' 13 extended plays (EPs) and 22 singles. The bands international' +
        ' discography is more complicated due to different versions of their' +
        ' albums sometimes being released in other countries'
    },
    {
      // Fourth Band
      bandName: 'Led Zeppelin',
      image: '../../../assets/images/LedZeppelin-disco.jpg',
      bandDescription: 'The discography of the English rock band' +
        ' Led Zeppelin consists of eight studio albums, four live albums,' +
        ' nine compilation albums, sixteen singles and eight music downloads.' +
        ' Formed in London in 1968, the group consisted of guitarist Jimmy Page,' +
        ' singer Robert Plant, bassist John Paul Jones, and drummer John Bonham.'
    },
    {
      // Fifth Band
      bandName: 'Pink Floyd',
      image: '../../../assets/images/pink-floyd-disco.jpg',
      bandDescription:
        'The discography of the English rock group Pink Floyd consists of 15 studio albums,' +
        ' four live albums, nine compilation albums, five box sets, six extended plays, and 27 singles.' +
        'Formed in 1965, Pink Floyd initially earned recognition for their psychedelic or space rock music,' +
        ' and, as they evolved, for their progressive rock music. The group have sold over 250 million' +
        ' records worldwide, including 75 million units sold in the United States.'
    },
    {
      // Sixth Band
      bandName: 'Rolling Stones',
      image: '../../../assets/images/RollingStones-disco.jpg',
      bandDescription:
        'The English rock group the Rolling Stones have released 30 studio albums,' +
        ' 33 live albums, 29 compilation albums, three extended play singles,' +
        ' 121 singles, 32 box sets, 48 video albums and 77 music videos.' +
        ' The early albums and singles released from 1963 to 1967 were originally' +
        ' on Decca Records in the United Kingdom'
    },
    {
      // Seventh Band
      bandName: ' AC/DC',
      image: '../../../assets/images/AC-DC-disco.jpg',
      bandDescription:
        'Australian rock and roll band AC/DC, between 1975 and 2020,' +
        ' have released 17 studio albums (15 available worldwide and two' +
        ' released only in Australia), two soundtrack albums, three live albums,' +
        ' 11 video albums, and two box set albums. Although many AC/DC singles have' +
        ' been released, the band always refused to release any greatest hits-type packages'
    },
    {
      // Eighth Band
      bandName: 'Eagles',
      image: '../../../assets/images/Eagles-disco.jpg',
      bandDescription:
        'The Eagles are an American rock band. Since their debut in 1972,' +
        ' they have released seven studio albums, two live albums, 10 compilation albums,' +
        ' as well as three video albums and 30 singles. Of those singles,' +
        ' five topped the Billboard Hot 100. The Eagles have a total' +
        ' of 18 Top 40 hits on the pop charts, as well as several hits on the adult contemporary chart'
    },
    {
      // Ninth Band
      bandName: 'Guns N Roses',
      image: '../../../assets/images/GunsNRoses-disco.jpg',
      bandDescription:
        'The discography of Guns N\' Roses, an American hard rock band, consists of six studio albums,' +
        ' one live album, two compilation albums, three extended plays (EPs),' +
        ' 20 singles, nine video albums and 23 music videos. Guns N Roses was formed in Los Angeles,' +
        ' California with an original recording lineup of lead vocalist Axl Rose, lead guitarist Slash,' +
        ' rhythm guitarist Izzy Stradlin, bassist Duff McKagan and drummer Steven Adler.'
    },
    {
      // tenth Band
      bandName: 'The Who',
      image: '../../../assets/images/TheWho-disco.jpg',
      bandDescription:
        'The Who have been with several labels over the years. In the United Kingdom and elsewhere' +
        ' outside North America, they were signed originally to Brunswick Records. In 1966,' +
        ' they moved to Polydor Records and took the rights to their Brunswick recordings' +
        ' with them. They created and moved to Track Records the following year with distribution by Polydor'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
