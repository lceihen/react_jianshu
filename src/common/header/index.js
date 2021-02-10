import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	Addition,
	Button,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';

class Header extends Component {
	render() {
		return (<HeaderWrapper>
			<Logo />
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载App</NavItem>
				<NavItem className='right'>登陆</NavItem>
				<NavItem className='right'>
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchWrapper>
					<CSSTransition
						in={this.props.focused}
						timeout={200}
						className="slide"
					>
						<NavSearch className={this.props.focused ? "focused" : ""}
							onClick={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}></NavSearch>
					</CSSTransition>
					<i className={this.props.focused ? "focused iconfont" : "iconfont"}>&#xe614;</i>
					<SearchInfo className={this.props.focused ? "" : "SearchInfo_display "}>
						<SearchInfoTitle>热门搜索
						<SearchInfoSwitch>
								换一批
						</SearchInfoSwitch>
						</SearchInfoTitle>
						<SearchInfoList>
							{
								this.props.list.map((item, index) => {
									return <SearchInfoItem key={index}>{item}</SearchInfoItem>
								})
							}


						</SearchInfoList>
					</SearchInfo>
				</SearchWrapper>
			</Nav>
			<Addition>
				<Button className='writting'>
					<i className="iconfont">&#xe615;</i>
					写文章
				</Button>
				<Button className='reg'>注册</Button>
			</Addition>
		</HeaderWrapper >
		)
	}


}

const mapStateToProps = (state) => {
	return {
		focused: state.get("header").get("focused"),
		list: state.getIn(['header', 'list'])
	}
}
const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
			dispatch(actionCreators.getList());
			const action = actionCreators.searchFocus();
			dispatch(action)
		},
		handleInputBlur() {
			const action = actionCreators.search_blur();
			dispatch(action)
		}
	}
}
export default connect(mapStateToProps, mapDispathToProps)(Header);