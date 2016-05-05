import {Component} from 'angular2/core';
import {HeaderComponent} from './header.component';
import {ContentComponent} from './content.component';

@Component({
  selector: 'app',
  templateUrl: './src/template/main.html',
  styleUrls: ['src/stylesheet/style.css'],
  directives: [HeaderComponent, ContentComponent]
})

export class AppComponent{
    
}