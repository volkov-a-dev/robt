import React, { Component } from "react";
// import Button from '../../../components/UI/Button/Button';

import { Row, Col, Button } from "antd";
import "antd/dist/antd.css";

const ButtonGroup = Button.Group;
// import "./index.css";

const carsArray = {
    main: [
        {
            name : "vs"
        },
        {
            name: "toyota"
        },
        {
            name: "ms"
        },
        {
            name: "mm"
        },
        {
            name: "lada"
        },
        {
            name: "kia"
        },
        {
            name: "hyundai"
        },
        {
            name: "ford"
        },
        {
            name: "bmw"
        },
        {
            name: "audi"
        }
    ],
    allList: [
        {
            name : "vs",
        },
        {
            name: "toyota"
        },
        {
            name: "ms"
        },
        {
            name: "mm"
        },
        {
            name: "lada"
        },
        {
            name: "kia"
        },
        {
            name: "hyundai"
        },
        {
            name: "ford"
        },
        {
            name: "bmw"
        },
        {
            name: "audi"
        }
    ]
};

class FilterMarks extends Component {

    render() {
        let cars = carsArray.allList.map((i, index) => {
        return (
            <li key={index}>
            <a href="/">
                <div className="logo-mark" >{i.name}</div>
            </a>
            </li>
        );
        });

        let colCars = carsArray.allList.map((i, index) => {
        return (
            <a
            key={index}
            className="IndexMarks__item"
            href="https://auto.ru/cars/vaz/all/"
            >
            <div className="IndexMarks__item-name">{i.name}</div>
            <div className="IndexMarks__item-count">{i.count}</div>
            </a>
        );
        });

        let markLogo = carsArray.main.map((i, index) => {
            return (
                <Col span={2} key={index}>
                    <a href="/ab/mark">
                        <div>{i.name}</div>
                    </a>
                </Col>
            )
        });

        return (
        <>
            <div className="header">
                <Row type="flex" justify="start">
                    <Col xs={2} sm={4} md={6} lg={6} xl={6} >
                        <ButtonGroup>
                            <Button>Марки</Button>
                            <Button>Помощник</Button>
                        </ButtonGroup>
                    </Col>
                    <Col span={6} offset={12}>
                        <ButtonGroup>
                            <Button>Все</Button>
                            <Button>Новые</Button>
                            <Button>С пробегом</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                
                <Row type="flex" justify="start">
                    {markLogo}
                </Row>
 
            <div>

            </div>
            </div>
            <div className="body">
            <div className="mark">
                <ul>{cars}</ul>
            </div>

            <div className="lists-mark">
                <div className="IndexMarks__col">{colCars}</div>
            </div>
            <div className="IndexSelector__bottom-controls">
                <div className="IndexSelector__price">
                <div className="IndexSlider">
                    <div className="IndexSlider__bar" />
                    <div className="IndexSlider__click-bar" />
                    <div className="IndexSlider__content">
                    <div
                        className="IndexSlider__toggler IndexSlider__toggler_from"
                        data-id="from"
                    />
                    <div className="IndexSlider__progress" />
                    <div
                        className="IndexSlider__toggler IndexSlider__toggler_to"
                        data-id="to"
                    />
                    <div className="IndexSlider__label IndexSlider__label_from">
                        от 10 000 ₽
                    </div>
                    <div className="IndexSlider__label IndexSlider__label_to">
                        до 300 000 000 ₽
                    </div>
                    <div className="IndexSlider__label IndexSlider__label_fake">
                        от 30 000 ₽
                    </div>
                    </div>
                </div>
                </div>
                <div className="IndexSelector__submit">
                <button
                    className="Button Button_color_blue Button_size_l Button_type_button Button_width_full"
                    type="button"
                >
                    <span className="Button__content">
                    <span className="Button__text">
                        Показать 609&nbsp;216&nbsp;предложений
                    </span>
                    </span>
                </button>
                </div>
            </div>
            </div>
        </>
        );
    }
}

export default FilterMarks;
