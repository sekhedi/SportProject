import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  //adress de serveur backend
  //adress de destination
  playerURL:string='http://localhost:3000/players';
  constructor(private httpClient:HttpClient) { }
  //request to get allPlayers
  //reponse:array of object(tableau des objet)
  getAllPlayers(){
    return this.httpClient.get<{T:any}>(this.playerURL);
  }
  //request to get PlayerById
  //reponse:one object
  getPlayerById(id:any){
    //return this.httpClient.get(this.playerURL +'/'+ id);
    return this.httpClient.get<{T:any}>(`${this.playerURL}/${id}`);

  }
   //request to delete PlayerById
   //reponse :boolean (true or false)
   deletePlayerById(id:any){
    return this.httpClient.delete<{msg:string}>(`${this.playerURL}/${id}`);
  }
  // request to AddPlayer
  // reponse:boolean/string
  addPlayer(Object:any){
     return this.httpClient.post<{msg:string}>(this.playerURL,Object);
  }
  // request to EditPlayer
  // reponse:boolean/string
  editPlayer(object:any){
    return this.httpClient.put<{msg:string}>(this.playerURL,object);
  }

}

