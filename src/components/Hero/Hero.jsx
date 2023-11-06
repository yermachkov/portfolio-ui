import { photo } from '../../assets/img';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={`${styles.hero_section} container`}>
      <div className={styles.hero_info}>
        <h1 className={styles.hero_title}>
          Hi, I am John, <br /> Creative Technologist
        </h1>
        <p className={styles.hero_text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=18ixQU7hKclWYc0SOa54Ee-BhiG0BdObk"
          className={styles.resume_link}
        >
          Download Resume
        </a>
      </div>
      <img
        src={photo}
        alt="a photo of John"
        width={170}
        className={styles.hero_photo}
      />
    </section>
  );
};

export default Hero;
