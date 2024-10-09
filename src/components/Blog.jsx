// src/components/Blog.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Real Estate',
    description: 'Discover what’s next in the ever-evolving real estate market...',
    date: 'October 3, 2024',
  },
  {
    id: 2,
    title: 'How to Invest in Real Estate Wisely',
    description: 'Learn the top strategies for real estate investments in 2024...',
    date: 'September 20, 2024',
  },
  {
    id: 3,
    title: 'Top 10 Luxury Properties in Kenya',
    description: 'A look at the most luxurious homes in Kenya you should know about...',
    date: 'August 15, 2024',
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <h2>Our Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.description}</p>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
