import React, {useEffect,useState} from 'react'
import {RemoteJobs} from '../component/remotejobs'
import { Fetch } from '../ajax/driver'


export  function RemoteJob() {
    const[jobList, updateJobList] = useState([])
    const [isloading, setisLoading] = React.useState(true)
    const url = process.env.NODE_ENV === 'production'?process.env.REACT_APP_URL:'http://localhost:5000/'
    useEffect(()=>{
        if(Fetch(`${url}jobs`, updateJobList)){
            setisLoading(false)
        }
         
         
         
        
        
        

    },[url])
    
    return (
        <div>
            <RemoteJobs job={jobList} isloading={isloading}/>
        </div>
    )
}
