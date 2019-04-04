import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostForm = () => {


    return(
        <div className="formButtons">
            <Link to="/new/text" className="buttonText">      
                <div className="TextIcon">Aa</div>
                <div className="TextText">Text</div>
            </Link>

            <div className="grey-vert">
                <div></div>
            </div>

         
            <Link to="/new/photo" className="buttonPhoto">
                <div className="PhotoIcon"><i className="fas fa-camera-retro fa-2x"></i></div>
                <div className="PhotoText">Photo</div>
            </Link>
      

            
            <div className="grey-vert">
                <div></div>
            </div>

            <Link to="/new/quote" className="buttonQuote">
                <div className="QuoteIcon"><i className="fas fa-quote-left fa-2x"></i></div>
                <div className="QuoteText">Quote</div>
            </Link>


            <div className="grey-vert">
                <div></div>
            </div>

            <Link to="/new/link" className="buttonLink">
                <div className="LinkIcon"><i className="fas fa-link fa-2x"></i></div>
                <div className="LinkText">Link</div>
            </Link>

            
            <div className="grey-vert">
                <div></div>
            </div>

            <Link to="/new/audio" className="buttonAudio">
                <div className="AudioIcon"><i className="fas fa-headphones fa-2x"></i></div>
                <div className="AudioText">Audio</div>
            </Link>


            <div className="grey-vert">
                <div></div>
            </div>

            <Link to="/new/video" className="buttonVideo">
                <div className="VideoIcon"><i className="fas fa-video fa-2x"></i></div>
                <div className="VideoText">Video</div>
            </Link>
           
            {/* <div className="line"></div> */}

        </div>

    )

};

export default withRouter(PostForm);