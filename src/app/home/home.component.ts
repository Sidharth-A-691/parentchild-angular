import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    @Input() parentData1!: string; //wherever we are using the input decorator, it is the child component.
    @Input() parentData2!: string;
    @Input() parentData3!: string;
    @Input() parentData4!: string;
    @Input() parentData5!: string;    
}
