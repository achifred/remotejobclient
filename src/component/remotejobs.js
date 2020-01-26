import React from 'react'

import { Grid,
    
    Typography,
    Container,
    List,
    ListItem,
    Divider,
    ListItemText, Paper,InputBase,
    Button} from '@material-ui/core'
    import { FaMapMarkerAlt,  FaClock } from "react-icons/fa";
    
    import moment from "moment";

import { Modal } from './modal';
import banner from '../static/banner.png'
import '../static/App.css'
import { LoadingIndicator } from './loadingIndicator';

export function RemoteJobs({job,isloading}){
  const [open, setOpen] = React.useState(false);
  const [selectedJob,selectJob] =React.useState({})
  const[search, setSearch] = React.useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const onchange = e => {
     setSearch(e.target.value)  ;
  };


  const filteredJob = job
  ? job.filter(res => {
      return (
        res.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        
        res.location.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    })
  : [];


    return(
       <Grid container style={{justifyContent:'center'}}>

<Container maxWidth="md" style={{flexGrow:1}}>
            <Grid container >
              <Grid container style={{justifyContent:'center', marginTop:30}}>
              <Typography variant='h3' style={{textAlign:'center'}} >Remote Dev Jobs</Typography>
              </Grid>
            <Grid container style={{ justifyContent: "center", marginTop: 40 }}>
          <Paper style={{ backgroundColor: "transparent" }}>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "Search.." }}
              style={{
                flex: 1,
                marginLeft: 8,
                height: 50,
                width: 300
              }}
              onChange={onchange}
            />
          </Paper>
        </Grid>
              {isloading===true?<LoadingIndicator/>:''}
              <Modal open={open} handleClose={handleClose} job={selectedJob} />
             
              {
                filteredJob.map(item => (
                  <div
                    style={{
                      marginTop: 30,
                      marginBottom: -10,
                      justifyContent: "center",
                      textAlign: "center"
                    }}
                    key={item.id}
                  >
                     
                    <List
                      style={{
                        width: "100%",
                        maxWidth: 600,
                        textAlign: "center",
                        justifyContent: "center"
                      }}
                    >
                      <ListItem alignItems="center">
                        
                          <img
                          className='banner'
                            
                            alt=''
                            src={ item.company_logo?item.company_logo:banner}
                          />
                        
                        <ListItemText
                          style={{ fontFamily: `'Be Vietnam', sans-serif` }}
                          primary={item.title}
                          secondary={
                            <React.Fragment>
                              <Typography
                                style={{
                                  textAlign: "justify",
                                  marginTop: 5,
                                  marginBottom: 6,
                                  fontFamily: `'Be Vietnam', sans-serif`
                                }}
                              >
                                <div dangerouslySetInnerHTML={{__html: item.description.substring(0, 200)}} /> 
                              </Typography>
                              
                              <Typography
                                style={{
                                  marginTop: 5,
                                  fontFamily: `'Be Vietnam', sans-serif`,
                                  fontStyle: "italic"
                                }}
                                component="span"
                                variant="body2"
                              >
                              <FaClock/>  {moment(item.created_at)
                              .startOf("hour")
                              .fromNow()}  {item.type}
                              </Typography>
                              <Typography
                                style={{
                                  fontFamily: `'Be Vietnam', sans-serif`,
                                  marginTop: 5
                                }}
                              >
                                {" "}
                                <FaMapMarkerAlt /> {item.location}  {item.salary}
                              </Typography>
                              <div style={{ marginTop: 15 }}>
                                <a href={item.url}
                                  style={{
                                    textDecoration: "none",
                                    fontFamily: `'Be Vietnam', sans-serif`,
                                    marginRight: 15,
                                    color:'#B40A1B'
                                  }}
                                  target='blank'
                                >
                                  APPLY
                                </a>
                                <Button
                                  style={{
                                    textDecoration: "none",
                                    fontFamily: `'Be Vietnam', sans-serif`,
                                    marginRight: 15,
                                    color:"#00848C"
                                    
                                  }}
                                  variant='text'
                                  
                                  onClick={()=>{
                                    handleClickOpen()
                                    selectJob(item)
                                  }}
                                >
                                  Read more
                                </Button>

                                
                              </div>

                              
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </List>
                  </div>
                ))
               }
            </Grid>
          </Container>
       </Grid>
    )
}

