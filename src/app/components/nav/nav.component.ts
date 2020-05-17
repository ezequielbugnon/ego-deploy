import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

 public check: boolean;

  constructor(
    private router: Router
  ) {
      this.check = false;
   }

  ngOnInit(): void {
  }

  burguerActive(){
    if(!this.check){
      this.check = true;
    }
  }

  burguerDisabled(){
    if(this.check){
      this.check = false;
    }
  }

  menu(){
      this.router.navigateByUrl('modelos');
  }




}
