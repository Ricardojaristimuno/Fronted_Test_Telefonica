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

    //**Datos de cupos por linea */
    this.Data.GetCupos().subscribe(res=>{
      this.Cupos= res
    });
    //**Usuario que le pertenece la linea */
    this.Data.GetUsers().subscribe((res:any)=>{
      if (res.length > 0) {
        this.Users = res[0]['name'];
      }
      
    });
  }

//**Inyección de datos de linea seleccionada */
  getSelecteCupos() {

    return this.Cupos.find((item:any) => item.id === this.selectedValue);
  }
}


