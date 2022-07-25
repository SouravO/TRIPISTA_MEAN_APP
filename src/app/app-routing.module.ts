import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { DistrictsComponent } from './districts/districts.component';
import { ErnakulamComponent } from './ernakulam/ernakulam.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { IdukkiComponent } from './idukki/idukki.component';
import { KannurComponent } from './kannur/kannur.component';
import { KasaragodComponent } from './kasaragod/kasaragod.component';
import { KollamComponent } from './kollam/kollam.component';
import { KottayamComponent } from './kottayam/kottayam.component';
import { KozhikodeComponent } from './kozhikode/kozhikode.component';
import { LoginComponent } from './login/login.component';
import { MalappuramComponent } from './malappuram/malappuram.component';
import { PalakkadComponent } from './palakkad/palakkad.component';
import { PathanamthittaComponent } from './pathanamthitta/pathanamthitta.component';
import { SignupComponent } from './signup/signup.component';
import { ThrissurComponent } from './thrissur/thrissur.component';
import { TrivandrumComponent } from './trivandrum/trivandrum.component';
import { WayanadComponent } from './wayanad/wayanad.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'districts',component:DistrictsComponent},
{path:'login',component:LoginComponent},
{path:'help',component:HelpComponent},
{path:'signup',component:SignupComponent},
{path:'hotels',component:HotelsComponent},
{path:'feedback',component:FeedbackComponent},
{path:'',children:[
  {path:'districts/alappuzha',component:AlappuzhaComponent},
  {path:'districts/ernakulam',component:ErnakulamComponent},
  {path:'districts/idukki',component:IdukkiComponent},
  {path:'districts/kannur',component:KannurComponent},
  {path:'districts/kasaragod',component:KasaragodComponent},
  {path:'districts/kollam',component:KollamComponent},
  {path:'districts/kottayam',component:KottayamComponent},
  {path:'districts/kozhikode',component:KozhikodeComponent},
  {path:'districts/malappuram',component:MalappuramComponent},
  {path:'districts/palakkad',component:PalakkadComponent},
  {path:'districts/pathanamthitta',component:PathanamthittaComponent},
  {path:'districts/trivandrum',component:TrivandrumComponent},
  {path:'districts/thrissur',component:ThrissurComponent},
  {path:'districts/wayanad',component:WayanadComponent}
]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





// ,
// children:[
//   {path:'alappuzha',component:AlappuzhaComponent},
//   {path:'ernakulam',component:ErnakulamComponent},
//   {path:'idukki',component:IdukkiComponent},
//   {path:'kannur',component:KannurComponent},
//   {path:'kasaragod',component:KasaragodComponent},
//   {path:'kollam',component:KollamComponent},
//   {path:'kottayam',component:KottayamComponent},
//   {path:'kozhikode',component:KozhikodeComponent},
//   {path:'malappuram',component:MalappuramComponent},
//   {path:'palakkad',component:PalakkadComponent},
//   {path:'pathanamthitta',component:PathanamthittaComponent},
//   {path:'trivandrum',component:TrivandrumComponent},
//   {path:'thrissur',component:ThrissurComponent},
//   {path:'wayanad',component:WayanadComponent}
// ]







