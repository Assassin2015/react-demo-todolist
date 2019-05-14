import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    addItem() {
        this.setState({
            list: [...this.state.list, this.input.value]
        })
        this.input.value = ""
    }
    deleteItem(index) {
        const list = this.state.list;
        list.splice(index, 1);
        this.setState({list});
    }
    getItems() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem key={index} text={item} index={index} deleteChildItem={this.deleteItem}  />
                )
            })
        )
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input type="text" ref={(input) => {this.input = input}}/>
                    <button onClick={this.addItem}>add</button>
                </div>
                <ul>{this.getItems()}</ul>
            </Fragment>
        )
    }
}

export default TodoList;