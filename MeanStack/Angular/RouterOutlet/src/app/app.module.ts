import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './components/todos/todos.component';
import { RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { TodosService } from './services/todos.service';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes:Routes=[
  {path:'about',component:AboutComponent},
  {path:'todos',component:TodosComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'create',component:TodoCreateComponent},
  {path:'edit/:id',component:TodoEditComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    TodosComponent,
    TodoCreateComponent,
    TodoEditComponent
  ],
  imports: [
    HttpClientModule,FormsModule,ReactiveFormsModule,
    BrowserModule,RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    )
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
