import React from 'react';

import './styles.scss';
const NewsHeaderBackground = ({thumbnail}) => {
    return(
      <div className='news-header-background'>
        <div className='overlay' />
        <div className='thumbnail'>
          <div style ={{backgroundImage : `url(${thumbnail})`}}/>
        </div>
      </div>
    );
  }

export default NewsHeaderBackground;
