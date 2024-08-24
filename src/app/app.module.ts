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

@NgModule({
  declarations: [AppComponent, TopBarComponent, BottomBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    AuthorModule,
    TouristModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
