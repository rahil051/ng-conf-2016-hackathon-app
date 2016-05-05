import {Component} from 'angular2/core';

@Component({
    selector: 'header-component',
    templateUrl: './src/template/header.template.html',
    styleUrls: ['src/stylesheet/header.style.css']
})

export class HeaderComponent {
    public heading: string;
    
    constructor() {
        this.heading = "Countries and Capitals"
    }
}