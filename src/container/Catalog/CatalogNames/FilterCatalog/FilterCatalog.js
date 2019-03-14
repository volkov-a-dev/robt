import React, { Component } from 'react';
import Input from '../../../../components/UI/Input/Input';
import classes from './FilterCatalog.module.scss';

class FilterCatalog extends Component {
    state = {
        filterForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Brand'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
            },

            brand: {
                elementType: 'input',

            },

            deliveryMethod:  {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'faste', displayValue: 'Fasterst'},
                        {value: 'test', displayValue: 'Test 2'},
                        {value: 'test2', displayValue: 'Test 3'},
                    ]
                },
                value: 'faste',
                valid: true,
                validation: {},
            },

            // checkbox
        },
        formIsValid: false
    }

    
    render(){
        const formElementsArray = [];
        
        for (let key in this.state.filterForm) {
            formElementsArray.push({
                id: key,
                config: this.state.filterForm[key]
            })
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => {
                    return (
                        <Input 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            touched={formElement.config.touched}
                            changed={(event) => this.inputChangedHandler(event, formElement.id)}
                        />
                    )
                })}
                {/* <Button 
                    // disabled={!this.state.formIsValid}
                    btnType="Success" 
                    clicked={this.orderHandler}>Order</Button> */}
            </form>
        );

        return (
            <div className={classes["shema-filter"]}>filter wrap w
                <div className={classes["shema-filter__field"]}></div>
                {form}
            </div>
        )
    }
}

export default FilterCatalog;