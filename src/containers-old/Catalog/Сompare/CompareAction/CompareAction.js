import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../../../../store/actions/';


class CompareAction extends Component {
    state = {
        active: false
    }

    componentDidMount() {
        if (this.props.compare.compare.indexOf(this.props.id.toString()) >= 0) {
            this.setState({active: true })
        }
    }

    //To do: need to test
    componentDidUpdate(prevProps) {
        if (prevProps.compare !== this.props.compare && !this.props.compare.removeAll) {
            this.setState({
                active: false
            })
        }
    }

    handleClick = (id, compareArray) => {
        let checked = this.state.active;

        if (!checked) {
            this.props.onAddCompare(id, compareArray);
            this.setState({ active: !checked });
        } else {
            this.setState({ active: !checked });
            this.props.onRemoveByIdCompare(id, compareArray);
        }
    }

    render() {
        return (
            <div>
                <input type="checkbox" 
                    checked={this.state.active}
                    onChange={() => this.handleClick(this.props.id.toString(), this.props.compare.compare)} />
                <label htmlFor="schpcom_1" />
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        compare: state.compare,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAddCompare: (id, addedArray) => dispatch(actions.addCompare(id, addedArray)),
        onRemoveByIdCompare: (id, addedArray) => dispatch(actions.remomeByIdCompare(id,addedArray))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompareAction);
