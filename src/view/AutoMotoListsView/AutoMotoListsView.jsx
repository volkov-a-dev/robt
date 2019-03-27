import React, { Component } from 'react';
// import Button from '../../../components/UI/Button/Button';

class AutoBMark extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Widget care filter AutoBMark</h1>
                    <div className="header">
                        <div>
                            <ul>
                                <li>
                                    {/* <Button>марки</Button> */}
                                </li>
                                <li>
                                    {/* <button>Помощник</button> */}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>Все</li>
                                <li>Новые</li>
                                <li>С пробегом</li>
                            </ul>
                        </div>
                    </div>
                    <div className="body">
                        <div className="mark">
                            <ul>
                                <li>
                                    <a href="/">
                                        <div className="logo-mark">Lada</div>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>

                        <div className="lists-mark">
                            <div className="IndexMarks__col">
                                <a className="IndexMarks__item" href="https://auto.ru/cars/vaz/all/">
                                    <div className="IndexMarks__item-name">LADA (ВАЗ)</div>
                                    <div className="IndexMarks__item-count">110014</div>
                                </a>
                                
                            </div>
                        </div>
                        <div className="IndexSelector__bottom-controls">
                            <div className="IndexSelector__price">
                                <div className="IndexSlider">
                                    <div className="IndexSlider__bar"></div>
                                    <div className="IndexSlider__click-bar"></div>
                                    <div className="IndexSlider__content">
                                        <div className="IndexSlider__toggler IndexSlider__toggler_from"  data-id="from"></div>
                                        <div className="IndexSlider__progress"></div>
                                        <div className="IndexSlider__toggler IndexSlider__toggler_to" data-id="to"></div>
                                        <div className="IndexSlider__label IndexSlider__label_from" >от 10 000 ₽</div>
                                        <div className="IndexSlider__label IndexSlider__label_to" >до 300 000 000 ₽</div>
                                        <div className="IndexSlider__label IndexSlider__label_fake">от 30 000 ₽</div>
                                    </div>
                                </div>
                            </div>
                            <div className="IndexSelector__submit">
                                <button className="Button Button_color_blue Button_size_l Button_type_button Button_width_full" type="button">
                                    <span className="Button__content">
                                        <span className="Button__text">Показать 609&nbsp;216&nbsp;предложений</span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default AutoBMark;