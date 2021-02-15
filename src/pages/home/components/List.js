import { Link } from 'react-router-dom'
import React, { PureComponent } from 'react'
import { ListItem, ListInfo, LoadMore } from './../style'
import { connect } from 'react-redux'
import { getMoreList } from './../store/actionCreators'
import huge from './../../../statics/imgs/胡歌.png'
class List extends PureComponent {
    render() {
        const { list, getMoreList, page } = this.props;
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <Link key={item.get("id")} to={"/detail/" + item.get("id")}>

                                <ListItem >
                                    <img alt="" className='pic' src={huge} />
                                    <ListInfo>
                                        <h3 className='title'>{item.get("title")} </h3>
                                        <p className='desc'>{item.get("desc")}</p>
                                    </ListInfo>

                                </ListItem>
                            </Link>

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