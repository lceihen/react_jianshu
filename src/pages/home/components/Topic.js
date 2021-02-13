import React, { PureComponent } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'
class Topic extends PureComponent {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.list.map((item) => {
                        return (
                            <TopicItem key={item.get('imgUrl')}>
                                {/*  */}
                                <img className="topic-pic" src={item.get('imgUrl')} alt="" />{item.get('title')}

                            </TopicItem>
                        )
                    })
                }


            </TopicWrapper >
        )
    }
}
const mapStateToProp = (state) => ({
    list: state.get('home').get('topicList')
})
export default connect(mapStateToProp, null)(Topic);