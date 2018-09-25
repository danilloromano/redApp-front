import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

// import { Observable } from 'rxjs';
import { Video } from './video';

@Injectable()

export class VideoService {

  getVideoUrl: string;

  constructor(private http: HttpClient) {
    this.getVideoUrl = 'http://localhost:8080/videos';

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // };
  }

   getVideo() {
    return this.http.get<Video>(this.getVideoUrl);
   }
}

