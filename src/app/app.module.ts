import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui-components/header/header.component';
import { FilterComponent } from './ui-components/filter/filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './ui-components/search/search.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemTileComponent } from './ui-components/item-tile/item-tile.component';
import { HomeComponent } from './components/home/home.component';
import { ViewItemComponent } from './components/view-item/view-item.component';
import { ImageSliderComponent } from './ui-components/image-slider/image-slider.component';
import { ButtonComponent } from './ui-components/button/button.component';
import { InputComponent } from './ui-components/input/input.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CreateAdsComponent } from './components/create-ads/create-ads.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PannelComponent } from './ui-components/pannel/pannel.component';
import {ProgressBarModule} from "angular-progress-bar";
import { AdDetailsComponent } from './components/create-ads/ad-details/ad-details.component';
import { AddressComponent } from './components/create-ads/address/address.component';
import { ComfirmComponent } from './components/create-ads/comfirm/comfirm.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  SocialAuthService,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { TextAreaComponent } from './ui-components/text-area/text-area.component';
import { SelectComponent } from './ui-components/select/select.component';
import { FileUploadComponent } from './ui-components/file-upload/file-upload.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GoogleSearchComponent } from './ui-components/google-search/google-search.component';
import { StatusPannelComponent } from './ui-components/status-pannel/status-pannel.component'; 
import { StateManagementModule } from './state/state.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgxWebstorageModule, SessionStorageService } from 'ngx-webstorage';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    SearchComponent,
    ItemListComponent,
    ItemTileComponent,
    HomeComponent,
    ViewItemComponent,
    ImageSliderComponent,
    ButtonComponent,
    InputComponent,
    LoginComponent,
    ModalComponent,
    RegisterComponent,
    CreateAdsComponent,
    PannelComponent,
    AdDetailsComponent,
    AddressComponent,
    ComfirmComponent,
    TextAreaComponent,
    SelectComponent,
    FileUploadComponent,
    GoogleSearchComponent,
    StatusPannelComponent

  ],
  imports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    MatDialogModule,
    MatPaginatorModule,
    ProgressBarModule,
    MatProgressBarModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    StateManagementModule.forRoot(),
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
  },
  {provide: SessionStorageService},

    {provide: SocialAuthService},
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('664233609588-0r7nk2rjk02h1tfdpnllfigj9vo694sc.apps.googleusercontent.com',
            {
              scope: 'email',
              plugin_name: 'used.com'
            }),
          },
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
  ],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
