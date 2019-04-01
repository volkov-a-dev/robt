import React, { Component } from "react";
import { Row, Col, Button, Card, Form, Input } from "antd";
import { axiosMain } from "../../axios-path-config";
import Select from "../../components/UI/Select/Select";
import "antd/dist/antd.css";

const ButtonGroup = Button.Group;

class FilterSingleMarkContainer extends Component {
    state = {
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
            aux: false,
            bluerooth: false,
            usb: false,
        }
    };

    handleChangeMarks = value => {
    };

    componentDidUpdate() {
        console.warn(!this.state.model.options, "componentn did upodate!!", this.state);
        // this.setState({
        //     ...this.state,
        //     model: {
        //         ...this.state.model,
        //         disabled: true,
        //     }
        // })
    }

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
                                {getFieldDecorator("note", {
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
                                {getFieldDecorator("note", {
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
                            <Button>Clear</Button>
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
