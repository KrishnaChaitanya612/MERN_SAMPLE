import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Student from './showStudent/showStudent.js';
import Create from './createStudent/createStudent.js';
import makeStyles from '../styles.js';
function student() {
     const classes = makeStyles();
    return (
        <>
        <Container maxWidth="lg">
       <AppBar className={classes.appBar} position="static" color="inherit">
         <Typography className={classes.heading} variant="h2" align="center">Students create and show</Typography>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch">

              <Grid item xs={12} sm={7}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Student/>
                </AppBar>
              </Grid>

              <Grid item xs={12} sm={4}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Create/>
                </AppBar>
              </Grid>

            </Grid>
          </Container>
        </Grow>
     </Container>          
        </>
    )
}

export default student
