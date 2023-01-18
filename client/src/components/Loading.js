import React from 'react'
import ReactLoading from 'react-loading'
import '../styles/loadingStyles/Loading.scss'

//For show loading use react-loading package
const Loading = ({ type, color = '#F0B340'}) => (
    <div className='loading-container'>
    <ReactLoading type={'spinningBubbles'} 
                  color={color} 
                  className = "loader" 
                  height={223} 
                  width={127} 
    />
    </div>
);

export default Loading;
