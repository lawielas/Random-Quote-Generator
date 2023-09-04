import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    fetch('https://api.quotable.io/quotes/random')
    .then(res => {
      return res.json()
    })
    .then((items) => {
      items.map((item) => {
        setQuote(item.content)
        setAuthor(item.author)
      })
    })
  }, [])
  

  const handleClick = () => {
    fetch('https://api.quotable.io/quotes/random')
    .then(res => {
      return res.json()
    })
    .then((items) => {
      items.map((item) => {
        setQuote(item.content)
        setAuthor(item.author)
      })
    })
  }

  return (
    <>
      <div id="wrapper">
        <div id="quote-box">
          <p id="text">{quote}</p>
          <p id="author">{author}</p>
          <button id="new-quote" onClick={handleClick}>New Quote</button>
        </div>
      </div>
    </>
  )
}

export default App
