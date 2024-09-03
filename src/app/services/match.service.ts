import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //adress de serveur backend
  //adress de destination
  matchUrl:string= 'http://localhost:3000/matches';


  constructor(private httpClient: HttpClient) { }
  //request to get allMatches
  //reponse:array of object(tableau des objet)
  getAllMatches() {
    return this.httpClient.get<{ T: any }>(this.matchUrl);
  }
  //request to get MatcheById
  //reponse:one object
  getMatchById(id: any) {
    //return this.httpClient.get<{ match: any }>(this.matchUrl +'/'+ id);
    return this.httpClient.get<{ match: any }>(`${this.matchUrl}/${id}`);

  }
  //request to delete MatcheById
  //reponse :boolean (true or false)
  deleteMatchById(id: any) {
    return this.httpClient.delete<{msg:string}>(`${this.matchUrl}/${id}`);
  }
  // request to AddMatch
  // reponse:boolean/string
  addMatch(matchObject: any) {
    return this.httpClient.post<{msg:string}>(this.matchUrl, matchObject);
  }
  // request to EditMatch
  // reponse:boolean/string
  editMatch(newMatch: any) {
    return this.httpClient.put<{ msg: string }>(this.matchUrl, newMatch);
  }
  searchMatch(matchObject: any) {
    return this.httpClient.post<{ T:any  }>(`${this.matchUrl}/search`, matchObject);
  }

}
