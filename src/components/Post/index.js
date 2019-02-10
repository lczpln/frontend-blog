import React from 'react';

export default class Post extends React.Component {

	async componentDidMount() {
		await this.props.loadPosts();
	}

	render() {
		return (
			<div className="center-content-div">
				{this.props.posts.map((post, index) => (
					<React.Fragment key={post._id}>
						{
							post.url === this.props.match.params.url ?
								<React.Fragment>
									<div className="post-title">
										<h1>{post.title}</h1>
										<span>Criado por: {post.author}</span>
										<span>Data: {post.createdAt.split("T")[0]}</span>
										<span>Hora: {post.createdAt.split(".")[0].split("T")[1]}</span>
									</div>
									<div className="post-content-div">{post.content}</div>
								</React.Fragment>
								: null
						}
					</React.Fragment>
				))}
			</div>
		);
	}
}
