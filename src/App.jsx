import { useState } from 'react'

import "./global.css"
import styles from "./app.module.css"
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
      id: 1,
      author: {
          avatarUrl: "https://github.com/diego3g.png",
          name: "Diego Fernandes",
          role: "CTO @ Rocketseat"
      },
      content: [
          {type: "paragraph", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis recusandae hic porro nihil similique animi eos laborum iusto, alias commodi aliquid vero aliquam nam labore ipsa unde perferendis. Explicabo, error?"}
      ],
      publishedAt: new Date("2022-11-03 20:00:00"),
  },
  {
      id: 2,
      author: {
          avatarUrl: "https://github.com/diego3g.png",
          name: "teste",
          role: "tester"
      },
      content: [
          {type: "paragraph", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis recusandae hic porro nihil similique animi eos laborum iusto, alias commodi aliquid vero aliquam nam labore ipsa unde perferendis. Explicabo, error?"}
      ],
      publishedAt: new Date("2022-11-10 20:00:00"),
  },
]

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
