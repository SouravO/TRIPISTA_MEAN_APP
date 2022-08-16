import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthadminGuard } from './authadmin.guard';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { AdminComponent } from './admin/admin.component';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { DistrictsComponent } from './districts/districts.component';
import { ErnakulamComponent } from './ernakulam/ernakulam.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GuideRegComponent } from './guide-reg/guide-reg.component';
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
import { RegisterComponent } from './register/register.component';
import { ThrissurComponent } from './thrissur/thrissur.component';
import { TrivandrumComponent } from './trivandrum/trivandrum.component';
import { UpdatehotelComponent } from './updatehotel/updatehotel.component';
import { ProfileComponent } from './profile/profile.component';
import { WayanadComponent } from './wayanad/wayanad.component';
import { GuideDetailsComponent } from './guide-details/guide-details.component';
import { ModalComponent } from './modal/modal.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CareersComponent } from './careers/careers.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'admin',component:AdminComponent},
{path:'districts',component:DistrictsComponent},
{path:'login',component:LoginComponent},
{path: 'careers', component:CareersComponent},
{path: 'privacy', component:PrivacyComponent},
{path: 'modal', component:ModalComponent},
{path:'help',component:HelpComponent},
{path:'register',component:RegisterComponent},
{path:'hotels',component:HotelsComponent},
{path:'feedback',component:FeedbackComponent},
{path:'guide',component:GuideRegComponent},
{path:'guides', component:GuideDetailsComponent},
{ path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
{path:'addhotel',canActivate: [AuthadminGuard],component:AddhotelComponent},
{path:'updatehotel/:id',component:UpdatehotelComponent},
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










