import React from 'react';
import { Link } from 'react-router-dom';

const HomePageWorldNews = () =>{
    return(
        <div className='col-lg-3 px-3 py-3'>
        <div style={{"overflow":"hidden"}}>
            <img id="myimg" className='img-fluid' src="https://post.healthline.com/wp-content/uploads/2021/02/covid-test-732x549-thumbnail-732x549.jpg" alt="" />
        </div>
        <div>
          <div className='py-2'>
            <b>35K corona cases in one day</b>
          </div>
          <div>
            Mask up, is this the third covid wave?
          </div>
          <div className='mt-2'>
            <button style={{"fontSize":16+"px"}} className='btn btn-dark more'><Link style={{"textDecoration":"none","color":"white"}} to="/read-news">Read more</Link></button>
          </div>
        </div>
      </div>
    )
}

export default HomePageWorldNews