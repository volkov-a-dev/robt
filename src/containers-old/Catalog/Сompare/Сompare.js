import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../../../store/actions/index';
import CompareBtn from '../../../components/UI/CompareBtn/CompareBtn';
class Compare extends Component {
    state = {
        show: false,
        warningMassage: false
    }

    componentDidMount() {
        if (this.props.compare.length) {
            this.setState({show: true})
        }
    }

    warningClickHandler = () => {

    }

    removeAllCompareHandler = () => {
        this.setState({show: false});
        this.props.removeAllIdsCompare();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.compare !== this.props.compare ) {
            if (this.props.compare.length > 0) this.setState({ show: true });

            if (this.props.compare.length === 0) this.setState({ show: false });
        }
    }

    render() {
        let nameBtn;

        if (this.props.compare) {
            let addedItems = this.props.compare.length;
            
            //To do: Need to do: rewrite this keys for text display
            switch (addedItems) {
                case 1:
                    nameBtn = `${addedItems} товар в сравнении`;
                    break;
                case 2:
                case 3:
                case 4:
                    nameBtn = `${addedItems} товара в сравнении`;
                    break;
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    nameBtn = `${addedItems} товаров в сравнении`;
                    break;           
                default: 
                    nameBtn = "0 товаров в сравнении";
                    break;
            }
        }

        return (
            <>
                <CompareBtn 
                    view={this.state.show} 
                    name={nameBtn}
                    showWarninMassage={this.state.warningMassage}
                    confirmClick={this.removeAllCompareHandler} 
                    click={this.warningClickHandler}/>
            </>
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
        removeAllIdsCompare: () => dispatch(actions.removeAllIdsCompare())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Compare);