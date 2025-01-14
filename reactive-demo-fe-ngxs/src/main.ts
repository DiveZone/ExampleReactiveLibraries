import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { AirlinesModule } from './app/airlines/airlines.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, 
        // NGXS
        NgxsModule.forRoot([]), NgxsReduxDevtoolsPluginModule.forRoot(), NgxsLoggerPluginModule.forRoot(), 
        // APP
        AirlinesModule),
        provideAnimations()
    ]
})
  .catch(err => console.log(err));
