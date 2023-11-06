import portfolio from '../../assets/works';
import ProjectCard from './ProjectCard';

import styles from '../Works/Works.module.scss';

const Works = () => {
  return (
    <section
      className={`container ${styles.works_section}`}
      id="works"
    >
      <h2 className={styles.section_title}>Featured works</h2>
      <ul className={styles.works_list}>
        {portfolio.map((project) => (
          <li
            key={project.id}
            className={styles.works_item}
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
