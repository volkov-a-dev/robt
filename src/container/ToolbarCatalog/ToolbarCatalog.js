import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios-path-config';

class ToolbarCatalog extends Component {
    state = {
        nav: [ ]
    };

    componentDidMount() {
        axios.get('/catalog-fast-nav')
            .then(response => {
               
                // const navArray = nav: response.data;
                this.setState({nav: response.data})
               
            })
            .catch(error => {
                console.log(error)
                this.setState({error: true})
            });   
    }
    render() {
        let navElements;
        if (this.state.nav) {
            navElements = this.state.nav.map(nav => {
                return (
                    <li claclassNamess="project-navigation__item project-navigation__item_secondary">
                        <Link to={nav.link}>
                            <span className="project-navigation__text">
                                <span className="project-navigation__sign">{nav.name}</span>
                            </span>
                        </Link>
                    </li>
                )
            })
        }

        return (
            <div className="project-navigation project-navigation_overflow project-navigation_scroll">
                <div className="project-navigation__flex">
                    <div className="project-navigation__part project-navigation__part_1">
                        <ul className="project-navigation__list project-navigation__list_secondary">
                            {navElements}
                        </ul>
                    </div>
                    <div className="project-navigation__part project-navigation__part_2"></div>
                </div>
            </div>
        )
    }
  
}

export default ToolbarCatalog;