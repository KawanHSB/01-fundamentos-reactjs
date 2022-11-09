import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/34041251?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Kawan</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At facilis delectus
                     reiciendis fugiat quo qui neque consectetur vel magnam perspiciatis quos illo, 
                     dolore distinctio ad veritatis cupiditate officiis doloremque atque?</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe seu comentario"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}