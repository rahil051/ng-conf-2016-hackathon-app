import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';

bootstrap(AppComponent)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));
