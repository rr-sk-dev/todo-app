import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  showList = false;
  showListButtonText = 'Show List';

  toggleShowList = () => {
    this.showList = !this.showList;

    this.showListButtonText = this.showList ? 'Hide List' : 'Show List';
  };
}
