import React from 'react';
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
	Button
} from './style';

const Header = (props) => {
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
					in={props.focused}
					timeout={200}
					className="slide"
				>
					<NavSearch className={props.focused ? "focused" : ""}
						onClick={props.handleInputFocus} onBlur={props.handleInputBlur}></NavSearch>
				</CSSTransition>
				<i className={props.focused ? "focused iconfont" : "iconfont"}>&#xe614;</i>
			</SearchWrapper>
		</Nav>
		<Addition>
			<Button className='writting'>
				<i className="iconfont">&#xe615;</i>
					写文章
				</Button>
			<Button className='reg'>注册</Button>
		</Addition>
	</HeaderWrapper>
	)

}

const mapStateToProps = (state) => {
	return {
		focused: state.header.get("focused")
	}
}
const mapDispathToProps = (dispatch) => {
	return {
		handleInputFocus() {
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