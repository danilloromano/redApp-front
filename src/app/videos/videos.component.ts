import { Component, OnInit } from '@angular/core';
import { Video } from './video';
import { VideoService } from './video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: Video;
  error: string;

  constructor(private service: VideoService) { }

  showVideos() {
    this.service.getVideo().subscribe(data => {
      console.log(data);
    });
      // .subscribe(
      //   (data: Video) => this.videos = { ...data }, // success path
      //   error => this.error = error // error path
      // );
  }

  ngOnInit() {
    this.showVideos();
  }

}
