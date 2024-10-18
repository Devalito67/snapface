import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  snaps!: FaceSnap[];

  ngOnInit() {
    this.snaps = [
      new FaceSnap(
      'Vegeta',
      'Best Anime character',
      'https://static.wikia.nocookie.net/dragonball/images/2/2c/Vegeta_Manga.png',
      new Date(),
      255
    ),
    new FaceSnap(
      'Bulma',
      "Vegeta's wife",
      'https://static.wikia.nocookie.net/dragonball/images/4/4b/Bulma_Leigh_Dokkan.png',
      new Date(),
      12
    ),
    new FaceSnap(
      'Trunks',
      "Vegeta's son",
      'https://i.namu.wiki/i/tfC46yYs3YVhb03ZKloYe4XtuCS5M5YvrljamIJOCYb3bXNFPF8-egTxWZVaXoixAg3oCLu2Efc0kN3PRPNW9YK6TQVFnSF09HjIqzMJHJpGwTkkvZBce-1Y0czFoy7ia5z-Qg83k16qII7xicZFfpXBFXtN1FDky_Gz4Q5EmBQ.webp',
      new Date(),
      185
    ),
  ]
  this.snaps[0].setLocation("Namek")
  }
}
