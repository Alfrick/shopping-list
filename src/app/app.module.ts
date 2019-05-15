import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store'; //importing @ngrx store
import { ShoppingReducer } from './reducers/shopping.reducer';//importing reducer function

import { ItemreaderComponent } from './itemreader/itemreader.component';
import { ItemcreatorComponent } from './itemcreator/itemcreator.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemreaderComponent,
    ItemcreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
