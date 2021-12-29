import React from 'react'

function Page(props) {
    const {url,name,description}=props.location.state.all
    return (
        <div className='main1'>
            <div className='img-cont'>
             <img src={url} className='img4'/>
            </div>
            <div className='details'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Page
