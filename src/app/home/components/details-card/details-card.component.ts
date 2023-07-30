import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent {
    @Input() name: string;
    @Input() description: string;
    @Input() price: string;
    @Input() image: string;
    @Input() link: string;
}
