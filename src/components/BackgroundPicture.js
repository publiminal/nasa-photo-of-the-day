import React from "react";




const BackgroundPicture = props  => {

    const divStyle = {
        // color: 'blue',
        backgroundImage: `url( ${props.info.url} )`
      };




    
    return (
        // <div className="apod-bg" >this is {props.info.explanation}</div>
        <div className="apod-bg" style={divStyle} >
            <div className="box" >{props.info.explanation}</div>
        </div>




    )
}

export default BackgroundPicture