import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from '../components/Admin/admin.module';
import { AuthorModule } from '../components/Author/author.module';
import { TouristModule } from '../components/Tourist/tourist.module';
import { TopBarComponent } from '../components/shared/top-bar/top-bar.component';
import { BottomBarComponent } from '../components/shared/bottom-bar/bottom-bar.component';
import { AuthModule } from '../auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, TopBarComponent, BottomBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    AuthorModule,
    TouristModule,
    AuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
