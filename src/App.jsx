import { Header } from './components/header';
import {Post} from './Post';
import style from '../src/app.module.css'

import './global.css'
import { Sidebar } from './components/sidebar';

export function App() {
  return (
    <div>
      <Header />


      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post  
            author="Diego Fernandes" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deserunt distinctio exercitationem voluptates nisi assumenda nulla dolores magni odio voluptatum ut error quisquam similique maxime, natus eius possimus ad hic." 
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />

        </main>
      </div>
    </div>
  )
}

