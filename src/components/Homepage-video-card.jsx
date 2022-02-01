import React from 'react';

const HomePageVideoCard = () =>{
    return(
        <div className='col-lg-6 mt-2'>
            <div className='row'>
                <div className='col-lg-5 py-3'>
                    <img src="https://english.cdn.zeenews.com/sites/default/files/2022/01/23/1007962-snake.jpg" className='img-fluid' alt="" />
                </div>
                <div className='col-lg-7'>
                    <div className='mt-2'>
                        <b>Venoumous snake found in a house</b>
                    </div>
                    <div className='py-2' style={{"fontSize":18+"px"}}>
                        Watch how villagers catch this venomous snake
                        afetr 2 hours of effort
                    </div>
                    <div style={{"fontSize":16+"px","fontWeight":"bold"}}>
                        Watch video <i className='fas fa-arrow-right px-2 mt-1'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageVideoCard