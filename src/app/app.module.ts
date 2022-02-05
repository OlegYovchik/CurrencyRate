import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherCurrencyComponent } from './other-currency/other-currency.component';
import { Route, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';

export const routes: Route[] = [
  {path: '', component: BasicComponent},
  {path: 'other', component: OtherCurrencyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    OtherCurrencyComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
