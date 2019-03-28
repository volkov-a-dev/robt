import React, { Component } from 'react';
import Input from '../../../../components/UI/Input/Input';
import classes from './FilterCatalog.module.scss';

class FilterCatalog extends Component {
    state = {
        filterForm: {
            manufacturer: {
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                    title: 'Производитель',
                    description: '',
                    options: ['Samsung', 'Xiaomi', 'Apple', 'Huawei', 'Honor', 'Sony']
                },
            },
            operatingSystem: {
                elementType: 'input',
                elementConfig: {
                    type: 'checkbox',
                    title: 'Операционная система',
                    description: 'Название операционной системы (семейства операционных систем), установленной на смартфоне. Имеет набор стандартных функций и определяет интерфейс взаимодействия с телефоном, программные возможности смартфона, способы приобретения, хранения и использования данных и программ. Чем более распространенной и популярной является операционная система, тем больше программ разрабатывается под нее. На рынке постоянно происходит борьба операционных систем, а точнее, платформ и инфраструктур. В первом десятилетии XXI века основными конкурентами на рынке мобильных платформ являются Google (Android), Apple (iOS) и Microsoft (Windows Phone).',
                    options: ['Samsung', 'Xiaomi', 'Apple', 'Huawei', 'Honor', 'Sony']
                },
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