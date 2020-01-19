import React, {useEffect,useState} from 'react'
import {Jobs} from '../component/jobs'
import { Fetch } from '../ajax/driver'


export  function Job() {
    const[jobList, updateJobList] = useState([])
    const url = process.env.NODE_ENV === 'production'?process.env.REACT_APP_URL:'http://localhost:5000'
    useEffect(()=>{
         Fetch(`${url}/jobs`, updateJobList)
        
        
        

    },[url])
    return (
        <div>
            <Jobs job={jobList} />
        </div>
    )
}
