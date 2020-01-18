import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { colors } from '../component/constant';
import { IoIosCall, IoIosMail,  IoMdLocate } from 'react-icons/io';
import { contactus } from '../component/data';

function ContactUs() {
  return (
    <Container maxWidth="md">
      <Grid
        container
        style={{
          justifyContent: 'center',
          marginTop: 40,
          color: colors.mintgreen
        }}
      >
        <Typography variant="h2" style={{ textAlign: 'center' }}>
          Contact Us
        </Typography>
      </Grid>
      <Grid container style={{ justifyContent: 'center', marginTop: 20 }}>
        <p style={styles.txt}>
         {contactus.description}
        </p>
      </Grid>
      <Grid
        container
        style={{ justifyContent: 'center', textAlign: 'center', marginTop: 80 }}
      >
        <Grid container style={styles.txtConainer}>
          <IoIosCall style={styles.icon} />
      <Typography style={styles.txt}> {contactus.phone}</Typography>
        </Grid>
        <Grid container style={styles.txtConainer}>
          <IoIosMail style={styles.icon} />
      <Typography style={styles.txt}>{contactus.email}</Typography>
        </Grid>
        <Grid container style={styles.txtConainer}>
          <IoMdLocate style={styles.icon} />
          <Typography style={styles.txt}>
            {contactus.address}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

const styles = {
  icon: {
    fontSize: 40,
    color: colors.mintgreen,
    // marginLeft: 20,
    marginRight: 20
  },
  txt: {
    fontSize: 20,
    lineHeight: 1.5
  },
  txtConainer: {
    marginTop: 20
  }
};

export default ContactUs;
