import React from 'react';

class SidePiece extends React.Component {
    
    constructor(){
        super();
    }

    render(){
        return(
            <div className='SidePiece'>
                <div className="SideTitle">spotlight</div>
                <div className="SidePhoto"></div>
                <div className="links">
                    <a href="https://www.linkedin.com/in/richard-chen-6651b4101/"><i id="linkedin" class="fab fa-linkedin fa-3x"></i></a>
                    <a href="https://github.com/HelloPancake/Groove"><i id="git" class="fab fa-github-square fa-3x" link></i></a>
                </div>
            </div>
        )
    }
}

export default SidePiece