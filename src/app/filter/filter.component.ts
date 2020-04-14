import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterGroup: FormGroup;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {

    this.filterGroup = new FormGroup({
      'name': new FormControl(null),
      'male': new FormControl(null),
      'female': new FormControl(null),
      'sort': new FormControl('asc')
    });

  }

  onFilterSubmit() {
    let filter: FilterData = {
      name: this.filterGroup.value.name !== null ? this.filterGroup.value.name : null,
      male: this.filterGroup.value.male ? 'male' : null,
      female: this.filterGroup.value.female ? 'female' : null,
      sort: this.filterGroup.value.sort ? this.filterGroup.value.sort : 'asc',
    };
    this.sharedService.setFilterData(filter);
    console.log(this.filterGroup.value);
  }

}

export interface FilterData {
  name: string;
  male: string;
  female: string;
  sort: string;
}
