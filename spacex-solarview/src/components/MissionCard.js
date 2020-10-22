import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MissionCard extends Component {
  render() {
    const { mission } = this.props;
    const { mission_name, launch_date_local, rocket, id, launch_site } = mission;
    const { rocket_name, first_stage } = rocket;
    return (
      <Link className="card-link" to={`/mission/${id}`}>
        <section id={ id } className="mission-card">
          <header className="card-header">
            <h4>{ mission_name }</h4>
          </header>
          <article>
            <p>This mission occurred at { launch_site.site_name_long } with the rocket { rocket_name }</p>
          </article>
          <footer className="card-date">
            <p><b>Status:</b> {first_stage.cores.map((each) => each.core.status)}</p>
            <p><b>Launche Date:</b> { launch_date_local.slice(0, 10) }</p>
          </footer>
        </section>
      </Link>
    )
  }
}
