import {useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Content({status,setStatus}) {
     useEffect(async () => {
  await axios.get('https://ocorp-funbase.herokuapp.com/users').then((res)=>{
   setStatus(res.data)
  }).catch((e)=>{
    alert(e)
  })
 }, [])

 const D=(id)=>{
    axios.delete(`https://ocorp-funbase.herokuapp.com/users/delete/${id}`).then(()=>{
        setStatus(status.filter((all)=>{
         return   all._id !== id
        }))
    })
}
    return (
        <div className='content'>
            {status.map((all)=>{
                return(
                   
                   <div className="box">
                      <button onClick={()=>D(all._id)}>x</button>
                       <Link to={{pathname:`/page/${all._id}`,state:{all:all}}}><img src={all.url} alt={`${all.name}`} className='img2'/></Link>
                       </div>  
            )})}
       </div>
    )
}

export default Content
