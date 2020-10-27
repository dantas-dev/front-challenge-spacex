import React from 'react'
import { Container, Carousel, Jumbotron } from 'react-bootstrap'
import { parseISO, format } from 'date-fns'

import './styles.css'

function Mission(props) {
    const launch = props.location.data
    console.log(launch.links.flickr_images)
    const date = format(parseISO(launch.launch_date_local), "dd/mm/yyyy")

    return (
        
        <Container className="mission-container">
            <Container className="images-container">    
                { launch.links.flickr_images != 0 && 
                    <Carousel className="carousel">
                        {launch.links.flickr_images.map(img => {
                            return (
                                <Carousel.Item >
                                    <img src={img} alt="flickr_img"/>
                                </Carousel.Item>
                            )
                        })}            
                    </Carousel>
                }
                { launch.links.flickr_images.length === 0 && 
                    <Jumbotron className="jumbotron">
                        <h2>No Img</h2>
                    </Jumbotron>
                }
            </Container>
            <Container className="text-container">
                <h2>{launch.mission_name}</h2>
                {launch.details}
                <h2>Launch Site</h2>
                {launch.launch_site.site_name_long}
                <h2>Launch Date {date} </h2>          
            </Container>
            <Container className="link-container">
                {launch.links.video_link && 
                    <a className="video" rel="noopener noreferrer" href={launch.links.video_link} target="_blank"> Vídeo</a>
                }
                {launch.links.article_link && 
                    <a className="article" rel="noopener noreferrer" href={launch.links.article_link} target="_blank"> Artigo</a>
                }
            </Container>
        </Container>
    )
}

export default Mission