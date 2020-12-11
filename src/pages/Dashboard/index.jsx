import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card } from 'react-bootstrap'
import ScrollBar from 'react-scrollbars-custom'
import api from '../../services/api'
import { gql } from '@apollo/client';
import { parseISO, format } from 'date-fns'

import './styles.css'


function Dashboard() {
    const [list, setList] = useState([])

    const query = `{
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          details
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            flickr_images
          }
        }
      }
    `

    useEffect(() => {
        api.query({
          query: gql`${query}`
        })
        .then(result => setList(result.data.launchesPast))
        .catch(err => console.log(err));
    }, [])

    return (
        <Container className="dashboard">
            <ScrollBar style={{ width: "100%", height: "95%"}}>
                {list.map(launch => {
                    const details = !launch.details ? "This Mission Doesn't Have A Description Yet" : launch.details
                    return (
                        <Card className="card" key={launch.id}>
                            <Card.Header className="card-header">
                                <Link className="link" to={ {pathname:'/mission', data: launch} } >
                                <h1>{launch.mission_name}</h1>
                                </Link>
                            </Card.Header>
                            <Card.Body className="card-body">
                                {details} 
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                {format(parseISO(launch.launch_date_local), "dd/mm/yyyy")}
                            </Card.Footer>
                        </Card>                    
                    )
                })}
            </ScrollBar>
        </Container>
    )
}

export default Dashboard