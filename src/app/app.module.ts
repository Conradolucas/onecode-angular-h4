import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
// import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Auth } from './shared/auth/auth.service'
// import { httpFactory } from './shared/auth/http.factory';

// import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true }, // <-- debugging purposes only
    // )
  ],
  providers: [
    Auth
    // {
    //   provide: Http,
    //   useFactory: httpFactory,
    //   deps: [XHRBackend, RequestOptions],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
