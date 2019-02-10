import React from 'react';
import ReactLoading from 'react-loading';

const Loading = (props) => (
  <div className="loading-div" onClick={(e) => e.preventDefault()}>
    <ReactLoading
      type="spin"
      color="rgb(110, 10, 204)"
      height={'100px'}
      width={'100px'}
    />
  </div>
)

export default Loading;