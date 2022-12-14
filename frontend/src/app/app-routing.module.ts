import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvFormComponent } from './pages/cv-form/cv-form.component';
import { DownloadComponent } from './pages/download/download.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { TemplateComponent } from './pages/template/template.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'cvform', component: CvFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'download', component: DownloadComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

