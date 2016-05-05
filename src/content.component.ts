import {Component} from 'angular2/core';

@Component({
    selector: 'content-component',
    templateUrl: './src/template/content.template.html',
    styleUrls: ['src/stylesheet/content.style.css']
})

export class ContentComponent {
    public content: string;
    
    constructor() {
        this.content = "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.";
    }
}