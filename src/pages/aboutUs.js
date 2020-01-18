import React from 'react';
import { Grid, Typography, Container, Paper } from '@material-ui/core';
import {  about, team, teamData, aboutus } from '../component/data';
import { colors } from '../component/constant';
import {Link} from 'react-router-dom'


function Aboutus() {
  return (
    <Grid>
      <Grid container className="aboutContainer">
      
       <Grid container className='aboutTitle'>
          <p className="Abttitletxt">{aboutus.title}</p>
        </Grid>
        <Container maxWidth='sm'>
        <Grid container className='aboutTitle'>
          <p className="Abtsubtxt">{aboutus.body} Do not hesitate to  <Link to='/contact' style={{textDecoration:'none', color:'orange'}} >contact us</Link> </p>
        </Grid>
       </Container>
      </Grid>
      <Container maxWidth="sm">
        <Grid container style={{ justifyContent: 'center' }}>
          <h1 className="howitworks">Who We Are</h1>
        </Grid>
        <Grid container style={{ justifyContent: 'center' }}>
          <p className="howdesc">{about.body}</p>
        </Grid>
      </Container>
      <Container maxWidth="sm">
        <Grid container style={{ justifyContent: 'center' }}>
          <h1 className="howitworks">Meet The Team</h1>
        </Grid>
        <Grid container style={{ justifyContent: 'center' }}>
          <p className="howdesc">{team.title}</p>
        </Grid>
      </Container>

      <Grid container style={{ justifyContent: 'center' }}>
        <Grid
          style={{
            marginTop: 100,
            marginBottom: -10,
            justifyContent: 'center'
          }}
        >
          {teamData.map(item=>(
            <Paper style={styles.paper}key={item.name} >
            <Grid container style={{ justifyContent: 'center' }}>
              <img
                src={item.picture}
                alt="name"
                style={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  marginTop: -60,
                  height: 250,
                  width: '50%',
                  borderTopLeftRadius: 30,
                  borderBottomRightRadius: 30
                }}
              />
            </Grid>

            <Grid container style={{ textAlign: 'center', marginBottom: 20 }}>
              <Container maxWidth="md">
                <Typography style={{ textAlign: 'center', margin: 20 }}>
                  {item.description}
                </Typography>
              </Container>
              <Grid container style={{ justifyContent: 'center' }}>
                <Typography
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 0,
                    color: colors.black
                  }}
                >
                  {item.name}
                </Typography>
              </Grid>
              <Grid container style={{ justifyContent: 'center' }}>
                <Typography
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',

                    marginBottom: 20,
                    color: colors.black
                  }}
                >
                  {item.position}
                </Typography>
              </Grid>
            </Grid>
          </Paper>

          ))}
          
        </Grid>
      </Grid>
      
    </Grid>
  );
}
const styles = {
  paper: {
    justifyContent: 'center',
    width: 400,
    height: 630,
    borderTopLeftRadius: 30
  }
};

export default Aboutus;
