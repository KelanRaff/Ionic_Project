import { Component, OnInit } from '@angular/core';
import  { Storage } from '@ionic/storage';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {
  
  myAge:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController ) {}

  ngOnInit(){  
    this.storage.get("age")
    .then((data)=>{
      this.myAge=data;
    })
  }

  updateStatus(){
    this.storage.set('age',this.myAge)
    .then(()=>{
      this.navCtrl.navigateBack('/home')
    })
    .catch()
  }

}

