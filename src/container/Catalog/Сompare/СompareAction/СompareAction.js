import React, { Component } from 'react';


class CompareAction extends Component {
    state = {
        active: false
    }

    componentDidMount() {

        let compareItems = localStorage.getItem('compare');
        if (compareItems){
            let indexId = compareItems.split(',').indexOf(this.props.id.toString())
            if (indexId >= 0) this.setState({active: !this.state.active})
        }
    }

    handleClick = id => {
        const checkedState =  !this.state.active;
        this.setState({active: checkedState});
        let compareItems = localStorage.getItem('compare');
        
        if (!compareItems) {
            localStorage.setItem('compare', id); 
        } else {
            if (checkedState) {
                let compareUpdate = compareItems.split(' ');
                compareUpdate.push(id)
                localStorage.setItem('compare', compareUpdate.join(',')); 
            } else {
                let compareUpdate = compareItems.split(',');
                let index = compareUpdate.indexOf(id.toString());
                compareUpdate.splice(index, 1)
                localStorage.setItem('compare', compareUpdate)
                
                if (!localStorage.getItem('compare')) {
                    localStorage.removeItem('compare');
                }
            }
        }
    }

    render() {

        return (
            <div>
    
                <input type="checkbox" 
                    checked={this.state.active}
                    onChange={() => this.handleClick(this.props.id)} />
                <label htmlFor="schpcom_1" />
            </div>
        )
    }
}


export default CompareAction;





