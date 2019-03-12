import React from 'react';

const formSearch = (props) => {
    return (
        <form className="form" id="addItemForm">
            <input
                type="text"
                className="input"
                id="addInput"
                placeholder="Something that needs ot be done..."
            />
            {/* <button className="button is-info" onClick={this.addItem}>
            Add Item
            </button> */}
            <button className="button is-info">
            Add Item
            </button>
        </form>
    )
}

export default formSearch;