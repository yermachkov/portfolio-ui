import portfolio from '../assets/works';
import ProjectCard from './ProjectCard';

const Works = () => {
  return (
    <section
      className="container works-section"
      id="works"
    >
      <h2 className="works-section-title">Featured works</h2>
      <ul className="works-list">
        {portfolio.map((project) => (
          <li
            key={project.id}
            className="works-item"
          >
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Works;
