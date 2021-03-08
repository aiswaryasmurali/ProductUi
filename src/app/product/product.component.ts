import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import {ServiceclientService} from '../serviceclient.service'
import{Products} from '../classes/Product'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productlist!: Products[];
  constructor(private _ServiceclientService :ServiceclientService) { }

  ngOnInit(): void {
    this._ServiceclientService.getProducts().subscribe(
      data=>{
        this.productlist=data
      }
    )
  }

}
