import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList, IonItem, IonSelect, IonSelectOption, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonGrid, IonRow, IonCol, IonRippleEffect } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent,
     IonHeader,
      IonTitle,
      IonToolbar,
      CommonModule,
      FormsModule,
      IonList,
      IonItem,
      IonSelect,
      IonSelectOption,
      IonLabel,
      IonCard,
      IonCardHeader,
      IonCardTitle,
      IonCardSubtitle,
      IonCardContent,
      IonImg,
      IonGrid,
      IonRow,
      IonCol,
      IonRippleEffect]
})

export class DashboardPage implements OnInit {

  selectedValue = [];
  items = []
  Cupos: any=[];


  public Users: string | undefined;


  constructor(private Data:DataService,private datePipe: DatePipe) {
    
   }

  ngOnInit() {
    this.Data.GetCupos().subscribe(res=>{
      console.log(res)
      
      this.Cupos= res
    });

    this.Data.GetUsers().subscribe((res:any)=>{
      console.log(res)
      if (res.length > 0) {
        this.Users = res[0]['name'];
      }
      
    });
  }


  getSelecteCupos() {

    return this.Cupos.find((item:any) => item.id === this.selectedValue);
  }
}


