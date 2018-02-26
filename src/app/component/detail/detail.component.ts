import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Chart from 'chart.js';

import { config } from '../../constant/config';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private param: string;
  private results: IterableIterator<object>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fetchDetail();
  }

  fetchDetail () {
    const detail = async (params) => {
      const data = await fetch(config.api.base(params.id));
      const finalData = await data.json();
      this.param = params.id;
      this.results = finalData;
    }
    this.route.params.subscribe(detail);
  }
}
