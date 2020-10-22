import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DetailCard extends Component {
  render() {
    const { mission } = this.props;
    const { mission_name, launch_date_local, rocket, links, id, launch_site, details } = mission;
    const { rocket_name, first_stage } = rocket;
    const { flickr_images, video_link } = links;
    return (
        <section id={ id } className="detail-card">
          <div className="image-detail">
            <img src={ flickr_images[1] } alt="Mission"/>
            <img src={ flickr_images[2] } alt="Rocket Launche"/>
          </div>
          <header className="detail-header">
            <h4>{ mission_name }</h4>
            <h5>Rocket Name: { rocket_name }</h5>
          </header>
          <article>
            <span><b>Launche Location:</b> { launch_site.site_name_long }</span>
            <br />
            <p>{ details }</p>
          </article>
          <footer className="detail-date">
            <p><b>Status:</b> {first_stage.cores.map((each) => each.core.status)}</p>
            <p><b>Launche Date:</b> { launch_date_local.slice(0, 10) }</p>
          </footer>
          <section className="links-container">
            <Link className="detail-link" to="/">VOLTAR</Link>
            <a className="youtube" rel="noopener noreferrer" href={video_link} target="_blank">VIDEO</a>
          </section>
        </section>
    )
  }
}