import React, { Component } from 'react';
import './style.css'
//import axios from 'axios'
//import Mock from 'mockjs'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index'
import { getInputChangeAction, getadd_todo_item, getdeleteitem } from './actionCreators'
//import { ADD_TODO_ITEM, DELETE_ITEM } from './actionTypes'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        //    console.log(store.getState())
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)


    }
    render() {
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <div>

                    <Input placeholder="Basic usage" style={{ width: '300px' }}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List style={{ marginTop: '10px', width: '300px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (<List.Item onClick={this.deleteHandle.bind(this, index)}>{item}</List.Item>)} />

            </div>
        )
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

    }
}
export default TodoList;