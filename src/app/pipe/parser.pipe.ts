import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parser'
})
export class ParserPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value instanceof Array) {
      let tpl = '';
      const addPrefixZero = (num: number) => num > 9 ? num : `0${num}`;
      const parseDate = (dateToBeParsed: Date) => {
        const date = new Date(dateToBeParsed);
        const day = date.getDate();
        const month = date.getMonth();
        return `${date.getFullYear()}/${addPrefixZero(+month)}/${addPrefixZero(+day)}`;
      }
      const parseHour = (hourToBeParsed: Date) => {
        const date = new Date(hourToBeParsed);
        return `${addPrefixZero(date.getHours())}:${addPrefixZero(date.getMinutes())}`;
      }
      value.forEach(item => {
        const date = new Date(item);
        tpl += `<p>on <span>${parseDate(date)}</span> at <span>${parseHour(date)}</span></p>`;
      });
      return tpl;
    } else if (value instanceof Object){
      let tmpArray = [];
      let tpl = '';
      Object.keys(value).map((item, key) => {
        tmpArray.push({
          name: item,
          value: value[item]
        })
      });
      tmpArray.forEach(item => {
        tpl += `<p><strong>${item.name}: </strong>${item.value}</p>`
      })
      return `<div>${tpl}</div>`;
    } else {
      return `<span class="badge badge-primary">${value}</span>`;
    }
  }

}
