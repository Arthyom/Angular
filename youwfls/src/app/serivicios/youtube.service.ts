import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
 

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  nextPageToken  : any;

  constructor( private http: HttpClient) { }

  getVideosFromChanel(  ){
    
    let params : HttpParams = new HttpParams();
    params = params.set('part', 'snippet');
    params = params.set('maxResults', '10');
    params = params.set('playlistId', 'UUuaPTYj15JSkETGnEseaFFg');
    params = params.set('key', environment.apiKey);

    if( this.nextPageToken )
    params = params.set('pageToken', this.nextPageToken);


    const url = `${environment.youtubeBaseUrl}playlistItems?`;
    return this.http.get( url, {params} )
    .pipe(
      map( (data:any) =>{
        this.nextPageToken = data.nextPageToken;

        let videos: any = [];

        for( let video of data.items ){
          let snippet = video.snippet;
          videos.push( snippet );
        }
        return videos;
      })
    );
  }

}
