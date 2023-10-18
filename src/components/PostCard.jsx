const PostCard = ({ post: { title, date, tech, info } }) => {
  return (
    <>
      <a
        href=""
        className="post-link"
      >
        <h2 className="post-title">{title}</h2>
        <div className="post-wrap">
          <p>{date} &nbsp; |</p>
          <p>&nbsp; {tech}</p>
        </div>
        <p>{info}</p>
      </a>
    </>
  );
};

export default PostCard;
