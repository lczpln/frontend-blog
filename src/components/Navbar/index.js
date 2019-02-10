import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<header>
				<div className="center-navbar-div" id="header">
					<div className="left-navbar-div" onClick={() => this.props.history.push('/')}>
						<img src={require('../../images/blog.svg')} width={30} alt="blog_logo"/>
						<h1>Blog</h1>
					</div>
					<div className="right-navbar-div">
						<ul>
							<li>
								<NavLink activeClassName="navlink-active-class" exact to="/">All Posts</NavLink>
							</li>
							<li>
								<NavLink to="/post" onClick={(e) => e.preventDefault()} activeClassName="navlink-active-class">Post</NavLink>
							</li>
							<li>
								<NavLink activeClassName="navlink-active-class" to="/create">Create</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}
