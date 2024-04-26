import { useEffect, useState } from "react"

function App() {
  const emojis = [
    {
      id: 'frown',
      emoji: "🙁",
    },
    {
      id: 'mid',
      emoji: "😐"
    },
    {
      id: 'smile',
      emoji: "🙂"
    },
  ]

  const SelectRandEmoji = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const handleCopy = (e) => {
    if (e.target.innerText !== selectedEmoji.emoji) {
      alert("Wrong Emoji")
    } else if (e.timestamp > 5000 ) {
      alert("Too Slow, Reset & Try Again!")
    } else {
      alert("Winner")
    }
  }

  const handelReset = () => {
    window.location.reload()
  }

  const selectedEmoji = SelectRandEmoji(emojis) 

  return (
    <>
      <h1 className="target-emoji" >{selectedEmoji.emoji}</h1>
      <p className="target">Copy this Emoji</p>
      <ul className="options-emoji">
        {emojis.map(({id, emoji}) => {
          return (
            <li key={id} onCopy={handleCopy}>
              {emoji}
            </li>
          )
        })}
        <button onClick={handelReset}>Reset</button>
      </ul>
    </>
  )
}

export default App