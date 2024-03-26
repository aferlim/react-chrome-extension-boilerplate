import React, { useEffect } from 'react'
import './popup.css'

const handleInput = (e) => {
  e.preventDefault()

  const name = e.target[0].value

  chrome.storage.sync.set({ name }, () => {
    console.log(`name is set to ${name}`)
  })
}

const Popup = () => {
  useEffect(() => {
    chrome.storage.sync.get(['name'], (res) => {
      console.log(`get ${res.name}`)
    })
  }, [])

  return (
    <div className="h-screen">
      <form className="flex justify-center items-center py-44" onSubmit={handleInput}>
        <input type="text" className="bg-gray ring-black px-4 py-4" placeholder="Enter a word" />
        <button className="py-4 px-5 bg-indigo-500 text-white m-2">Submit</button>
      </form>
    </div>
  )
}

export default Popup
