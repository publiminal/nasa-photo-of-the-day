import React, { useState, useEffect } from "react";
import axios from 'axios'
import { DUMMY } from './dummy.js'
import { APOD_URL } from './constants/index.js'
import BackgroundPicture from './components/BackgroundPicture.js'
import "./App.css";

/* Entry point for APOD --  Astronomy Picture of the Day  */
function App() {

  /* Create App state  /////////////////////////////////////////////////////////
  *  @param {Object} apod : Astronomy Picture of the Day . fetched NASA API info
  *  @param {string} error : NASA APOD API call error *
  */ //////////////////////////////////////////////////////////////////////////
  const [apod, setApod] = useState(null)
  const [apodError, setApodError] = useState(null)

  /* Call external Data from NASA's APOD API and update state /////////////////
  *  set state   
  */////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    axios.get(`${APOD_URL}`)
      .then(res => {
        setApod(res.data);
        // setApod(DUMMY); 
      })
      .catch(err => {
        setApodError(true)
        console.warn('APP :: ERROR CALLING NASA API : ', err.message)
      }) // todo : adding nasa's error message.
  }, [])



  /*  */
  /*   useEffect(() => { */
  /*     // console.log(DUMMY) */
  /*     setApod(DUMMY);  */
  /*   },[])   */
  /*    */

  /* ///////////////////////////////////////////////////////////////////////////
  *  Render DOM  
  *  set props for Background component 
  */////////////////////////////////////////////////////////////////////////////
  /*  */
  return (
    <div className='container'>

      {apodError && <h2>sorry, {apodError}</h2>} {/* display error loading external data */}
      {apod && <BackgroundPicture info={apod} />}

    </div>
  );
}

export default App;
