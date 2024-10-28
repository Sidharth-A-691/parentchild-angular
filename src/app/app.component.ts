import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';

  EnterName= "John Doe";
  EnterAge= "25";
  EnterStatus= "single";
  EnterGender= "Male";
  EnterHeight= "5.6";
  parentData1="";
  parentData2="";
  parentData3="";
  parentData4="";
  parentData5="";

  transferData()
  {
    this.parentData1=this.EnterName;
    this.parentData2=this.EnterAge;
    this.parentData3=this.EnterStatus;
    this.parentData4=this.EnterGender;
    this.parentData5=this.EnterHeight;
  }
  value = "";
  sendData(value: string)
  {
    this.value = value;
  }
}
