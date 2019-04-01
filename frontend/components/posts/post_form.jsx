import React from 'react';
import { withRouter } from 'react-router-dom';

const PostForm = () => {


    return(
        <div className="formButtons">
            <i className="buttonText">      
                <div className="TextIcon">Aa</div>
                <div className="TextText">Text</div>
            </i>
            <div className="grey-vert">
                <div></div>
            </div>

            <i className="buttonPhoto">
                <div className="PhotoIcon"><i className="fas fa-camera-retro fa-2x"></i></div>
                <div className="PhotoText">Photo</div>
            </i>

            
            <div className="grey-vert">
                <div></div>
            </div>

            <i className="buttonQuote">
                <div className="QuoteIcon"><i className="fas fa-quote-left fa-2x"></i></div>
                <div className="QuoteText">Quote</div>
            </i>


            <div className="grey-vert">
                <div></div>
            </div>

            <i className="buttonLink">
                <div className="LinkIcon"><i className="fas fa-link fa-2x"></i></div>
                <div className="LinkText">Link</div>
            </i>

            
            <div className="grey-vert">
                <div></div>
            </div>

            <i className="buttonAudio">
                <div className="AudioIcon"><i className="fas fa-headphones fa-2x"></i></div>
                <div className="AudioText">Audio</div>
            </i>


            <div className="grey-vert">
                <div></div>
            </div>

            <i className="buttonVideo">
                <div className="VideoIcon"><i className="fas fa-video fa-2x"></i></div>
                <div className="VideoText">Video</div>
            </i>
           
            {/* <div className="line"></div> */}

        </div>

    )

};

export default PostForm;