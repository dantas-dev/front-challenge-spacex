import React, { useEffect, useState } from 'react';

import { gql } from '@apollo/client';

import api from '../services/api';

import '../styles/pages/mission.css';

function Mission({ match }) {

    const [mission, set_mission] = useState([]);

    useEffect(() => {
        function get_mission() {
            api
                .query({
                    query: gql`
                        query get_launchs {
                            launch(id: "${match.params.id_mission}") {
                                details
                                id
                                mission_name
                                links {
                                  mission_patch
                                  video_link
                                }
                            }
                        }
                    `
                })
                .then(result => set_mission(result.data.launch));
        }

        get_mission();
    }, [match.params.id_mission]);

    if (mission.links) {
        return (
            <div className="mission_container">
                <article>
                    <img src={mission.links.mission_patch} alt={mission.mission_name} width="300px" />
                    <h3>{mission.mission_name}</h3>
                    <p>{mission.details}</p>
                    <a href={mission.links.video_link} rel="noreferrer" target="_blank">See more</a>
                </article>
            </div>
        );
    } else {
        return null;
    }
}

export default Mission;