import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import portifolio from '../assets/portfolio.svg';
import styles from '../styles/pages/portifolio.module.css';

const Portifolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/ayndiara/repos')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Header
        title="Projetinhos da Ayndiara"
        image={portifolio}
        className={styles.container}
      />
      <h1 className={styles.title}>PORTIFÓLIO</h1>
      <ul className={styles.list}>
        {projects.map(project => (
          <li key={project.id} className={styles.item}>
            <div className={styles.card}>
              <img
                src={project.owner.avatar_url}
                alt="Project Owner"
                className={styles.cardImage}
              />
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardName}
              >
                {project.name}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Portifolio;

