import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe,
    TitleCasePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  isSnap!: boolean;

  constructor(private faceSnapsService: FaceSnapsService,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.isSnap = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

}
