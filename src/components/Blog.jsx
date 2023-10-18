import posts from '../assets/posts';
import PostCard from './PostCard';

const Blog = () => {
  return (
    <section
      className="blog-section"
      id="blog"
    >
      <div className="container">
        <div className="blog-wrap">
          <h2 className="blog-section-title">Recent posts</h2>
          <a
            href="#"
            className="link-to-posts"
          >
            View all
          </a>
        </div>

        <ul className="post-list">
          {posts.map((post) => (
            <li
              key={post.id}
              className="post-item"
            >
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
