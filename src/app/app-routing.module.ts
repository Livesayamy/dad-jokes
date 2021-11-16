import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeGeneratorComponent } from './joke-generator/joke-generator.component';
import { JokePageComponent } from './joke-page/joke-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/header', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'joke-page', component: JokePageComponent},
  { path: 'joke-generator', component: JokeGeneratorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
