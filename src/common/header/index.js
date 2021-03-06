import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { Link } from 'react-router-dom'
import { login } from './../../pages/login/store/actionCreators'
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
//这里可以用解构赋值语句进行赋值，避免大规模写this.props
class Header extends Component {

	getListArea() {
		const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];

		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
						<SearchInfoSwitch
							onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
						>
							<i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe606;</i>
							换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}

	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, signout } = this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<Logo />
				</Link>



				<Nav>
					<Link to="/"><NavItem className='left active'>首页</NavItem>  </Link>
					<NavItem className='left' ><a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">下载App</a></NavItem>
					{login ? <NavItem onClick={signout} className='right'>退出</NavItem> : <Link to="/login"><NavItem className='right'>登录</NavItem></Link>}

					<NavItem className='right'>
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							></NavSearch>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
							&#xe642;
						</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className='writting'>
						<i className="iconfont">&#xe742;</i>
						写文章
					</Button>
					<Button className='reg'>注册</Button>
				</Addition>
			</HeaderWrapper>
		);
	}
	componentDidMount() {
		this.props.Initsign()
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
	}
}

const mapDispathToProps = (dispatch) => {
	return {
		Initsign() {
			if (localStorage.getItem("login")) {
				let account = JSON.parse(localStorage.getItem("login")).account;
				let password = JSON.parse(localStorage.getItem("login")).password;
				dispatch(login(account, password))
			}
		},
		signout() {

			dispatch(actionCreators.SignOut())
		},
		handleInputFocus(list) {

			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page, totalPage, spin) {


			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			} else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

			if (page < totalPage) {
				dispatch(actionCreators.changePage(page + 1));
			} else {
				dispatch(actionCreators.changePage(1));
			}
		}
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
