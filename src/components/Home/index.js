import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = (props) => (
  <div className="center-content-div">
    {props.posts.map(post => (
      <article className="post-article" key={post._id}>
        <h2>{post.title}</h2>
        <span className="post-article-content">{post.content}</span>
        <NavLink onClick={() => window.scrollTo(0, 0)} to={`/post/${post.url}`}>Ver mais</NavLink>
      </article>
    ))}
  </div>
)

export default Home;
