import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../classes/Product';
import { ServiceclientService } from '../serviceclient.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  id!: string;
  constructor(private route: ActivatedRoute,private _ServiceclientService :ServiceclientService) { 
    this.route.queryParams.subscribe(params => {
     this.id = params['id'];

     this._ServiceclientService.getProductDetails(this.id).subscribe(
      data=>{
        debugger;
       this.productdetails=data
      }
    )
    })
  }
  productdetails!: Products;
  ngOnInit(): void {

  }

}
