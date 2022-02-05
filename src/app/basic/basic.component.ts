import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetCashService } from '../service/get-cash.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  arrCurrency: any = [];
  arrFooter: any = [];
  form!: FormGroup;
  choise = false;
  selectCurrency: string = "";
  searchObj = {cc: "", txt: "", rate: 0, exchangedate: ""};
  outSum: number = 0;

  constructor(private currency: GetCashService){}
  
  ngOnInit(){
    this.currency.getCash().subscribe((data)=>{
      this.arrFooter = data.filter((x:any)=>x.cc == "RUB" || x.cc == "USD" || x.cc == "EUR");
      this.arrCurrency = data;
      this.searchObj = data[0]
    });

    this.form = new FormGroup({
      input: new FormControl(""),
      select: new FormControl("")
    })
  }

  getCash(){
    this.selectCurrency = this.form.value.select;
    this.choise = true;
    for(var i = 0; i < this.arrCurrency.length; i++){
      if(this.arrCurrency[i].txt == this.selectCurrency){
        this.searchObj = this.arrCurrency[i];
        break;
      }
    }
    console.log(this.arrCurrency)
    this.outSum = this.form.value.input * this.searchObj.rate;
  }
}

