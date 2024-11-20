import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.component.html',
  styleUrls: ['./modal-order.component.scss']
})
export class ModalOrderComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() data: any;
  @Input() close = new EventEmitter<void>();
  constructor() { }

  // les changements sur les propriétés d'entrée
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'])
      console.log('Data changed:', changes['data']);
  }

  // l'initialisation du composant
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  // Modification dans dans Angular
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  // Méthode appelée avant que le composant ne soit détruit
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

  // Méthode pour fermer la fenêtre modale
  closeModal(): void {
    this.close.emit();
  }

}
