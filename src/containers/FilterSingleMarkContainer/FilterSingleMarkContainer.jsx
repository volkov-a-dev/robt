import React, { Component } from "react";
import { Row, Col, Button, Card, Form, Input, Typography, Checkbox } from "antd";
import { axiosMain } from "../../axios-path-config";
import Select from "../../components/UI/Select/Select";

import "antd/dist/antd.css";

const ButtonGroup = Button.Group;
const { Title } = Typography;

const initialState = {
    brands: {
        options: [
            { value: "bmw", displayValue: "bmw" },
            { value: "audi", displayValue: "audi" },
            { value: "lada", displayValue: "lada" },
            { value: "opel", displayValue: "opel" }
        ],
        value: null,
        disabled: false
    },
    model: {
        options: [],
        value: " ",
        disabled: true
    },
    generation: {
        options: [],
        value: " ",
        disabled: true
    },
    careBody: {
        options: [
            { value: "saloon", displayValue: "saloon" },
            { value: "hatchback", displayValue: "hatchback" },
            { value: "Convertible", displayValue: "Convertible" },
            { value: "Estate", displayValue: "Estate" }
        ],
        value: null,
        disabled: false
    },

    antiTheft: {
        options: [
            { value: "no", displayValue: "no" },
            { value: "yes", displayValue: "yes" },
            { value: "yes+", displayValue: "yes+" },
        ],
        centralLocking: {
            checked: false,
            disabled: false
        },
        IPSVolumeSensor: {
            checked: false,
            disabled: false
        },
        Immobilizer: {
            checked: false,
            disabled: false
        },
    },

    multimedia: {
        audiosystem: {
            options: [
                { value: "no", displayValue: "no" },
                { value: "yes", displayValue: "yes" },
                { value: "yes+", displayValue: "yes+" },
            ]
        },
        aux: {
            checked: false,
            disabled: false
        },
        bluerooth: {
            checked: false,
            disabled: false
        },
        usb: {
            checked: false,
            disabled: false
        },
        jack12V: {
            checked: false,
            disabled: false
        },
        jack220V: {
            checked: false,
            disabled: false
        }
    },

    other: {
        airSuspension: {
            checked: false,
            disabled: false
        },
        hitch: {
            checked: false,
            disabled: false
        }
    }
}
class FilterSingleMarkContainer extends Component {
    state = initialState;
    baseState = this.state;

