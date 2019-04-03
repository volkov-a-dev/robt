import React, { Component } from "react";

import { Select } from "antd";

const Option = Select.Option;

class SelectCs extends Component {
    render() {
        // console.log('select components ',this.props)
        let options;
    
        if (this.props.options && this.props.options.length > 0) {
            options = this.props.options.map((i, index) => {
                return (
                    <Option key={index} value={i.value}>{i.displayValue}</Option>
                )
            })
        }
        return (
            <Select
                showSearch
                style={{ width: 100 }}
                placeholder={this.props.placeholder}
                optionFilterProp="children"
                onChange={this.props.change}
                onFocus={this.props.focus}
                onBlur={this.props.blur}
                allowClear={true}
                disabled={this.props.disabled}
                filterOption={(input, option) =>
                option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
            >
                {options}
            </Select>
        )
    }
   
 
};

export default SelectCs;
