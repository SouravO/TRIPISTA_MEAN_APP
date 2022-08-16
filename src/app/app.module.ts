import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DistrictsComponent } from './districts/districts.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
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
import { AddhotelComponent } from './addhotel/addhotel.component';
import { UpdatehotelComponent } from './updatehotel/updatehotel.component';
import { AdminComponent } from './admin/admin.component';
import { AuthadminService } from './authadmin.service';
import { AuthadminGuard } from './authadmin.guard';
import { HotelsService } from './hotels.service';
import { FeedbackService } from './feedback.service';
import { GuideRegComponent } from './guide-reg/guide-reg.component';
import { GuideDetailsComponent } from './guide-details/guide-details.component';
import { GuidesService } from './guides.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CareersComponent } from './careers/careers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DistrictsComponent,
    LoginComponent,
    HelpComponent,
    RegisterComponent,
    ProfileComponent,
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
    GuideDetailsComponent,
    GuideRegComponent,
    FooterComponent,
    AddhotelComponent,
    UpdatehotelComponent,
    AdminComponent,
    SearchComponent,
    CareersComponent,
    ModalComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    SlickCarouselModule,
  ],
  providers: [HotelsService,AuthadminService,AuthadminGuard,authInterceptorProviders,FeedbackService,GuidesService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
