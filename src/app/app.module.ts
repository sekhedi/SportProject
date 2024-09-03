import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SinupComponent } from './components/sinup/sinup.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StandingsComponent } from './components/standings/standings.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { TabMatchComponent } from './components/tab-match/tab-match.component';
import { TabTeamComponent } from './components/tab-team/tab-team.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TabPlayerComponent } from './components/tab-player/tab-player.component';
import { TabStadumComponent } from './components/tab-stadum/tab-stadum.component';
import { PlayersComponent } from './components/players/players.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import{HttpClientModule} from'@angular/common/http';
import { SearchPlayersComponent } from './components/search-players/search-players.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamsComponent } from './components/teams/teams.component';
import { SearchTeamsComponent } from './components/search-teams/search-teams.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SinupComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    InfoComponent,
    ArticleComponent,
    BlogComponent,
    HomeComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AdminComponent,
    TabMatchComponent,
    TabTeamComponent,
    MatchesComponent,
    TabPlayerComponent,
    TabStadumComponent,
    PlayersComponent,
    SearchMatchesComponent,
    MatchInfoComponent,
    EditMatchComponent,
    PlayerInfoComponent,
    EditPlayerComponent,
    SearchPlayersComponent,
    AsterixPipe,
    EditTeamComponent,
    TeamInfoComponent,
    TeamsComponent,
    SearchTeamsComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
