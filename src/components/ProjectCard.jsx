const ProjectCard = ({ project: { img, title, date, type, info } }) => {
  return (
    <div className="project-card-wrap">
      <img
        src={img}
        alt="project image"
        width={246}
        className="project-image"
      />
      <div>
        <h3 className="project-title">{title}</h3>
        <div className="project-info-wrap">
          <p className="project-date">{date}</p>
          <p className="project-type">{type}</p>
        </div>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
