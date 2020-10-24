import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { gql } from '@apollo/client';

import api from '../services/api';

import '../styles/pages/dashboard.css';

function Dashboard() {

    const [missions, set_missions] = useState([]);

    useEffect(() => {
        function get_missions() {
            api
                .query({
                    query: gql`
                        query get_launchs {
                            launchesPast(limit: 10) {
                                mission_name
                                details
                                id
                                launch_date_local
                            }
                        }
                    `
                })
                .then(result => set_missions(result.data.launchesPast))
                .catch(err => console.log(err));
        }

        get_missions();
    }, []);

    function format_date(date_to_format) {
        const remove_time = date_to_format.slice(0, 10);
        const day = remove_time.slice(-2);
        const month = remove_time.slice(5, 7);
        const year = remove_time.slice(0, 4);
        const date_formated = `${day}/${month}/${year}`;

        return date_formated;
    }

    return (
        <div className="dashboard_container">
            <h1>Last Launches 🚀</h1>
            {missions.map(mission => {
                return (
                    <Link to={`/mission/${mission.id}`} key={mission.id}>
                        <article>
                            <h2>{mission.mission_name}</h2>
                            <p>{mission.details.length > 300 ? mission.details.slice(0, 300) + "..." : mission.details}</p>
                            <p>{format_date(mission.launch_date_local)}</p>
                        </article>
                    </Link>
                );
            })}
        </div>
    );

}

export default Dashboard;