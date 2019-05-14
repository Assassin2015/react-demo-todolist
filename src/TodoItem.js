import React, { Component, Fragment } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem() {
        const { index, deleteChildItem } = this.props;
        deleteChildItem(index);
    }
    render() {
        const { text } = this.props;
        return (
            <Fragment>
                <li onClick={this.deleteItem}>{text}</li>
            </Fragment>
        )
    }
}

export default TodoItem;