import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import {HttpClientModule} from '@angular/common/http';
import { MissionComponent } from './mission/mission.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';


const URL = 'https://api.spacex.land/graphql/';

@NgModule({
  declarations: [
    AppComponent,
    MissionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: URL
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
