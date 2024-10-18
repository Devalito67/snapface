import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe,
    TitleCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;


  snapButtonText!: string;
  isSnap!: boolean;

  ngOnInit(): void {
    this.snapButtonText = "Oh Snap!";
    this.isSnap = false;
  }
  onSnap(): void {
    if (this.isSnap === false) {
      this.snap();
    } else if (this.isSnap === true) {
      this.unSnap();
    }
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.isSnap = false;
  }

  snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, un Snap!';
    this.isSnap = true;
  }
}