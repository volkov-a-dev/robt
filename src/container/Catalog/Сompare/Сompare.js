import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../../../store/actions/index';
import CompareBtn from '../../../components/UI/CompareBtn/CompareBtn';
class Compare extends Component {
    componentDidMount() {
        this.props.onGetCompare()
    }


    render() {
        let compareBtnStatus = false;
        let nameBtn;
        
        if (this.props.compare) {
            compareBtnStatus = true;
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
                <CompareBtn view={compareBtnStatus} name={nameBtn}/>
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
        onGetCompare: () => dispatch(actions.getCompare())
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Compare);

// export default Compare;
