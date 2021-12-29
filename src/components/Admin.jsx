import React from 'react'
import axios from 'axios'

function Admin({name,setName,url,seturl,description,setdes,status,setStatus}) {
 const add=()=>{
     axios.post('https://ocorp-funbase.herokuapp.com/add',{name:name,url:url,description:description}).then(()=>{
       alert('sent')
       setName('')
       setStatus([...status,{name:name,url:url,description:description}])
     }).catch((e)=>{
         alert(e)
     })
    }
    return (
        <div className='admin'>

            <div className="boz"><h2>ADMIN</h2></div>
            <div className="boz">
                <h4>eg</h4>
                <article><i><b>::img_url</b>:https://www.enjpg.com/img/2020/cool-pictures-for-57-500x375.jpg</i></article>
            </div>
            <div className='boz'>
                <input type="text" placeholder='Name Of School'value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div  className='boz'>
            <input type="text" placeholder='Image Url'value={url} onChange={(e)=>{seturl(e.target.value)}}/>
            </div>
            <div  className='boz'>
            <input type="text" placeholder='Description'value={description} onChange={(e)=>{setdes(e.target.value)}}/>
            </div>
            <div className="boz"> 
            <button onClick={add} className='button1'>send</button>
            </div>
        </div>
      
    )
}

export default Admin
