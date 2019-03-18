import React, { Component } from 'react';
import { axiosMain } from '../../../../axios-path-config';

class CompareTable extends Component {
    state = {
        compareItems : []
    }
    componentDidMount() {
        axiosMain.get('/category-phone')
            .then(response => {
                let data = response.data.products;
                let compareItems = localStorage.getItem('compare').split(',');

                let compareProducts = data.filter(i => {
                    return compareItems.some((dataId) => {
                        return i.id == dataId;
                    })
                })

                this.setState({compareItems: compareProducts})
            })
            .catch(error => {
                console.log(error)
            });   
    }

    render() {
        let table;
        if (this.state.compareItems) {
            table = this.state.compareItems.map((i, index) => {
                return (
                    <div key={index}>
                        <h1>{i.full_name}</h1>
                    </div>
                )
            })
        }
        return (
            <div className="table">
                {table}

            </div>
        )
    }
}

export default CompareTable;