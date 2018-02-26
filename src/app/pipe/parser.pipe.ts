import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'parser'
})
export class ParserPipe implements PipeTransform {
  constructor (private sanitizer: DomSanitizer) {}
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
      return this.sanitizer.bypassSecurityTrustHtml(`<canvas id="chart" data-value='${JSON.stringify(tmpArrayValue)}' data-label='${JSON.stringify(tmpArrayLabel)}'></canvas>`);
    } else {
      return `<span class="badge badge-primary">${value}</span>`;
    }
  }

}
