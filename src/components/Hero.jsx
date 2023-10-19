import { photo } from '../assets/img';

const Hero = () => {
  return (
    <section className="hero-section container">
      <div className="hero-info">
        <h1 className="hero-title">
          Hi, I am John, <br /> Creative Technologist
        </h1>
        <p className="hero-text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=18ixQU7hKclWYc0SOa54Ee-BhiG0BdObk"
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
      <img
        src={photo}
        alt="a photo of John"
        width={170}
        className="hero-photo"
      />
    </section>
  );
};

export default Hero;
