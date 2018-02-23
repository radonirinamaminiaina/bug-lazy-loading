import { Pipe, PipeTransform } from '@angular/core';
import * as Chart from 'chart.js';

@Pipe({
  name: 'parser'
})
export class ParserPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value instanceof Array) {
      let tpl = '';
      // add prefix to number
      const addPrefixZero = (num: number) => num > 9 ? num : `0${num}`;
      // formatDate yyyy/mm/dd
      const formatDate = (dateToBeParsed: Date) => {
        const date = new Date(dateToBeParsed);
        const day = date.getDate();
        const month = date.getMonth();
        return `${date.getFullYear()}/${addPrefixZero(+month)}/${addPrefixZero(+day)}`;
      }
      // formatHour yyyy/mm/dd
      const formatHour = (hourToBeParsed: Date) => {
        const date = new Date(hourToBeParsed);
        return `${addPrefixZero(date.getHours())}:${addPrefixZero(date.getMinutes())}`;
      }
      value.forEach(item => {
        const date = new Date(item);
        tpl += `<p>on <span class="date">${formatDate(date)}</span> at <span class="date">${formatHour(date)}</span></p>`;
      });
      return tpl;
    } else if (value instanceof Object) {
      let tmpArrayLabel = [];
      let tmpArrayValue = [];
      let tpl: any;
      Object.keys(value).map((item, key) => {
        tmpArrayLabel.push(item);
        tmpArrayValue.push(value[item]);
      });
      import ('chart.js').then(function () {
        const chartEl:any = document.querySelector('.chart');
        chartEl.innerHTML = '<canvas id="canvas"></canvas>';
        const canvas: any = document.getElementById('canvas');
        // start chart
        const options = {
          type: 'pie',
          data: {
            datasets: [{
              data: tmpArrayValue,
              backgroundColor: [
                '#fe6283',
                '#ffcd56',
                '#4cc0c0',
                '#37a2eb',
                '#ff9f40',
                '#ff40dd',
              ]
            }],
            labels: tmpArrayLabel
          },
          options: {
            responsive: true
          }
        }
        // build chart
        new Chart(canvas.getContext('2d'), options);
      });
      return `<div><div class="chart"></div></div>`;
    } else {
      return `<span class="badge badge-primary">${value}</span>`;
    }
  }

}
