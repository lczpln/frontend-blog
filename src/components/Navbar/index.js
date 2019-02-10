import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return (
			<header>
				<div className="center-navbar-div">
					<div className="left-navbar-div" onClick={() => this.props.history.push('/')}>
						<img src={require('../../images/blog.svg')} width={30} alt="blog_logo"/>
						<h1>Blog</h1>
					</div>
					<div className="right-navbar-div">
						<ul>
							<li>
								<NavLink to="/posts">Posts</NavLink>
							</li>
							<li>
								<NavLink to="/posts">Posts</NavLink>
							</li>
							<li>
								<NavLink to="/posts">Posts</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
}
