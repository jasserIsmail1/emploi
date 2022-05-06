import { OfferService } from './../../Services/Offer/Offer.service';
import { Offer } from './../../Models/offer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  offer: Offer = new Offer('',0,'',new Date());
  constructor(private offerService: OfferService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveOffer(){
    this.offerService.createOffer(this.offer).subscribe( data =>{
      console.log(data);
      this.goToOffersList();
    },
    error => console.log(error));
  }

  goToOffersList(){
    this.router.navigate(['/offers']);
  }
  
  onSubmit(){
    console.log(this.offer);
    this.saveOffer();
  }
}
