import React, { Component } from 'react';
import FilterSingleMarkContainer from '../../containers/FilterSingleMarkContainer/FilterSingleMarkContainer';

class AutoBMark extends Component {
    componentDidMount() {
        // console.log(this.props.location)
        // console.log(this.state)
        console.log(this.props.match, 'componentDidMount', this.state, this.props)

    }

    render() {
        
        return (
            <>

                <FilterSingleMarkContainer />
                <div>
                    <div className="popular">
                        <div className="popular__col">
                            <div className="popular__item">
                                <a href="/" className="popular__item-link">BMW</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="carousel">
                        <ul className="carousel__lists">
                            <li className="carousel__item">до 500 000</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <div className="filter-card">
                        <select name="" id=""><option>SS</option></select>
                    </div>
                </div>
            </>
        )
    }
}

export default AutoBMark;