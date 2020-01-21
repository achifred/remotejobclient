import React, {useEffect,useState} from 'react'
import {RemoteJobs} from '../component/remotejobs'
import { Fetch } from '../ajax/driver'


export  function RemoteJob() {
    const[jobList, updateJobList] = useState([])
    const url = process.env.NODE_ENV === 'production'?process.env.REACT_APP_URL:'http://localhost:5000/'
    useEffect(()=>{
         Fetch(`${url}jobs`, updateJobList)
        
        
        

    },[url])
    return (
        <div>
            <RemoteJobs job={jobList} />
        </div>
    )
}
