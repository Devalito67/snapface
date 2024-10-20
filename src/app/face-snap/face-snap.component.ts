import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

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

  constructor(private faceSnapsService: FaceSnapsService) {}

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
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap");
    this.snapButtonText = 'Oh Snap!';
    this.isSnap = false;
  }

  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap");
    this.snapButtonText = 'Oops, un Snap!';
    this.isSnap = true;
  }
}