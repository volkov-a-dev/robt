import React, { Component } from 'react';
import { Row, Col, Button, Card, Select, Tag } from "antd";

import "antd/dist/antd.css";

const Option = Select.Option;





const ButtonGroup = Button.Group;
class FilterSingleMarkContainer extends Component {

     handleChange = (value) =>  {
        console.log(`selected ${value}`);
      }
      
       handleBlur = () => {
        console.log('blur');
      }
      
       handleFocus = () => {
        console.log('focus');
      }

    log = (e) =>   console.log(e);
      
      
    preventDefault = (e) => {
        e.preventDefault();
        console.log('Clicked! But prevent default.');
      }
    render() {
        return (
            <>
                <Row type="flex" justify="start">
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={11}>

                            </Col>
                            <Col span={11}>
                                <Button type="primary" >Primary 1</Button>
                            </Col>
                        </Row>
                    </Card> 

                  
                </Row>
                <Row>
                    <Col span={18}>
                        <Tag>Tag 1</Tag>
                        <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
                        <Tag closable onClose={this.log}>Tag 2</Tag>
                        <Tag closable onClose={this.preventDefault}>Prevent Default</Tag>
                    </Col>
                    <Col span={6}>
                        <Button 
                            shape="circle"
                            type="primary" >Primary 1</Button>
                    </Col>
                        

                </Row>
                
            </>
        )
    }
}

export default FilterSingleMarkContainer;
