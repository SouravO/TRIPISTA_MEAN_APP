import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DistrictsComponent } from './districts/districts.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AlappuzhaComponent } from './alappuzha/alappuzha.component';
import { ErnakulamComponent } from './ernakulam/ernakulam.component';
import { IdukkiComponent } from './idukki/idukki.component';
import { KasaragodComponent } from './kasaragod/kasaragod.component';
import { KollamComponent } from './kollam/kollam.component';
import { KottayamComponent } from './kottayam/kottayam.component';
import { KozhikodeComponent } from './kozhikode/kozhikode.component';
import { MalappuramComponent } from './malappuram/malappuram.component';
import { PalakkadComponent } from './palakkad/palakkad.component';
import { PathanamthittaComponent } from './pathanamthitta/pathanamthitta.component';
import { TrivandrumComponent } from './trivandrum/trivandrum.component';
import { ThrissurComponent } from './thrissur/thrissur.component';
import { WayanadComponent } from './wayanad/wayanad.component';
import { KannurComponent } from './kannur/kannur.component';
import { HotelsComponent } from './hotels/hotels.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FooterComponent } from './footer/footer.component';
import { GuideRegComponent } from './guide-reg/guide-reg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DistrictsComponent,
    LoginComponent,
    HelpComponent,
    SignupComponent,
    HomeComponent,
    AlappuzhaComponent,
    ErnakulamComponent,
    IdukkiComponent,
    KasaragodComponent,
    KollamComponent,
    KottayamComponent,
    KozhikodeComponent,
    MalappuramComponent,
    PalakkadComponent,
    PathanamthittaComponent,
    TrivandrumComponent,
    ThrissurComponent,
    WayanadComponent,
    KannurComponent,
    HotelsComponent,
    FeedbackComponent,
    FooterComponent,
    GuideRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
