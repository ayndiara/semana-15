import Header from "../components/Header";
import sobre from '../assets/sobre.png';
import { GraduationCap } from 'phosphor-react';
import styles from '../styles/pages/sobre.module.css';

const Sobre = () => {
  return (
    <>
      <Header 
        title="Descubra mais sobre a Ayndiara" 
        image={sobre} 
      />
      <div className={styles.sobreContainer}>
        <GraduationCap size={150} color="#E09132" weight="thin" className={styles.graduationCap} /> 
        <h1 className={styles.cardTitle}>Olá, meu nome é Ayndiara Miranda</h1>
        <p className={styles.cardDescription}>
          Sou de Feira de Santana, Bahia. Em agosto de 2022, realizei um dos meus maiores sonhos ao me formar em Direito.
          Uma das coisas que mais me encanta são séries coreanas. Essas séries me transportam para universos fascinantes, onde encontro personagens inspiradores e histórias cheias de lições valiosas. 
          Iniciei minha migração de carreira em setembro de 2022 acredito que a tecnologia tem a capacidade de nos transformar e superar obstáculos, e é isso que eu desejo transmitir às pessoas que cruzam o meu caminho.
          Tenho um cachorro chamado Zeus, ele é mais do que um animal de estimação, é um companheiro leal e amoroso, sua presença me traz alegria e conforto nos momentos mais difíceis.
           Minha maior paixão está em ajudar mulheres negras e periféricas. Eu acredito que a igualdade de direitos e oportunidades é um direito de todas as pessoas, e é inaceitável que certos grupos sejam marginalizados e discriminados. Quero ser uma voz ativa nessa luta, trabalhando incansavelmente para promover a equidade e empoderamento dessas mulheres.
          Minha formação jurídica é uma ferramenta poderosa nessa jornada. Através do conhecimento juridico, busco defender os direitos daqueles que foram injustiçados e trabalhar para que a justiça seja realmente alcançada. Meu objetivo é capacitar e empoderar as mulheres negras e periféricas, garantindo que elas tenham voz e sejam ouvidas.
          Meu nome é Ayndiara, e estou determinada a ser uma agente de mudança. Acredito que juntos podemos criar um mundo mais justo e igualitário, onde todas as pessoas tenham as mesmas oportunidades e possam alcançar seus sonhos.
        </p>
      </div>
    </>
  );
}

export default Sobre;


