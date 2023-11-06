import styles from './ProjectCard.module.scss';

const ProjectCard = ({ project: { img, title, date, type, info } }) => {
  return (
    <div className={styles.card_wrap}>
      <img
        src={img}
        alt="project image"
        width={246}
        className={styles.project_image}
      />
      <div>
        <h3 className={styles.project_title}>{title}</h3>
        <div className={styles.info_wrap}>
          <p className={styles.project_date}>{date}</p>
          <p className={styles.project_type}>{type}</p>
        </div>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
