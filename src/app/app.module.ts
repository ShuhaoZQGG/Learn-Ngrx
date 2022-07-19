import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  declarations: [AppComponent, CounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/