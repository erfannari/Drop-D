import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MusicGenresComponent} from './components/music-genres/music-genres.component';
import {HomeComponent} from './components/home/home.component';
import {DiscographyComponent} from './components/discography/discography.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {AuthPageComponent} from './components/auth-page/auth-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'genres', component: MusicGenresComponent},
  {path: 'discography', component: DiscographyComponent},
  {path: 'sign-up' , component: SignUpComponent},
  {path: 'Auth', component: AuthPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
