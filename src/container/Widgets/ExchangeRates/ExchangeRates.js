import React, { Component } from 'react';

import { nbrdAPi } from '../../../axios-path-config';

class exchangeRates extends Component {
    state = {
        exRates: [],
        loading: false,
    }


    singleCurrencyHandler = () => {
        nbrdAPi.get('/ExRates/Rates/145')
        .then(response => {
            this.setState((state, props) => {
                return {
                    exRates: response.data,
                    loading: true
                };
            })
        })
        .catch(error => {
            console.log(error)
        });   
    }

    componentDidMount() {
        if (this.props.currency === "usd") {
            this.singleCurrencyHandler()
        }
    }

    render() {
        console.log(this.props)
        let rates;
        if (this.state.exRates) {
            rates = Number.parseFloat(this.state.exRates["Cur_OfficialRate"]).toFixed(2);
        }
        return (
            <span>{this.state.loading ? '$' + rates : null }</span>
        )
    }
    
}

export default exchangeRates;