import React, { useEffect, useState } from 'react';
import { gql } from '@apollo/client';
import { Link as Card } from 'react-router-dom';
import api from '../services/api';
import '../global.css';

export default function Missions() {

    const [missions, setMissions] = useState([]);

    const dateFormat = (date) => {
        const rmTime = date.slice(0, -10);
        const day = rmTime.slice(8, 10);
        const month = rmTime.slice(5, 7);
        const year = rmTime.slice(0, 4);
        const formatedDate = `${day}/${month}/${year}`;
        return formatedDate;
    }

    useEffect(() => {                       
            api
            .query({
                query: gql`{
                        launchesPast(limit: 10) {
                            id
                            mission_name
                            launch_date_local
                            details
                        }
                    }`
            })
            .then(response => setMissions(response.data.launchesPast))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <header className="header">
                <h1 className="logo">
                    <img src="logo-spacex.png" alt="Spacex Logo" />
                </h1>
            </header>
            <h1>Last Launches 🚀</h1>
            <article className="row">
                {missions.map(mission => {
                    return (
                        
                        <Card to={'mission/' + mission.id} className="card" key={mission.id}>
                            <h3>{mission.mission_name}</h3>
                            <p>{mission.details.length > 190 ? mission.details.slice(0, 190) + ' ...' : mission.details}</p>
                            <time><em>{dateFormat(mission.launch_date_local)}</em></time>
                        </Card>
                    );
                })}
            </article>
        </div>
    );
}