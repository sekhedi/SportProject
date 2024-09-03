import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SinupComponent } from './components/sinup/sinup.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { SearchPlayersComponent } from './components/search-players/search-players.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SearchTeamsComponent } from './components/search-teams/search-teams.component';

const routes: Routes = [{path:'',component:HomeComponent},
                        {path:'signin',component: LoginComponent},
                        {path:'inscription',component: SinupComponent},
                        {path:'inscriptionAdmin',component: SinupComponent},
                        {path:'addMatch',component:AddMatchComponent},
                        {path:'addPlayer',component:AddPlayerComponent},
                        {path:'addTeam',component:AddTeamComponent},
                        {path:'admin',component:AdminComponent},
                        {path:'matches',component:MatchesComponent},
                        {path:'Players',component:PlayersComponent},
                        {path:'searchMatches',component:SearchMatchesComponent},
                        {path:'matcheInfo/:id',component:MatchInfoComponent},
                        {path:'editMatch/:id',component:EditMatchComponent},
                        {path:'editPlayer/:id',component:EditPlayerComponent},
                        {path:'playerInfo/:id',component:PlayerInfoComponent},
                        {path:'searchPlayers',component:SearchPlayersComponent},
                        {path:'editTeam/:id',component:EditTeamComponent},
                        {path:'teamInfo/:id',component:TeamInfoComponent},
                        {path:'Teams',component:TeamsComponent},
                        {path:'searchTeams',component:SearchTeamsComponent},

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
