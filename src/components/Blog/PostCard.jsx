import styles from './PostCard.module.scss';

const PostCard = ({ post: { title, date, tech, info } }) => {
  return (
    <a
      href=""
      className={styles.post_link}
    >
      <h2 className={styles.post_title}>{title}</h2>
      <div className={styles.post_wrap}>
        <p>{date} &nbsp; |</p>
        <p>&nbsp; {tech}</p>
      </div>
      <p>{info}</p>
    </a>
  );
};

export default PostCard;
