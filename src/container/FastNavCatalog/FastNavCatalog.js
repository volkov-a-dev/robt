import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { axiosMain } from '../../axios-path-config';

import classes from './FastNavCatalog.module.scss';
class FastNavCatalog extends Component {
    state = {
        nav: []
    };

    componentDidMount() {
        axiosMain.get('/catalog-fast-nav')
            .then(response => {
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
            if (this.props.type === "line") {
                navElements = this.state.nav.map((nav, index) => {
                    return (
                        <li className={classes["project-navigation__item"]} key={index}>
                            <Link to={nav.link} className={classes["project-navigation__item-link"]}>
                                <span className="project-navigation__text">
                                    <span className="project-navigation__sign">{nav.name}</span>
                                </span>
                            </Link>
                        </li>
                    )
                })
            }
        }

        return (
            <div className={classes["project-navigation"]}>
                <div  className={classes["project-navigation__flex"]}>
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

export default FastNavCatalog;