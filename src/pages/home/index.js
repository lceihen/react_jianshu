import React, { PureComponent } from 'react'
import {
    HomeWrapper,
    HomeLeft, HomeRight, BackTop,
    Download, DownInfo, Description, Title
} from './style'
import { getHomeInfo, ChangeScrollTopShow } from './store/actionCreators'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import App_img from './../../statics/imgs/app.png'

import { connect } from 'react-redux'
class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft><img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Download >
                        <img src={App_img} />
                        <DownInfo>
                            <Title>{'下载简书手机APP >'} </Title>
                            <Description>随时随地发现和创作内容</Description>
                        </DownInfo>
                    </Download>
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop} >^</BackTop> : null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
        window.addEventListener("scroll", this.props.listenScroll)

    }
}
const mapDispatch = (dispatch) => ({
    changeHomeData() {

        const action = getHomeInfo()

        dispatch(action)
    },
    listenScroll() {
        let display = false;
        window.scrollY > 300 ? display = true : display = false
        const action = ChangeScrollTopShow(display);
        dispatch(action)
    }

})
const mapToProps = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})
export default connect(mapToProps, mapDispatch)(Home);