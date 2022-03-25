import React from "react";




const BackgroundPicture = props  => {

    const divStyle = {
        // color: 'blue',
        backgroundImage: `url( ${props.info.url} )`
      };




    
    return (
        <div className="apod-bg" style={divStyle} >
            <div className="box" >
                <h1 className="title" > Astronomy Picture of the Day :  </h1>
                <p className="photoName" >{props.info.title}</p>
                <p className="explanation" >{props.info.explanation}</p>
                
            </div>
        </div>




    )
}

export default BackgroundPicture