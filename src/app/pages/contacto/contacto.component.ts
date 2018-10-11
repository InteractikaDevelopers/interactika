import { Component, OnInit } from '@angular/core';
import { AnimationService } from '../../shared/services/animation.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor( 
    private animationScroll: AnimationService
    ) { 
    
  }

  ngOnInit() {
    
  }

}
