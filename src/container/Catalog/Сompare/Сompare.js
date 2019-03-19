import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../../../store/actions/index';
import CompareBtn from '../../../components/UI/CompareBtn/CompareBtn';
class Compare extends Component {
    componentDidMount() {
        this.props.onGetCompare()
    }


    render() {
        return (
            <>
                <CompareBtn />
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetCompare: () => dispatch(actions.getCompare())
        
    }
}

export default connect(null, mapDispatchToProps)(Compare);


