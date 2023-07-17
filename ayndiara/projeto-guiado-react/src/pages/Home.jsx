import React from 'react';
import Header from "../components/Header";
import { AppStoreLogo, BracketsCurly, AddressBook } from 'phosphor-react';
import home from '../assets/home.png';
import styles from '../styles/pages/home.module.css';

const Home = () => {
  return (
    <>
      <Header title="Site da Ayndiara" image={home} />
      
      <div className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <AppStoreLogo size={150} color="#E09132" weight="thin"/> 
          <h2 className={styles.cardTitle}>Vida</h2>
          <p className={styles.cardDescription}>Sobre formação acadêmica, o que mais gosto de assistir, curiosidades e objetivos.</p>
        </div>
  
        <div className={styles.cardContainer}>
          <BracketsCurly size={150} color="#E09132" weight="thin"/>
          <h2 className={styles.cardTitle}>Código</h2>
          <p className={styles.cardDescription}>Todos os projetos desenvolvidos durante  o curso de desenvolvimento front-end. </p>
        </div>
  
        <div className={styles.cardContainer}>
          <AddressBook size={150} color="#E09132" weight="thin"/>
          <h2 className={styles.cardTitle}>Contato</h2>
          <p className={styles.cardDescription}>O seu contato será bem-vindo, seja para tirar dúvidas ou entrevista de emprego. </p>
        </div>
      </div>
    </>
  );
};

export default Home;

