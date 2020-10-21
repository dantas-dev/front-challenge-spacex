import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MissionCard extends Component {
  render() {
    const { mission } = this.props;
    const { mission_name, launch_date_local, rocket, links, id } = mission;
    const { rocket_name, first_stage } = rocket;
    const { flickr_images } = links;
    return (
      <Link className="card-link" to={`/mission/${id}`}>
        <section id={ id } className="mission-card">
          <div className="image-card">
            <img src={ flickr_images[1] } alt="Rocket Launche"/>
          </div>
          <header className="card-header">
            <h4>{ mission_name }</h4>
            <h5>Rocket Name: { rocket_name }</h5>
          </header>
          <footer className="card-date">
            <p>Status: {first_stage.cores.map((each) => each.core.status)}</p>
            <p>Launche Date: { launch_date_local.slice(0, 10) }</p>
          </footer>
        </section>
      </Link>
    )
  }
}
