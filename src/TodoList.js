import React, { Component } from 'react';
import './style.css'
//import axios from 'axios'
//import Mock from 'mockjs'
import 'antd/dist/antd.css';
import axios from 'axios'
import store from './store/index'
import { getInputChangeAction, getadd_todo_item, getdeleteitem, initListAction } from './actionCreators'
//import { ADD_TODO_ITEM, DELETE_ITEM } from './actionTypes'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        //    console.log(store.getState())
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.deleteHandle = this.deleteHandle.bind(this)

    }
    render() {
        return <TodoListUI inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            list={this.state.list}
            deleteHandle={this.deleteHandle}
        />

    }
    handleInputChange(e) {
        // console.log(e.target.value)
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtnClick() {
        const action = getadd_todo_item()
        store.dispatch(action)
    }
    handleStoreChange() {

        this.setState(store.getState())
    }
    deleteHandle(index) {
        const action = getdeleteitem(index)
        store.dispatch(action)
    }
    componentDidMount() {
        store.subscribe(this.handleStoreChange);
        axios.get('/mock.json').then((res) => {
            let data = res.data;
            let action = initListAction(data)
            store.dispatch(action)
            console.log(res)

        }).catch((err) => {
            console.log(err)
        })

    }
}
export default TodoList;