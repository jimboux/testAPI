import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testAPI';

  heros: any[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.boucle();
  }

  boucle(): any {
    for (let i = 1; i < 731; i++) {
      this.dataService.getHeros(i).subscribe((data) => this.heros.push(data));
    }
  }
}
