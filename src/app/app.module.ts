import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入路由
import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
//组件
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';

//引入服务
import  {UserService } from './services/user.service'

//设置路由
const appRoutes:Routes = [
  {path : '',component:HomeComponent},
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'add-user',component:AddUserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UsersDetailComponent,
    AddUserComponent,
    EditUserComponent,
    NavBarComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
