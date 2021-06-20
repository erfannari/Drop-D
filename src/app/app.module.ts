import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {TopBackgroundComponent} from './components/top-background/top-background.component';
import {BottomSectionComponent} from './components/bottom-section/bottom-section.component';
import {LeftSectionComponent} from './components/bottom-section/left-section/left-section.component';
import {RightSectionComponent} from './components/bottom-section/right-section/right-section.component';
import {RouterModule} from '@angular/router';
import {MusicGenresComponent} from './components/music-genres/music-genres.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DiscographyComponent} from './components/discography/discography.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {ShortenPipe} from './components/music-genres/Shorten.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './components/sign-up/auth.interceptor.service';
import {LoggingInterceptorService} from './components/sign-up/logging-interceptor.service';
import { AuthPageComponent } from './components/auth-page/auth-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBackgroundComponent,
    BottomSectionComponent,
    LeftSectionComponent,
    RightSectionComponent,
    MusicGenresComponent,
    HomeComponent,
    DiscographyComponent,
    SignUpComponent,
    ShortenPipe,
    AuthPageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
