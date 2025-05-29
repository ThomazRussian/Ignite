import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'




export function Sidebar () {
    return(
        <aside className={styles.sidebar}>
        <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=60&w=500&h=300&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className={styles.profile}>
            <img className={styles.avatar} src="https://github.com/thomazrussian.png"/>

            <strong>Thomaz Russian</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href='#'>
                <PencilLine size={20} />
                Edite Seu Perfil
            </a>

        </footer>
        </aside>
    );
}