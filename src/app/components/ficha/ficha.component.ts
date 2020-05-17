import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ApiEgoService } from 'src/app/services/api-ego.service';
import { GetOne } from 'src/app/clases/get-one';



@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css']
})
export class FichaComponent implements OnInit {


  slides = [
      {img: "../../../assets/uploads/toyota-86@3x.png",
            name: "Airbags frontales y laterales",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget.",
          },
            {img: "../../../assets/uploads/yaris@3x.png",
            name: "Airbags frontales y laterales",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget.",
          },
          {img: "../../../assets/uploads/toyota-86@3x.png",
          name: "Airbags frontales y laterales",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget.",
        },
          {img: "../../../assets/uploads/yaris@3x.png",
          name: "Airbags frontales y laterales",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget.",
        },

        {img: "../../../assets/uploads/toyota-86@3x.png",
        name: "Airbags frontales y laterales",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget.",
      },
        {img: "../../../assets/uploads/yaris@3x.png",
        name: "Airbags frontales y laterales",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget.",
      },
      {img: "../../../assets/uploads/toyota-86@3x.png",
      name: "Airbags frontales y laterales",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget.",
      }


  ];

  slideConfig = {"slidesToShow": 4, "slidesToScroll": 1, "speed": 300,
      "dots": true, "arrows": true,
      "responsive": [
        {
          "breakpoint": 720,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1,
            "infinite": true,
            "dots": true,
            "arrows": false
          }
        },
        {
          "breakpoint": 1100,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 1,
            "infinite": true,
            "dots": true,
            "arrows": true
          }
        },
        {
          "breakpoint": 1120,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "infinite": true,
            "dots": true,
            "arrows": true
          }
        }
      ]
  };
  addSlide(res) {
    this.slides.push()
  }

  removeSlide() {

  }

  slickInit(e) {

  }

  breakpoint(e) {

  }

  afterChange(e) {

  }

  beforeChange(e) {

  }

  public id:any;
  public response:GetOne;


  constructor(

      private _route: ActivatedRoute,
      private serviceEgo: ApiEgoService,
      private router: Router

  ) {
      this.response = new GetOne();

  }

  ngOnInit(): void {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });

    this.id = this._route.snapshot.params['id'];
    this.service(this.id);


  }

  service(id){
    this.serviceEgo.getOne(id).subscribe(
      resp =>{
            this.recorrer(resp);

          return this.response = resp;



      },
      error => {
        console.log(error);
      }
    )
  }


  recorrer(re){

      re.model_features.filter((element, index) => {
         if(element.photo){
             this.addSlide(""+element.photo +"");

         }

      });
  }


}
