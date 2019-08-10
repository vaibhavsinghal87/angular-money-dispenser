import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moneyDispenser';

  value = 0;
  total;
  content;

  calculate() {
    let notes;
    this.content = "";
    this.total = 0;

    let arrResult = [];
    let value = this.value;

    // currency denominations
    let denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let len = denominations.length;

    for (let i = 0; i < len; i++) {
        notes = Math.floor(value / denominations[i]);
        this.total += notes;
        value = value % denominations[i];

        let className = (i % 2 === 0) ? 'even' : 'odd';
        let str = "<div class=" + className + ">" + notes + ' notes of Rs ' + denominations[i] + "</div>";
        arrResult.unshift(str);
    }
    this.content = arrResult.join('');
  }
}