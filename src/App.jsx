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
      <div id="wrapper" className='flex justify-center items-center'>
        <div id="quote-box" className='p-10 font-montserrat bg-slate-200 w-4/5'>
          <div className='my-7'>
            <p id="text" className='text-xl'>{quote}</p>
            <p id="author" className='font-roboto float-right mx-8 text-lg italic'>- {author}</p>
          </div>
          <div className='flex justify-around mt-10 px-14'>
            <a href="twitter.com/intent/tweet" id='tweet-quote' target="_blank"><i className="fa fa-twitter text-4xl"></i></a>
            <button id="new-quote" onClick={handleClick} className='bg-emerald-300 p-2 rounded-lg font-medium hover:bg-emerald-400 transition-all ease-in duration-200'>New Quote</button>
          </div>
        </div>
      </div>
  )
}

export default App
