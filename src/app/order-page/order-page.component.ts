import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as $ from 'jquery';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {
  disperseItem: any; 
  cartArray = [];
  cartArrayObj = {
    itemName: '',
    itemPrice: 0,
    itemQty: 0,
    itemBgImg: '',
    itemUrl: '',
    itemNumber: 0
  };
  totalCartValue = 0;
  chainiStoreItems = {
    soapItemsObj : [
      {
       itemName: 'Soap 1',
       itemPrice: 60,
       itemDescription: 'Refreshing,Nourishing,Deep Moisturizing All types of Skin',
       itemNumber: 1,
       itemClass: 'itemSoap1',
       itemAddToCartDisabled: false,
       itemUrl: '/soaps',
       itemQtyValue: 1
     },
     {
       itemName: 'Soap 2',
       itemPrice: 60,
       itemDescription: 'Refreshing,Nourishing,Deep Moisturizing All types of Skin',
       itemNumber: 2,
       itemClass: 'itemSoap2',
       itemAddToCartDisabled: false,
       itemUrl: '/soaps',
       itemQtyValue: 1
     },
     {
       itemName: 'Soap 3',
       itemPrice: 60,
       itemDescription: 'Refreshing,Nourishing,Deep Moisturizing All types of Skin',
       itemNumber: 3,
       itemClass: 'itemSoap3',
       itemAddToCartDisabled: false,
       itemUrl: '/soaps',
       itemQtyValue: 1
     },
     {
       itemName: 'Soap 4',
       itemPrice: 60,
       itemDescription: 'Refreshing,Nourishing,Deep Moisturizing All types of Skin',
       itemNumber: 4,
       itemClass: 'itemSoap4',
       itemAddToCartDisabled: false,
       itemUrl: '/soaps',
       itemQtyValue: 1
     },
     {
       itemName: 'Soap 5',
       itemPrice: 60,
       itemDescription: 'Refreshing,Nourishing,Deep Moisturizing All types of Skin',
       itemNumber: 5,
       itemClass: 'itemSoap5',
       itemAddToCartDisabled: false,
       itemUrl: '/soaps',
       itemQtyValue: 1
     },
     {
       itemName: 'Soap 6',
       itemPrice: 60,
       itemDescription: 'Refreshing,Nourishing,Deep Moisturizing All types of Skin',
       itemNumber: 6,
       itemClass: 'itemSoap6',
       itemAddToCartDisabled: false,
       itemUrl: '/soaps',
       itemQtyValue: 1
     }
   ],
   diyasItemObj : [
    {
      itemName: 'Diya 1',
      itemPrice: 60,
      itemDescription: 'Authentic Vibes,crafty design, incredible metallic touch',
      itemNumber: 1,
      itemClass: 'itemDiya1',
      itemAddToCartDisabled: false,
      itemUrl: '/diyas',
      itemQtyValue: 1
    },
    {
      itemName: 'Diya 2',
      itemPrice: 60,
      itemDescription: 'Authentic Vibes,crafty design, incredible metallic touch',
      itemNumber: 2,
      itemClass: 'itemDiya2',
      itemAddToCartDisabled: false,
      itemUrl: '/diyas',
      itemQtyValue: 1
    },
    {
      itemName: 'Diya 3',
      itemPrice: 60,
      itemDescription: 'Authentic Vibes,crafty design, incredible metallic touch',
      itemNumber: 3,
      itemClass: 'itemDiya3',
      itemAddToCartDisabled: false,
      itemUrl: '/diyas',
      itemQtyValue: 1
    },
    {
      itemName: 'Diya 4',
      itemPrice: 60,
      itemDescription: 'Authentic Vibes,crafty design, incredible metallic touch',
      itemNumber: 4,
      itemClass: 'itemDiya4',
      itemAddToCartDisabled: false,
      itemUrl: '/diyas',
      itemQtyValue: 1
    },
    {
      itemName: 'Diya 5',
      itemPrice: 60,
      itemDescription: 'Authentic Vibes,crafty design, incredible metallic touch',
      itemNumber: 5,
      itemClass: 'itemDiya5',
      itemAddToCartDisabled: false,
      itemUrl: '/diyas',
      itemQtyValue: 1
    },
    {
      itemName: 'Diya 6',
      itemPrice: 60,
      itemDescription: 'Authentic Vibes,crafty design, incredible metallic touch',
      itemNumber: 6,
      itemClass: 'itemDiya6',
      itemAddToCartDisabled: false,
      itemUrl: '/diyas',
      itemQtyValue: 1
    }
   ],
   garlicsItemObj: [
    {
      itemName: 'Garlic Pack of 1',
      itemPrice: 40,
      itemDescription: 'Freshly Peeled Garlics',
      itemNumber: 1,
      itemClass: 'itemGarlic1',
      itemAddToCartDisabled: false,
      itemUrl: '/garlics',
      itemQtyValue: 1
    },
    {
      itemName: 'Garlic Pack of 3',
      itemPrice: 110,
      itemDescription: 'Freshly Peeled Garlics',
      itemNumber: 2,
      itemClass: 'itemGarlic2',
      itemAddToCartDisabled: false,
      itemUrl: '/garlics',
      itemQtyValue: 1
    },
    {
      itemName: 'Garlic Pack of 6',
      itemPrice: 220,
      itemDescription: 'Freshly Peeled Garlics',
      itemNumber: 3,
      itemClass: 'itemGarlic3',
      itemAddToCartDisabled: false,
      itemUrl: '/garlics',
      itemQtyValue: 1
    }
   ],
   peasItemObj: [
    {
      itemName: 'Peas pack of 1',
      itemPrice: 40,
      itemDescription: 'Freshly Peeled Peas',
      itemNumber: 1,
      itemClass: 'itemPeas1',
      itemAddToCartDisabled: false,
      itemUrl: '/peas',
      itemQtyValue: 1
    },
    {
      itemName: 'Peas pack of 3',
      itemPrice: 110,
      itemDescription: 'Freshly Peeled Peas',
      itemNumber: 2,
      itemClass: 'itemPeas2',
      itemAddToCartDisabled: false,
      itemUrl: '/peas',
      itemQtyValue: 1
    },
    {
      itemName: 'Peas pack of 6',
      itemPrice: 220,
      itemDescription: 'Freshly Peeled Peas',
      itemNumber: 3,
      itemClass: 'itemPeas3',
      itemAddToCartDisabled: false,
      itemUrl: '/peas',
      itemQtyValue: 1
    }
   ],
   dairyItemObj: [
    {
      itemName: 'Home Made Butter',
      itemPrice: 60,
      itemDescription: 'Delicious and creamy home made Butter',
      itemNumber: 1,
      itemClass: 'itemDairy1',
      itemAddToCartDisabled: false,
      itemUrl: '/dairy',
      itemQtyValue: 1
    },
    {
      itemName: 'Home Made Paneer',
      itemPrice: 60,
      itemDescription: 'Fresh, tasty and creamy home made Paneer',
      itemNumber: 2,
      itemClass: 'itemDairy2',
      itemAddToCartDisabled: false,
      itemUrl: '/dairy',
      itemQtyValue: 1
    },
    {
      itemName: 'Pack of Butter & Paneer',
      itemPrice: 60,
      itemDescription: 'The best combo at best price',
      itemNumber: 3,
      itemClass: 'itemDairy3',
      itemAddToCartDisabled: false,
      itemUrl: '/dairy',
      itemQtyValue: 1
    }
   ]
  };
  itemCount = '';
  choiceText = ['Wow, Great Choice', 'Good Selection', 'Fantastic Choice', 'Superr!', 'Yayyy!!', 'Wohoooo!!', 'Amazing Choice!'];
  choiceTextCount = 0;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cartArrayObj = {
      itemName: '',
      itemPrice: 0,
      itemQty: 0,
      itemBgImg: '',
      itemUrl: '',
      itemNumber: 0
    };
    this.itemCount = '';
    this.cartArray = [];
    this.itemDisperse(this.router.url);
  }

  itemDisperse(url) {
    if(url == '/soaps') {
      this.disperseItem = this.chainiStoreItems.soapItemsObj;
    }
    if(url == '/diyas') {
      this.disperseItem = this.chainiStoreItems.diyasItemObj;
    }
    if(url == '/garlics') {
      this.disperseItem = this.chainiStoreItems.garlicsItemObj;
    }
    if(url == '/peas') {
      this.disperseItem = this.chainiStoreItems.peasItemObj;
    }
    if(url == '/dairy') {
      this.disperseItem = this.chainiStoreItems.dairyItemObj;
    }
  }

  removeItmFrmCrt(url, index, itemClass) {
    if(url == '/soaps') {
      this.chainiStoreItems.soapItemsObj[index - 1].itemAddToCartDisabled = false;
      this.cartRemoveFun(itemClass);
    }
    if(url == '/diyas') {
      this.chainiStoreItems.diyasItemObj[index - 1].itemAddToCartDisabled = false;
      this.cartRemoveFun(itemClass);
    }
    if(url == '/garlics') {
      this.chainiStoreItems.garlicsItemObj[index - 1].itemAddToCartDisabled = false;
      this.cartRemoveFun(itemClass);
    }
    if(url == '/peas') {
      this.chainiStoreItems.peasItemObj[index - 1].itemAddToCartDisabled = false;
      this.cartRemoveFun(itemClass);
    }
    if(url == '/dairy') {
      this.chainiStoreItems.dairyItemObj[index - 1].itemAddToCartDisabled = false;
      this.cartRemoveFun(itemClass);
    }
  }

  cartRemoveFun(itemClass) {
    let i = 0;
    for( i = 0; i < this.cartArray.length; i++) {
      if(this.cartArray[i].itemBgImg == itemClass) {
        this.totalCartValue = this.totalCartValue - this.cartArray[i].itemPrice;
        this.cartArray.splice(i, 1);
      }
      this.itemCount = (this.cartArray.length === 0)? '': this.cartArray.length.toString();
    }
  }

  itemQty(itemQtyOperator, itemQtyVal) {
  if(itemQtyOperator == 'minus') {
    if(this.disperseItem[itemQtyVal - 1].itemQtyValue > 1) {
     this.disperseItem[itemQtyVal - 1].itemQtyValue = this.disperseItem[itemQtyVal - 1].itemQtyValue - 1;
    }
    return;
 }
 if(itemQtyOperator == 'plus') {
   this.disperseItem[itemQtyVal - 1].itemQtyValue = this.disperseItem[itemQtyVal - 1].itemQtyValue + 1;
  return;
}
   
  }

  itemIndex = 0;

  addToCart(itemValue) {
    this.itemIndex = 0;
    this.totalCartValue = 0;

    // Disable and show Added to cart message
    this.disperseItem[itemValue - 1].itemAddToCartDisabled = true;

      this.cartArrayObj = {
        itemName: this.disperseItem[itemValue - 1].itemName,
        itemPrice: (this.disperseItem[itemValue - 1].itemPrice * this.disperseItem[itemValue -1].itemQtyValue),
        itemQty: this.disperseItem[itemValue -1].itemQtyValue,
        itemBgImg: this.disperseItem[itemValue -1].itemClass,
        itemUrl: this.disperseItem[itemValue -1].itemUrl,
        itemNumber: this.disperseItem[itemValue -1].itemNumber
      };
      this.cartArray.push(this.cartArrayObj);
      this.itemCount = this.cartArray.length.toString();
      console.log(this.cartArray);

      for( this.itemIndex = 0; this.itemIndex < this.cartArray.length; this.itemIndex++) {
        this.totalCartValue = this.totalCartValue + this.cartArray[this.itemIndex].itemPrice;
        console.log(this.totalCartValue);
      }      
      // console.log(this.totalCartValue);
      
      if(this.choiceTextCount <= 6) {
        this.openSnackBar(this.choiceText[this.choiceTextCount], 'Item Added to Cart');
        this.choiceTextCount++;
      } else {
        this.choiceTextCount = 0;
        this.openSnackBar(this.choiceText[this.choiceTextCount], 'Item Added to Cart');
        this.choiceTextCount++;
      }
      
      
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
