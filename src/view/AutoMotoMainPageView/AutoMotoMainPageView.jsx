import React, { Component } from 'react';
import FilterMarksContainer from '../../containers/FilterMarksContainer/FilterMarksContainer';


class AutoMotoMainPageView extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Widget care filter</h1>
                    <FilterMarksContainer />
                </div>

            </>
        )
    }
}

export default AutoMotoMainPageView;