import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../../../../store/actions/';


class CompareAction extends Component {
    state = {
        active: false
    }

    componentDidMount() {
        this.props.onGetCompare()
        if (this.props.compare.indexOf(this.props.id.toString()) >= 0) {
            console.warn(this.props.id)
            this.setState({active: true })
        }
    }

    handleClick = id => {
        console.log(id)
        // const checkedState =  !this.state.active;
        // this.setState({active: checkedState});
        // let compareItems = localStorage.getItem('compare');
        
        // if (!compareItems) {
        //     localStorage.setItem('compare', id); 
        // } else {
        //     if (checkedState) {
        //         let compareUpdate = compareItems.split(' ');
        //         compareUpdate.push(id)
        //         localStorage.setItem('compare', compareUpdate.join(',')); 
        //     } else {
        //         let compareUpdate = compareItems.split(',');
        //         let index = compareUpdate.indexOf(id.toString());
        //         compareUpdate.splice(index, 1)
        //         localStorage.setItem('compare', compareUpdate)
                
        //         if (!localStorage.getItem('compare')) {
        //             localStorage.removeItem('compare');
        //         }
        //     }
        // }
    }

    render() {
        // console.log(this.props.compare.indexOf(this.props.id.toString()) >= 0)
   
        
        return (
            <div>
                <input type="checkbox" 
                    checked={this.state.active}
                    onChange={() => this.props.onAddCompare(this.props.id.toString(), this.props.compare)} />
                <label htmlFor="schpcom_1" />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        compare: state.compare.compare,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetCompare: () => dispatch(actions.getCompare()),
        onAddCompare: (id, addedArray) => dispatch(actions.addCompare(id, addedArray))
        
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareAction);
