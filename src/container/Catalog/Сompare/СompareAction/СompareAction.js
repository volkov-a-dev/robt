import React, { Component } from 'react';

class CompareAction extends Component {
    state = {
        id : null,
        checked: false
    }

    componentDidMount() {
        console.info(this.props.id)
        let compareItems = localStorage.getItem('compare');
        console.log(compareItems)
        if (!compareItems){
            localStorage.setItem('compare', '123123123, 12312312, 12312323')  
        }
        compareItems = localStorage.getItem('compare');
        console.log(compareItems)
    }

    render() {

        return (
            <div>
            
                {/* <input type="checkbox" onChange={this.state.checked} checked={this.state.checked} /> */}
                <label htmlFor="schpcom_1" />
            </div>
        )
    }
}


export default CompareAction;





