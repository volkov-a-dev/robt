import React, { Component } from 'react';
import classes from './MainSearch.module.scss';

import Modal from '../../../../components/UI/Modal/Modal';

class FormSearch extends Component {
    state = {
        modalView: false,
        searchTxt: '',
        
    };
    
    inputRef = React.createRef();
    
    // componentDidUpdate(prevProps, prevState) {
    //     this.inputRef.current.focus();
    // }

    // closeBtnHandler = () => {
    //     this.setState({modalView: false})
    // };   

    // openBtnHandler = () => {
    //     this.setState({modalView: true})
    // };


    inputChangedHandler = (event) => {
        let inputValue = event.target.value;
        if (inputValue) {
            this.setState({modalView: true , searchTxt: inputValue})
        }

    }
    
    searchCancelHandler = () => {
        this.setState({modalView: false})
    }

    // inputModalHandler = (event) => {
    //     let inputValue = event.target.value;
    //     this.setState({modalView: true , searchTxt: inputValue})
    // }

    render() {
        let modalView = [classes.modal];

        if (this.state.modalView) {
            modalView = [classes.modal, classes["modal_show"]]
        }

        return (
            <>
            <div id="fast-search" className={classes["fast-search"]}>
                <form className={classes["fast-search__form"]} action="//catalog.onliner.by/search/" method="get" autoComplete="off">
                    <input
                        className={classes["fast-search__input"]} 
                        type="text" 
                        onChange={(event) => this.inputChangedHandler(event)}
                        value={this.state.searchTxt}
                        placeholder="Поиск в Каталоге. Например, &quot;телевизор 42&quot;"/>
                    <input type="hidden" name="charset" value="utf-8" />
                    <button className={classes["fast-search__submit"]} type="submit">Найти</button>
                </form>
                <button onClick={this.openBtnHandler}>x</button>
            </div>

            {/* <div className={modalView.join(' ')}>
                <div className={classes["modal__wrap"]}>
                <div>Modal
                <input 
                    type="text"
                    value={this.state.searchTxt}
                    ref={this.inputRef}
                    onChange={(event) => this.inputModalHandler(event)}
                    />
                </div>
                <button onClick={this.closeBtnHandler}>x</button>
                </div>
            </div> */}

            <Modal show={this.state.modalView} modalClosed={this.searchCancelHandler} />
            </>
        )    
    }
} 

export default FormSearch;