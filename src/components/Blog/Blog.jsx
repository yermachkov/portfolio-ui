import posts from '../../assets/posts';
import PostCard from './PostCard';

import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <section
      className={styles.blog_section}
      id="blog"
    >
      <div className="container">
        <div className={styles.blog_wrap}>
          <h2 className={styles.section_title}>Recent posts</h2>
          <a
            href="#"
            className={styles.all_posts_link}
          >
            View all
          </a>
        </div>

        <ul className={styles.post_list}>
          {posts.map((post) => (
            <li
              key={post.id}
              className={styles.post_item}
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
