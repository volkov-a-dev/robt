import React, { Component } from 'react';
import FilterMarksContainers from '../../containers/FilterMarksContainers/FilterMarksContainers';


class AutoMotoMainPageView extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Widget care filter</h1>
                    <FilterMarksContainers />
                </div>

            </>
        )
    }
}

export default AutoMotoMainPageView;