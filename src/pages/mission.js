import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../services/api';
import '../global.css';
import '../assets/mission.css';

function Mission({match}) {
    const [mission, setMission] = useState([]);

    useEffect(() => {
        function get() {
            api
            .query({
                query: gql `{
                    launch(id: "${match.params.id}") {
                        details
                        id
                        mission_name
                        links {
                            flickr_images
                            video_link
                        }
                    }
                }`
            }).then(result => setMission(result.data.launch))
            .catch(err => console.log(err));
        }
        get();
    }, [match.params.id]);

    if (mission.links) {
        return (
            <div>
                <header className="header">
                    <h1 className="logo">
                        <img src="../logo-spacex.png" alt="Spacex Logo" />
                    </h1>
                </header>
                <main>
                    <Link to={'/'} className="back" style={{size: 16}}>
                        <FiArrowLeft/>
                        Voltar
                    </Link>
                    <div className="slideshow-container">
                        
                        {mission.links.flickr_images ? mission.links.flickr_images.map(image => {
                            return (
                                <div className="Slide fade" key={image}>
                                    <img src={image} alt={mission.mission_name}/>
                                </div>
                            );
                        }) :
                            <div className="">
                                <img src="no-image.jpg" alt="No background"/>
                            </div>
                        }

                        {/* Next and previous buttons */}

                        {/* <button className="prev">&#10094;</button>
                        <button className="next">&#10095;</button> */}

                    </div>
                    <section class="mission-container">
                            <h2>
                                {mission.mission_name}
                            </h2>
                            <p>
                                {mission.details}
                            </p>
                        <a href={mission.links.video_link} rel="noreferrer" target="_blank">Ver mais</a>
                    </section>
                </main>
            </div>
        );
    } else {
        return null;
    }
}

export default Mission;