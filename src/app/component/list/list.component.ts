import { Component, OnInit } from '@angular/core';

import { config } from '../../constant/config';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor() { }

  private lists = [];

  ngOnInit() {
    this.fetchList();
  }

  async fetchList () {
    const data = await fetch(config.api.list);
    this.lists = await data.json();
    console.log(this.lists);
  }
}
