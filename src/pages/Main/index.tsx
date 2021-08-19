import React, { useEffect, useState } from 'react';

import moment from 'moment';

import Nave from '../../assets/Nave.svg';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Container, SpaceLauchs, Title, Text, Imagem, ConteinerRight, Date, Button } from './styles';

interface ResponseSpacex {
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  }

  ships: [
    {
      name?: string;
      home_port?: string;
      image?: string;
    }],

    links: {
      article_link: string;
      video_link: string;
    }
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      marginTop: '2rem',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    paperRight: {
      marginTop: '2rem',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    paperImg : {
      textAlign: 'center',
      height: '100%',
      color: theme.palette.text.secondary,
    },
  }),
);


export function Body() {

    const classes = useStyles();
    const [objSelected, setObjSelected] = useState<ResponseSpacex>();
    const [objectSpacex, setObjectSpacex] = useState<ResponseSpacex[]>([]);
    const [imageNull, setImageNull] = useState<boolean>(false);
 
    useEffect(() => {    
      var query = `query {
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
          }
          rocket {
            rocket_name
            first_stage {
              cores {
                flight
                core {
                  reuse_count
                  status
                }
              }
            }
            second_stage {
              payloads {
                payload_type
                payload_mass_kg
                payload_mass_lbs
              }
            }
          }
          ships {
            name
            home_port
            image
          }
        }
      }`;
      
      fetch('https://api.spacex.land/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query
        })
      })
        .then(r => r.json())
        .then(data => {
          setObjectSpacex(data.data.launchesPast)});
  
      }, []);

      function selectSpacex(e: ResponseSpacex) {
        let aux : ResponseSpacex;  
        let auxNumber: number = e.ships.length;
        if(auxNumber === 0) {
          setImageNull(true);
        } else {
          setImageNull(false);  
          setObjSelected(e);
        }
      }


    return(
        <>
        <Container>
            <Title>
                <h3>Last Launches</h3>
                <img width="30" height="30" src={Nave}></img>
            </Title>
            <div className={classes.root}>                  
              <Grid container spacing={3}>
                  <Grid item xs={6}>
                    
                  {objectSpacex === [] ? <h1>Sim</h1> : 
                  
                  objectSpacex.map((e, index) => { return(
                    <SpaceLauchs key={index}>  
                    <a href='#' onClick={() => selectSpacex(e)}><Paper className={classes.paper}>
                      <h1>{e.mission_name}</h1>
                      <Text>{e.launch_site.site_name_long}</Text>
                      <Date>{  moment(e.launch_date_local).format('D/MM/YYYY') }</Date>
                    </Paper></a> 
                  </SpaceLauchs>)
                  })}
                    
                  </Grid>
                  <Grid item xs={6}>
                        <Paper className={classes.paperRight}>
                              <ConteinerRight>   
                                {objSelected !== undefined && !imageNull ?                    
                                  <img src={objSelected.ships[0].image} />  : 
                                  <img src="https://www.corsan.com.br/themes/padrao2019/images/outros/GD_imgSemImagem.png" />
                                  }
                               
                              {objSelected === undefined ? 
                                <Paper className={classes.paperImg}>
                              
                              <h1>Mission Name</h1>
                              <Text>Description the mission</Text>
                              <Button>See More</Button>
                              </Paper> 
                              :<Paper className={classes.paperImg}><h1>{objSelected.mission_name}</h1>
                              <Text>{objSelected.launch_site.site_name_long}</Text>
                              <Button onClick={()=> window.open(objSelected?.links.video_link, "_blank")}>See More</Button></Paper>}

                              
                          
                    </ConteinerRight>
                      </Paper>
                  </Grid>
              </Grid>
            </div>
        </Container>
        </>
    )
}