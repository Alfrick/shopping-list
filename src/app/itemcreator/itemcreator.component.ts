import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Shopping } from './../models/shopping.model';
import * as ShoppingActions from './../actions/shopping.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-itemcreator',
  templateUrl: './itemcreator.component.html',
  styleUrls: ['./itemcreator.component.css']
})

export class ItemcreatorComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addItem(name) {
    //store.dispatch takes an object having the name property
    this.store.dispatch(new ShoppingActions.AddItem({name: name}) )
  }

  ngOnInit() {
  }

}
