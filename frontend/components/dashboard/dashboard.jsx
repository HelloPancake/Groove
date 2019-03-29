import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Index extends React.Component {

    

    render() {

        return (
            <div className="Dashboard-Index">
                {posts}
            </div>
        )
    }
}

export default withRouter(Index);