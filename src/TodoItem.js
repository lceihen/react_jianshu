import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.del_li = this.del_li.bind(this)
    }
    render() {
        return (<div onClick={this.del_li}>{this.props.content}</div>)
    }
    del_li() {

        this.props.handleItemDelete(this.props.index)
    }
}
TodoItem.propsTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
TodoItem.defaultProps = {
    test: 'hello world',
}
export default TodoItem;