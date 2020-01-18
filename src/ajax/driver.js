export  const Fetch =async(url, updateCb)=>{
    const res = await fetch(url)
    const json = await res.json()
    updateCb(json)
    
}