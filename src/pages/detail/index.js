import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
import schoolpng from '../../statics/imgs/henshui_school.png'
import { connect } from 'react-redux'
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
}
const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})
const mapDispatch = () => ({

})
export default connect(mapState, mapDispatch)(Detail);