import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../shared/services/animation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private animationScroll: AnimationService
  ) {
   }

  ngOnInit() {
  }

  

}
