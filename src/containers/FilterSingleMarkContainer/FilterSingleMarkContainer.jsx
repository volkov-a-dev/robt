import React, { Component } from "react";
import {
    Row,
    Col,
    Button,
    Card,
    Select
} from "antd";
import { axiosMain } from '../../axios-path-config';
import "antd/dist/antd.css";

const Option = Select.Option;
const ButtonGroup = Button.Group;

class FilterSingleMarkContainer extends Component {
    handleChangeMarks = (value) => {
        this.setState({
            ...this.state,
            filterFields: {
                ...this.state.filterFields,
                model: {
                    ...this.state.filterFields.model,
                    elementConfig: {
                        value: " "
                    }
                }
            }
        })
        
        console.log(`selected ${value}`, this);
        axiosMain.get('/cars-list')
            .then(response => {
                let updateSelect = this.getUnique(response.data.cars, 'value').filter((i) => {
                    return i.model === value;
                });

                this.setState({
                    ...this.state,
                    filterFields: {
                        ...this.state.filterFields,
                        model: {
                            ...this.state.filterFields.model,
                            elementConfig: {
                                ...this.state.filterFields.model.elementConfig,
                                options: updateSelect,
                                disabled: false
                            }
                        }
                    }
                })
            })
            .catch(error => {
                console.log(error)
                // this.setState({error: true})
            });   
        
    }

    state = {
        filterFields : {
            marks: {
                type: "select",
                id: "marks",
                styleWrap: "1/3",
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
                    focus: this.handleFocus,
                    blur: this.handleBlur
                }
                
            },
            model: {
                type: "select",
                styleWrap: "2/3",
                elementConfig: {
                    placeholder: "Модель",
                    options: [
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


    componentDidUpdate(){
        console.warn('componentn did upodate!!', this.state)
    }
    
    getUnique = (arr,comp) => {
        const unique =  arr.map(e => e[comp])
            .map((e,i,final) => final.indexOf(e) === i && i)
            .filter((e)=> arr[e])
            .map(e => arr[e]);

        return unique
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


    formBuilderHandler = (obj, order) => {
        let block;
        switch (obj.config.type) {
            case "select":
                let options = null;
                
                if (obj.config.elementConfig.options && obj.config.elementConfig.options.length >= 0) {
                    options = obj.config.elementConfig.options.map((i, index) => {
                        // console.log('-------------', i)
                        return (
                            <Option key={index} value={i.value}>{i.displayValue}</Option>
                        )
                    })
                }

                block = (
                    <Select
                        key={order}
                        showSearch
                        style={{ width: 100 }}
                        placeholder={obj.config.elementConfig.placeholder}
                        optionFilterProp="children"
                        defaultActiveFirstOption={true}
                        allowClear={true}
                        onChange={obj.config.actions.change}
                        onFocus={obj.config.actions.focus}
                        onBlur={obj.config.actions.blur}
                        disabled={obj.config.elementConfig.disabled}
                        filterOption={(input, option) =>
                        option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                    >
                    {options}
                    </Select>
                )
                
                return options ? block : null;
                
            default: return (
            <div>Lol</div>
            )
        }
    }

    render() {

        const formElementsArray = [];
        
        for (let key in this.state.filterFields) {
            formElementsArray.push({
                id: key,
                config: this.state.filterFields[key]
            })
        }
        
        let formBuilder = formElementsArray.map((i, index) => {
            console.log('formBuilder', i)

            return (
                this.formBuilderHandler(i, index)
            )
        })

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
                    <Col ></Col>
                </Row>
                <Row type="flex" justify="space-between">
                {formBuilder}
                </Row>
            </Card>
        )


        let filterHtml = (
            <Row>
                <Row>
                    {card}
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
