import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	state = {
		collapsed: false,
	}

	collapseNavbar = () => {
		this.setState({ collapsed: !this.state.collapsed });
	}

	selectUserComponent = (classname) => {
		return (
			<ul className={classname}>
				<li>
					<NavLink activeClassName="navlink-active-class" onClick={this.collapseNavbar} exact to="/">All Posts</NavLink>
				</li>
				<li>
					<NavLink to="/post" onClick={(e) => e.preventDefault()} activeClassName="navlink-active-class">Post</NavLink>
				</li>
				<li>
					<NavLink activeClassName="navlink-active-class" onClick={this.collapseNavbar} to="/create">Create</NavLink>
				</li>
			</ul>
		);
	}

	render() {
		return (
			<header>
				<div className="center-navbar-div" id="header">
					<div className="left-navbar-div" onClick={() => this.props.history.push('/')}>
						<img src={require('../../images/blog.svg')} width={30} alt="blog_logo" />
						<h1>Blog</h1>
					</div>
					<div className="right-navbar-div">
						{this.state.collapsed
							? <i className="fas fa-times" id="close" onClick={this.collapseNavbar}></i>
							: <i className="fas fa-bars" id="hamburgger" onClick={this.collapseNavbar}></i>

						}
						{this.selectUserComponent("desktop")}
						{this.state.collapsed
							? this.selectUserComponent("mobile")
							: null
						}
					</div>
				</div>
			</header>
		);
	}
}
