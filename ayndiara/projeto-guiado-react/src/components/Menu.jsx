import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
        <li>
        <Link className={styles.menuLink} to="/">HOME</Link>
        </li>
        <li>
        <Link className={styles.menuLink} to="/sobre">SOBRE</Link>
        </li>
        <li>
        <Link className={styles.menuLink} to="/portifolio">PORTIFÓLIO</Link>
        </li>
        <li>
        <Link className={styles.menuLink} to="/contato">CONTATO</Link>
        </li>  
    </nav>
  )
}

export default Menu