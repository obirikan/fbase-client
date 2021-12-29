import React from 'react'
import {Link} from 'react-router-dom'

function HeadSection() {
    return (
        <div className='parent'>
         <div className='child ch1'>
            <div className='title'>
                   All the data you need
            </div>
            <div className='subTitle'>
            everything about secondary school data in your project works
            </div>
            <button className='start'>get started</button>
         </div>
         <div className='child ch2'>
              <div className='imgBox'>
                    <Link to='/Admin'><img src='imgs/1.gif' className='img'/></Link> 
              </div>
              <button className='st1'>get started</button>
         </div>
        </div>
    )
}

export default HeadSection
