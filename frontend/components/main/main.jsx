import React from 'react';
import { connect } from 'react-redux';
import DashboardContainer from '../dashboard/dashboard_container';
import PostIndexContainer from '../posts/post_index_container';
import HomeContainer from '../home/home_container';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SidePiece from '../side_piece/sidePiece';


function Main({ currentUser }) {
    if (currentUser) {

        if (location.hash.match(/profile/)) {
            return null
        }
        else {
            return (
                <>
                    <div className="solidDiv"></div>
                    <div className='MainBackground'></div>
                    <div className="main-content">
                        <div>
                            <DashboardContainer />
                            <PostIndexContainer />
                        </div>
                            <SidePiece />
                        </div>

                </>
            )
        }
    } else {
        return (<Route exact path="/" component={HomeContainer} />);
    }
}

const msp = (state) => {
    return {
        currentUser: state.session.id
    }
}

export default withRouter(connect(msp, null)(Main));