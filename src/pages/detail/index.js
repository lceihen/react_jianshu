import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import schoolpng from '../../statics/imgs/henshui_school.png'
import { connect } from 'react-redux'
import { get_detail_action } from './store/actionCreators'
class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}      <img alt="" src={schoolpng} /></Header>


                <Content dangerouslySetInnerHTML={{ __html: this.props.content }}>

                </Content>

            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.get_detail_info()
        this.props.getDetail(this.props.match.params.id)
    }
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
    get_detail_info() {
        const action = get_detail_action()
        dispatch(action)
    },
    getDetail(id) {
        dispatch(get_detail_action(id))
    }
})

export default connect(mapState, mapDispatch)(Detail);