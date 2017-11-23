import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import localeEn from '@angular/common/locales/en';

// if you remove these 2 lines everything works
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEn);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal-demo'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
