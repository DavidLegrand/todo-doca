import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { ParentComponent } from './in-out/parent/parent.component';
import { EnfantComponent } from './in-out/enfant/enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ParentComponent,
    EnfantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
