import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';


@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Vegeta',
      'Best Anime character',
      'https://static.wikia.nocookie.net/dragonball/images/2/2c/Vegeta_Manga.png',
      new Date(),
      255
    ).withLocation('Namek'),
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
      'https://cdn.shopify.com/s/files/1/0039/8668/6063/files/dc87cf7b39647c859553b1abd651d7c4_480x480.png',
      new Date(),
      185
    ),
  ]
  
  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

}