import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //adress de serveur backend
  //adress de destination
  teamURL:string='http://localhost:3000/teams';
  constructor(private httpClient:HttpClient) { }
   // request to team
  // reponse:boolean/string
  addTeam(Object:any){
    return this.httpClient.post<{msg:string}>(this.teamURL,Object);
 }
 //request to delete teamById
   //reponse :boolean (true or false)
   deleteTeamById(id:any){
    return this.httpClient.delete<{msg:string}>(`${this.teamURL}/${id}`);
  }
  //request to get allteams
  //reponse:array of object(tableau des objet)
  getAllTeams(){
    return this.httpClient.get<{T:any}>(this.teamURL);
  }
  // request to EditTeam
  // reponse:boolean/string
  editTeam(object:any){
    return this.httpClient.put<{ msg:string}>(this.teamURL,object);
  }
  //request to get TeamById
  //reponse:one object
  getTeamById(id:any){
    //return this.httpClient.get(this.teamURL +'/'+ id);
    return this.httpClient.get<{T:any}>(`${this.teamURL}/${id}`);

  }
}
