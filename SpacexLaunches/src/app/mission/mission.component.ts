import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  
  public mission : any = {
    'mission_name': String,
      'details': String,
      'launch_date_local': new Date(),
      'links': Object,
      'ships': Object
  };
  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.mission = JSON.parse(res["data"]);
  });
  }

}
