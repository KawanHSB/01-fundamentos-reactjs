import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.Comment}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/34041251?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Kawan</strong>
                            <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, 
                        quisquam corporis. Veniam nihil quidem reiciendis labore, asperiores 
                        deserunt atque, quae illo velit harum cupiditate architecto culpa adipisci omnis dolores enim?</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
