import React, { Component } from 'react';

import * as actions  from '../../store/actions/index';
import { connect } from 'react-redux';

import ListGroup from '../../components/UI/Lists/ListGroup/ListGroup';

class Forum extends Component {

    componentDidMount () {
        this.props.onFetchAllTopics();
    }
    
    render() {
        let topics;

        if (this.props.topics.topics && this.props.topics.topics.length >= 0) {
            topics = this.props.topics.topics.map((i, index) => {
                return (
                    <ListGroup
                        key={index}
                        mainTitle={i.category}
                        listItems={i.items} 
                        uiView="icon-auth"
                    />
                )
            })    
        }
        
        let loading = <div>Loading...</div>;

        if (!this.props.loading) {
            loading = (
                <>
                    <h1>Forum</h1>
                    <ListGroup 
                        mainTitle="Main"
                        listItems={this.props.topics.hot} 
                        uiView="icon-auth" />
                    
                    {topics}
                </>
            )
        }
        return(
            <div>
                {loading}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topics: state.forum.topics,
        loading: state.forum.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchAllTopics: () => dispatch(actions.fetchInitMainTopics())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Forum);