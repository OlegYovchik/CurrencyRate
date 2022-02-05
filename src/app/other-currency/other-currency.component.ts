import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetCashService } from '../service/get-cash.service';

@Component({
  selector: 'app-other-currency',
  templateUrl: './other-currency.component.html',
  styleUrls: ['./other-currency.component.css']
})
export class OtherCurrencyComponent implements OnInit {
  arrFooter: any [] = [];
  arrCurrency: any [] = [];

  arrCurrencyFirst: any [] = [];
  arrCurrencySecond: any [] = [];
  choise: boolean = false;
  outSum: number = 0;
  first = "Первая валюта";
  second = "Вторая валюта";

  form!: FormGroup

  constructor(private currency: GetCashService) { }

  ngOnInit(){
    this.form = new FormGroup({
      input: new FormControl(""),
      select: new FormControl(""),
      selectOther: new FormControl("")
    })
    this.currency.getCash().subscribe((data)=>{
      this.arrFooter = data.filter((x: any)=>x.cc == "RUB" || x.cc == "USD" || x.cc == "EUR");
      this.arrCurrency = data;
    });
  }
  getCash(){
    this.choise = true;
    this.arrCurrencyFirst = this.arrCurrency.filter(x=>x.txt == this.form.value.select)
    this.arrCurrencySecond = this.arrCurrency.filter(x=>x.txt == this.form.value.selectOther)
    this.outSum = this.form.value.input * this.arrCurrencyFirst[0].rate / this.arrCurrencySecond[0].rate
    console.log(this.arrCurrencyFirst, this.arrCurrencySecond)
  }


}
