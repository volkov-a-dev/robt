import React, { Component } from "react";
import {
    Row,
    Col,
    Button,
    Card,
    Select,
    Tag,
    Tooltip,
    Icon,
    Checkbox
} from "antd";

import "antd/dist/antd.css";

const Option = Select.Option;

const ButtonGroup = Button.Group;


 

class FilterSingleMarkContainer extends Component {
    state = {
        filterFields : {
            marks: {
                type: "select",
                id: "marks",
                elementConfig: {
                    placeholder: "Марка",
                    options: [
                        {value: "bmw", displayValue: "bmw"},
                        {value: "audi", displayValue: "audi"},
                        {value: "lada", displayValue: "lada"},
                        {value: "opel", displayValue: "opel"}
                    ],
                    disabled: false
                },
                value: "",
                showSearch: false,
                actions: {
                    change: this.handleChangeMarks,
                    focus: this.handleFocusMarks,
                    blur: this.handleBlurMarks
                }
                
            },
            model: {
                type: "select",
                elementConfig: {
                    placeholder: "Марка",
                    options: [
                        {value: "100", displayValue: "100"},
                        {value: "80", displayValue: "80"},
                        {value: "a4", displayValue: "a4"},
                        {value: "a3", displayValue: "a3"}
                    ],
                    disabled: true
                },
                value: "",
                showSearch: false,
                actions: {
                    change: this.handleChangeModel,
                    focus: this.handleFocusModel,
                    blur: this.handleBlurModel
                }
                
            }
        }
    }

    handleChangeMarks = (value) => {
        console.log(`selected ${value}`);
    }

    handleFocusMarks = () => {
        console.log("focus");
    };


    handleBlurMarks = () => {
        console.log("blur");
    };




    handleBlur = () => {
        console.log("blur");
    };

    handleFocus = () => {
        console.log("focus");
    };

    onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    log = e => console.log(e);

    preventDefault = e => {
        e.preventDefault();
        console.log("Clicked! But prevent default.");
    };


    formBuilderHandler = obj => {
        let block;
        switch (obj.config.type) {
            case "select":
                let options = obj.config.elementConfig.options.map((i, index) => {
                    return (
                        <Option key={index} value={i.value}>{i.displayValue}</Option>
                    )
                })

                 block = (
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder={obj.config.elementConfig.placeholder}
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                    {options}
                    </Select>
                )
                
                return block;
                
            default: return (
            <div>Lol</div>
            )
        }
    }

    render() {

        let filter = (
            <Row type="flex" span={18} offset={5}>
            <Row type="flex"  >
                <Card title="Card title" style={{ width: 800 }}>
                <Row type="flex" justify="start">
                    <Col span={10}>
                    <ButtonGroup>
                        <Button>Все</Button>
                        <Button>Новые</Button>
                        <Button>С пробегом</Button>
                    </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    </Col>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    </Col>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 120 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Button>Все</Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    </Col>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    </Col>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    </Col>
                </Row>

                <Row>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    </Col>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    </Col>
                    <Col span={7}>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    <Select
                        showSearch
                        style={{ width: 100 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                    </Col>
                </Row>
                <Row>
                    <Col span={11} />
                    <Col span={11}>
                    <Button type="primary">Primary 1</Button>
                    </Col>
                </Row>
                </Card>
            </Row>
            <Row>
            <Col span={6}>
                <div class="ListingPopularMMM-module__item">
                <a
                    class="Link ListingPopularMMM-module__itemName"
                    href="https://auto.ru/cars/vaz/2107/all/?currency=USD&amp;price_to=550000&amp;sort=price-desc"
                >
                    2107
                </a>
                <div class="ListingPopularMMM-module__itemCount">6557</div>
                </div>
            </Col>
            <Col span={6}>
                <div class="ListingPopularMMM-module__item">
                <a
                    class="Link ListingPopularMMM-module__itemName"
                    href="https://auto.ru/cars/vaz/2107/all/?currency=USD&amp;price_to=550000&amp;sort=price-desc"
                >
                    2107
                </a>
                <div class="ListingPopularMMM-module__itemCount">6557</div>
                </div>
            </Col>
            </Row>

            <Row>
            <Col span={18}>
                <Tag onClose={this.log}>Tag 2</Tag>
                <Tag onClose={this.preventDefault}>Prevent Default</Tag>
            </Col>
            <Col span={6}>
                <Button shape="circle" type="primary">
                ne
                </Button>
                <Button shape="circle" type="primary">
                >
                </Button>
            </Col>
            </Row>

            <Row>
            <Select
                showSearch
                style={{ width: 100 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) =>
                option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>

            <Select
                showSearch
                style={{ width: 100 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) =>
                option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            <Select
                showSearch
                style={{ width: 100 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) =>
                option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            <Icon type="question-circle" theme="filled" />

            <Checkbox onChange={this.onChange}>Checkbox 1</Checkbox>
            <Checkbox onChange={this.onChange}>Checkbox 2</Checkbox>
            <Select
                showSearch
                style={{ width: 100 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) =>
                option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
            >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
            </Select>
            <ButtonGroup>
                <Button>
                <Icon type="ordered-list" />
                </Button>
                <Button>
                <Icon type="table" />
                </Button>
            </ButtonGroup>
            </Row>

            <Row />
            <div>
                Test
            </div>
        </Row>
        );

        let card = (
            <Card style={{ width: 800 }}>
                <Row type="flex" justify="space-between">
                    <Col span={10}>
                        <ButtonGroup>
                            <Button>Все</Button>
                            <Button>Новые</Button>
                            <Button>С пробегом</Button>
                        </ButtonGroup>
                    </Col>
                    <Col >
                        <Button>С пробегом</Button>
                    </Col>
                </Row>

                <Row type="flex" justify="space-between">
                    <Col span={8}>
                        
                        <Select
                            showSearch
                            style={{ width: 100 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) =>
                            option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {/* {this.state.filterFields.marks.map((i, index) => {
                                return <Option key={index} value={i}>i</Option>
                            })}
                             */}
                            
                        </Select>
                    </Col>
                    <Col >

                    </Col>
                </Row>
            </Card>
        )

        const formElementsArray = [];
        
        for (let key in this.state.filterFields) {
            formElementsArray.push({
                id: key,
                config: this.state.filterFields[key]
            })
        }
        
        let formBuilder = formElementsArray.map((i, index) => {
            console.log(i)
            return (
                <div key={index}>
                    {this.formBuilderHandler(i, index)}
                </div>
            )
        })

        let filterHtml = (
            <Row>
                <Row>
                   {card}
                   {formBuilder}
                </Row>
            </Row>
        )
        return (
        <>
            {filterHtml}
        </>
        );
    }
    }

    export default FilterSingleMarkContainer;
