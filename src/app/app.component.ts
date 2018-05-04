import { Component } from '@angular/core';
import { Tea } from '../models.tea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teaClone';
  selectedTea = null;

  masterTeaList: Tea[] = [
    new Tea('Royal Wedding Black Tea', 'Cheers to special celebrations!', 7),
    new Tea('Caramel Almond Black Tea', 'Bold & sweet: a delicious attitude to have.', 7),
    new Tea('Pineapple Pop Herbal Tea', 'A fun, inspiring, calming cuppa.', 7)
  ]
























}
