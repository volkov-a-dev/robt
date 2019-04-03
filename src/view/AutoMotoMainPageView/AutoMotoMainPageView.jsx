import React, { Component } from 'react';
// import FilterMarksContainer from '../../containers/FilterMarksContainer/FilterMarksContainer';
import { Link } from 'react-router-dom'


class AutoMotoMainPageView extends Component {
    render() {
        return (
            <>
            
                <div>
                    <h1>Widget care filter</h1>
                    <Link to="/ab/all">TO</Link>
                    <br/>
                    <Link to="/ab/tt/all">TO</Link>
                    {/* <FilterMarksContainer /> */}
                </div>

            </>
        )
    }
}

export default AutoMotoMainPageView;