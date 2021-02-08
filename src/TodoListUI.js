import React from 'react'
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
            <div>

                <Input value={props.inputValue} placeholder="Basic usage" style={{ width: '300px' }}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List style={{ marginTop: '10px', width: '300px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => { props.deleteHandle(index) }}>{item}</List.Item>)} />

        </div>)
}
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//                 <div>

//                     <Input value={this.props.inputValue} placeholder="Basic usage" style={{ width: '300px' }}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                 </div>
//                 <List style={{ marginTop: '10px', width: '300px' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.deleteHandle(index) }}>{item}</List.Item>)} />

//             </div>
//         )
//     }
// }
export default TodoListUI;