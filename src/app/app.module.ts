import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ShareService } from './services/share.service'

import { appRoutes } from './modules/router.module';

import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [ShareService],
  declarations: [ AppComponent, IndexComponent, CreateComponent, HeaderComponent, AuthenticateComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}