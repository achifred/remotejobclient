import React, {useEffect,useState} from 'react'
import {Jobs} from '../component/jobs'
import { Fetch } from '../ajax/driver'


export  function Job() {
    const[jobList, updateJobList] = useState([])

    useEffect(()=>{
         Fetch('http://localhost:5000/jobs', updateJobList)
        
        
        

    },[])
    return (
        <div>
            <Jobs job={jobList} />
        </div>
    )
}
