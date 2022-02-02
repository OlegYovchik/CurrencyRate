import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetCashService } from './service/get-cash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arrCurrency: any = [];
  arrFooter: any = [];
  form!: FormGroup;
  choise = false;
  selectCurrency: string = "";
  searchObj = {cc: "", txt: "", rate: 28, exchangedate: ""};
  outSum: number = 0;

  constructor(private currency: GetCashService){}
  
  ngOnInit(){
    this.currency.getCurrency().subscribe(res=>{
      this.arrCurrency = res;
      this.arrFooter = this.arrCurrency.filter((x:any)=>x.cc == "RUB" || x.cc == "USD" || x.cc == "EUR");
    })
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

