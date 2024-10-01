import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createAt!: Date;
  snaps!: number;
  imageURL!: string;
  snapButtonText!: string;
  isSnap!: boolean;

  ngOnInit(): void {
    this.title = 'Vegeta';
    this.description = 'Best anime character';
    this.createAt = new Date;
    this.snaps = 154564;
    this.imageURL = 'https://static.wikia.nocookie.net/dragonball/images/2/2c/Vegeta_Manga.png';
    this.snapButtonText = "Oh Snap!";
    this.isSnap = false;
  }
  onSnap(): void {
    if (this.isSnap === false){
    this.snaps++;
    this.isSnap = true;
    this.snapButtonText = "Oops, un Snap";
  } 
    else if (this.isSnap === true){
      this.snaps--;
      this.isSnap = false;
      this.snapButtonText = "Oh Snap!";}
  }
}
