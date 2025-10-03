// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app/app.config';
// import { App } from './app/app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app/app.module';

platformBrowser().bootstrapModule(AppModule);
