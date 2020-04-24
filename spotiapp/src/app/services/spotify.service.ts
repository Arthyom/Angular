import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotyToken = 'Bearer BQCkj_Q2Uj9z39lp3lSA4dMHvgsF0ri28blxiDvnkZBjJh-9ltHxx8QkssPe05Q1h2tkAJirMPF3PTkvfNreuYFmUSarKMdIpl1ydt63aj9xtyqUbTx--32TQ06JDM0EVErdcC7Sy_5TumgtKz1rlDJ_-cCFJUk"'
  constructor(
    private http : HttpClient
  ) { }

  spotify_Get_Querry( targetUrlAndQuerry: string ) {
    const headers = new HttpHeaders({
      'Content-Type'  : 'application/json',
      'Authorization' : this.spotyToken
    });
    return this.http.get( targetUrlAndQuerry, { headers:headers });
  }

  spotify_Get_Browser( targetEndPoint : string = 'browse/new-releases' ){

    return this.spotify_Get_Querry( environment.spotifyUrlBase+targetEndPoint )
    .pipe( map( (data: any) =>   data.albums.items ));
  }



  spotify_Search_Artist( searchTerm: string,  targetEndPoint : string = 'search' ){
    const targetUrl = `${environment.spotifyUrlBase}${targetEndPoint}?q=${searchTerm}&type=artist`
    
    return this.spotify_Get_Querry( targetUrl )
    .pipe( map( (data:any) => data.artists.items ));
  }

  spotify_Get_Artist( artistID: string ){
    const targetUrl =  `${environment.spotifyUrlBase}artists/${artistID}`;
    return this.spotify_Get_Querry( targetUrl )
    .pipe( map( (data:any) =>  data ));
  }

  spotify_Get_Artist_TopTracks( artistID: string, region:string ='MX' ){
    const targetUrl =  `${environment.spotifyUrlBase}artists/${artistID}/top-tracks?country=${region}`;
    return this.spotify_Get_Querry( targetUrl )
    .pipe( map( (data:any) =>  data.tracks ));
  }


}
