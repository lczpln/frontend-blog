import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import socket from 'socket.io-client';

import api from './services/api';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Post from './components/Post';
import Posts from './components/Posts';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';
import Loading from './components/Loading';

class App extends Component {
	state = {
		posts: [],
		isLoading: false,
	}

	loadPosts = async () => {
		await this.setState({ isLoading: !this.state.loading })
		try {
			const response = await api.get('/posts');

			this.setState({ posts: response.data, isLoading: !this.state.isLoading })
		} catch (e) {
			alert('Conexão com a API mal sucedida.')
		}
	}

	async componentDidMount() {
		this.loadRealTime();
		this.loadPosts();
	}

	loadRealTime = () => {
		const io = socket('https://api-blog-lczpln.herokuapp.com/');

		io.on('newPost', data => {
			this.setState({ posts: [data, ...this.state.posts] })
		})
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<div className="App">
						{this.state.isLoading ? <Loading /> : null}
						<Route path="/" component={Navbar} />
						<Route
							exact path="/"
							render={(props) => <Home {...props} posts={this.state.posts} />}
						/>
						<Route
							path="/post/:url"
							render={(props) => <Post {...props}
							posts={this.state.posts}
							loadPosts={this.loadPosts} />}
						/>
						<Route path="/posts" component={Posts} />
						<Route path="/create" component={CreatePost} />
						<Footer />
					</div>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
