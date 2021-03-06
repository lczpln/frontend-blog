import React, { Component } from 'react';
import api from '../../services/api';


export default class CreatePost extends Component {
  state = {
    title: '',
    content: '',
    url: '',
    author: '',
  }

  createPost = async () => {
    const { title, content, url, author } = this.state;

    if (author === '') await this.setState({ author: "admin" });

    if (!title.length || !content.length || !url.length) return alert('Verifique os campos vazios');

    const data = { "title": title, "content": content, "url": url, "author": author }
    try {
      const response = await api.post('/posts', data);

      if (!response) throw new Error(`Um post com essa url já foi criado.`);

        await this.setState({
          title: '',
          content: '',
          url: '',
          author: '',
        });

        await alert('Post criado com sucesso!');
        return this.props.history.push('/');
    } catch (e) {
      alert(`Erro ao criar novo post => ${e}`);
    }
  }

  render() {
    return (
      <div className="center-createpost-div">
        <label>Post Title</label>
        <input
          placeholder="put a title for your post"
          onChange={(e) => { this.setState({ title: e.target.value }) }}
        />
        <label>Post Content</label>
        <textarea
          id="post-content"
          type="text"
          placeholder="put your post body"
          onChange={(e) => { this.setState({ content: e.target.value }) }}
        />
        <label>Post Url</label>
        <input
          placeholder="put url like: post-url-here"
          onChange={(e) => { this.setState({ url: e.target.value }) }}
        />
        <label>Post Author</label>
        <input
          placeholder="default: admin"
          onChange={(e) => { this.setState({ author: e.target.value }) }}
        />
        <button onClick={this.createPost}>Criar novo post</button>
      </div>
    );
  }
}
