import React, { Component } from 'react';
import './style.css'
//import axios from 'axios'
//import Mock from 'mockjs'
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import axios from 'axios'
import store from './store/index'
import { getInitList, getInputChangeAction, getadd_todo_item, getdeleteitem, initListAction } from './store/actionCreators'
import { ADD_TODO_ITEM, DELETE_ITEM } from '../src/store/actionTypes'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputValue} onChange={this.props.handleInputChange} />
                    <button onClick={this.props.handleCkick}></button>
                    <ul>
                        {
                            this.props.list.map((item, index) => {
                                return (<li key={index} onClick={this.props.delete_item.bind(this, index)}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            // console.log("]]]", e.target.value)
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        handleCkick() {
            const action = {
                type: ADD_TODO_ITEM
            }
            dispatch(action)
        },
        delete_item(index) {
            console.log(index)
            const action = {
                type: DELETE_ITEM,
                value: index
            }
            dispatch(action)

            //    this.setstate(store.getstate())
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);