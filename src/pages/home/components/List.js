import { fromJS } from 'immutable';
import React, { Component } from 'react'
import { ListItem, ListInfo, LoadMore } from './../style'
import { connect } from 'react-redux'
import { getMoreList } from './../store/actionCreators'
class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (

                            <ListItem key={item.get("id")}>
                                <img alt="" className='pic' src={item.get("imgUrl")} />
                                <ListInfo>
                                    <h3 className='title'>{item.get("title")} </h3>
                                    <p className='desc'>{item.get("desc")}</p>
                                </ListInfo>

                            </ListItem>


                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文章</LoadMore>

            </div>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
})
const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List);