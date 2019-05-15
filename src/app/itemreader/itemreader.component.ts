import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Shopping } from './../models/shopping.model';
import { AppState } from './../app.state';
import * as ShoppingActions from './../actions/shopping.actions';

@Component({
  selector: 'app-itemreader',
  templateUrl: './itemreader.component.html',
  styleUrls: ['./itemreader.component.css']
})
export class ItemreaderComponent implements OnInit {

  //defining an observable to be displayed later
  items: Observable<Shopping[]>;

  //accessing the @ngrx/store and selecting the shopping property available in app.module.ts
  constructor(private store: Store<AppState>) {
    this.items = store.select('shopping');
  }
  //call the DeleteItem action and pass the index
  deleteItem(index) {
    this.store.dispatch(new ShoppingActions.DeleteItem(index) )
  }

  ngOnInit() {
  }

}
