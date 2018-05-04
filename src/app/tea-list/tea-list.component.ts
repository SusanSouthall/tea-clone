import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tea } from '../models.tea.model';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.css']
})
export class TeaListComponent {
  @Input() childTeaList: Tea[];
  @Output()



}
