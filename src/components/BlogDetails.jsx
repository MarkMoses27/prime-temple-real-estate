// src/components/BlogDetails.jsx
import { useParams, Link } from 'react-router-dom';
import './BlogDetails.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Real Estate',
    author: 'John Doe',
    date: 'October 3, 2024',
    heroImage: '/images/real-estate-future.jpg',
    content: `
      Real estate is changing rapidly, and it’s crucial to stay ahead of the curve.
      In this article, we’ll explore the key trends shaping the future of real estate:
      from the rise of smart homes to sustainable development.
      \n\n## The Role of Technology in Real Estate
      Technology has been a game-changer in real estate, from virtual tours to AI-driven recommendations.
      Smart homes and IoT are becoming central to home buying decisions.
      \n\n## Sustainable Development
      With climate change becoming a pressing issue, sustainable practices in construction are no longer optional.
      Buyers are looking for green homes with energy-efficient features.
    `,
    relatedPosts: [
      { id: 2, title: 'How to Invest in Real Estate Wisely', image: '/images/invest-real-estate.jpg' },
      { id: 3, title: 'Top 10 Luxury Properties in Kenya', image: '/images/luxury-kenya.jpg' }
    ]
  },
  {
    id: 2,
    title: 'How to Invest in Real Estate Wisely',
    author: 'Jane Smith',
    date: 'September 20, 2024',
    heroImage: '/images/invest-real-estate.jpg',
    content: `
      Real estate investment is one of the best ways to build wealth. 
      In this article, we'll cover strategies for investing wisely in real estate.
    `,
    relatedPosts: [
      { id: 1, title: 'The Future of Real Estate', image: '/images/real-estate-future.jpg' },
      { id: 3, title: 'Top 10 Luxury Properties in Kenya', image: '/images/luxury-kenya.jpg' }
    ]
  },
  {
    id: 3,
    title: 'Top 10 Luxury Properties in Kenya',
    author: 'Mark Lumumba',
    date: 'August 15, 2024',
    heroImage: '/images/luxury-kenya.jpg',
    content: `
      Explore the top 10 luxury properties across Kenya. From beachfront homes to penthouse suites, 
      these properties redefine luxury living.
    `,
    relatedPosts: [
      { id: 1, title: 'The Future of Real Estate', image: '/images/real-estate-future.jpg' },
      { id: 2, title: 'How to Invest in Real Estate Wisely', image: '/images/invest-real-estate.jpg' }
    ]
  }
];

const BlogDetails = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  return (
    <section className="blog-details">
      <div className="hero-image" style={{ backgroundImage: `url(${blogPost.heroImage})` }}>
        <div className="overlay">
          <h1>{blogPost.title}</h1>
          <p>by {blogPost.author} | {blogPost.date}</p>
        </div>
      </div>

      <div className="blog-content">
        <h2>Introduction</h2>
        <p>{blogPost.content}</p>

        <h2>Related Posts</h2>
        <div className="related-posts">
          {blogPost.relatedPosts.map((related) => (
            <Link to={`/blog/${related.id}`} key={related.id} className="related-post">
              <img src={related.image} alt={related.title} />
              <h3>{related.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      <Link to="/blog" className="back-link">← Back to Blog</Link>
    </section>
  );
};

export default BlogDetails;