    getUnique = (arr, comp) => {
        const unique = arr
        .map(e => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter(e => arr[e])
        .map(e => arr[e]);

        return unique;
    };

    log = e => console.log(e);

    preventDefault = e => {
        e.preventDefault();
        console.log("Clicked! But prevent default.");
    };

    changeBrandsHandler = value => {
        axiosMain.get('/cars-list')
            .then(response => {
                let updateSelect = this.getUnique(response.data.cars, 'value').filter((i) => {
                    return i.model === value;
                });
                this.setState({
                    ...this.state,
                    brands: {
                        ...this.state.brands,
                        value: value
                    },
                    model: {
                        ...this.state.model,
                        options: updateSelect,
                        disabled: false,
                        value: null
                    }
                })
            })
            .catch(error => {
                console.log(error)
                // this.setState({error: true})
            });
    };

    changeModelHandler = value => {
        this.setState({
            ...this.state,
            model: {
                ...this.state.model,
                value: value
            }
        })
    }

    clearFilterHandler = () => {
        console.log('warnongg click');
        console.warn('warn', this.state)
        this.setState(this.baseState)
    }

    blurHandlerChange = () => {
        console.log("blurHandlerChange");
    };

        render() {
            const { getFieldDecorator } = this.props.form;
            let MainFilds = (
            <Row>
                <Form
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 12 }}
                    onSubmit={this.handleSubmit}
                >
                    <Row type="flex">
                        <Col span={8}>
                            <Form.Item>
                                {getFieldDecorator("note", {
                                rules: [{ required: false, message: "Please input your note!" }]
                                })(
                                <Select
                                    options={this.state.brands.options}
                                    placeholder="Brands"
                                    change={this.changeBrandsHandler}
                                    blur={this.blurHandlerChange}
                                    disabled={this.state.brands.disabled}
                                    valueSelect={this.state.brands.value}
                                />
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item>
                                {getFieldDecorator("sss", {
                                rules: [{ required: false, message: "Please input your note!" }]
                                })(
                                    
                                <Select
                                    options={this.state.model.options}
                                    placeholder="Model"
                                    change={this.changeModelHandler}
                                    blur={this.blurHandlerChange}
                                    disabled={this.state.model.disabled}
                                    valueSelect={this.state.model.value}
                                />
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item>
                                {getFieldDecorator("xx", {
                                rules: [{ required: false, message: "Please input your note!" }]
                                })(
                                <Select
                                    options={this.state.brands.options}
                                    placeholder="Brands"
                                    change={this.selectHandlerChange}
                                    blur={this.blurHandlerChange}
                                    disabled={this.state.brands.disabled}
                                    valueSelect={this.state.brands.value}
                                />
                                )}
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row type="flex">
                        <Row >
                            <Row type="flex">
                                <Title level={2}>h2. Ant Design</Title>
                            </Row>
                            <Row type="flex">
                                <Col span={8}>
                                    <Form.Item style={{width: '200px'}}>
                                        {getFieldDecorator("ddd", {
                                        rules: [{ required: false, message: "Please input your note!" }]
                                        })(
                                        <Select
                                            options={this.state.multimedia.audiosystem.options}
                                            placeholder="audio system"
                                            change={this.selectHandlerChange}
                                            blur={this.blurHandlerChange}
                                            disabled={this.state.brands.disabled}
                                            valueSelect={this.state.brands.value}
                                        />
                                        )}
                                    </Form.Item>
                                    <Form.Item style={{width: '200px'}}>
                                        {getFieldDecorator('aux', {
                                            valuePropName: 'checked',
                                            initialValue: this.state.multimedia.aux.checked
                                        })(
                                            <Checkbox>Aux</Checkbox>
                                        )}
                                    </Form.Item>
                                    <Form.Item style={{width: '200px'}}>
                                        {getFieldDecorator('bluerooth', {
                                            valuePropName: 'checked',
                                            initialValue: this.state.multimedia.bluerooth.checked
                                        })(
                                            <Checkbox>Bluerooth</Checkbox>
                                        )}
                                    </Form.Item>
                                    <Form.Item style={{width: '200px'}}>
                                        {getFieldDecorator('usb', {
                                            valuePropName: 'checked',
                                            initialValue: this.state.multimedia.usb.checked
                                        })(
                                            <Checkbox>USB</Checkbox>
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item style={{width: '200px'}}>
                                        {getFieldDecorator('jack12V', {
                                            valuePropName: 'checked',
                                            initialValue: this.state.multimedia.jack12V.checked
                                        })(
                                            <Checkbox disabled={this.state.multimedia.jack12V.disabled}>Jack 12V</Checkbox>
                                        )}
                                    </Form.Item>
                                    <Form.Item style={{width: '200px'}}>
                                        {getFieldDecorator('jack220V', {
                                            valuePropName: 'checked',
                                            initialValue: this.state.multimedia.jack220V.checked
                                        })(
                                            <Checkbox disabled={this.state.multimedia.jack220V.disabled}>Jack 220V</Checkbox>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Row>
                    </Row>

                    <Row type="flex">
                        <Row >
                            <Row type="flex">
                                <Title level={2}>Other</Title>
                            </Row>
                            <Row type="flex">
                                <Col span={8}>
                                <Form.Item style={{width: '200px'}}>
                                        {getFieldDecorator('jack220V', {
                                            valuePropName: 'checked',
                                            initialValue: this.state.other.airSuspension.checked
                                        })(
                                            <Checkbox disabled={this.state.other.airSuspension.disabled}>Jack 220V</Checkbox>
                                        )}
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                <Form.Item style={{width: '200px'}}>
                                        {getFieldDecorator('jack220V', {
                                            valuePropName: 'checked',
                                            initialValue: this.state.other.hitch.checked
                                        })(
                                            <Checkbox disabled={this.state.other.hitch.disabled}>Jack 220V</Checkbox>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Row>
                    </Row>
                </Form>
            </Row>
            );

            let cardForm = (
                <Card style={{ width: 800 }}>
                    <Row type="flex" justify="space-between">
                        <Col span={10}>
                            <ButtonGroup>
                                <Button>Все</Button>
                                <Button>Новые</Button>
                                <Button>С пробегом</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row type="flex">{MainFilds}</Row>

                    <Row type="flex" justify="space-between">
                        <Col>
                            <Button>All paramns</Button>
                            <Button onClick={this.clearFilterHandler}>Clear</Button>
                        </Col>
                        <Col>
                            <Button>Show <span> {this.state.model.options.length}</span></Button>
                        </Col>
                    </Row>
                </Card>
            );

            return <>{cardForm}</>;
        }
    }

    const WrappedApp = Form.create({ name: "coordinated" })(
    FilterSingleMarkContainer
    );

export default WrappedApp;
