import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { NavigationExtras, Router } from '@angular/router';

const SEARCH_QUERY = gql`
query {
  launchesPast(limit: 10, offset: 10) {
    mission_name
    details
    launch_date_local
    links {
      article_link
      video_link
    }
    ships {
      image
    }
  }
}
`;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public missions: any = [
    {
      'mission_name': String,
      'details': String,
      'launch_date_local': new Date(),
      'links': Object,
      'ships': Object
    }

  ];

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
    this.getMissons();
  }

  getMissons() {
    this.apollo
      .watchQuery({
        query: SEARCH_QUERY,
      })
      .valueChanges.subscribe((result: any) => {
        this.missions = result.data.launchesPast;
      });
  }

  openDetails(mission: Object) {
    const params = this.stringfyObject(mission);
    this.router.navigate(['/mission'], params);
  }

  stringfyObject(obj: Object) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          "data": JSON.stringify(obj)
      }
    };
    return navigationExtras;
  }
}
