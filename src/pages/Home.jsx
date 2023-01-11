import React, { useState, useEffect } from 'react'

function Home() {
  const [message, setMessage] = useState(null)
  
  async function getData() {
    const res = await fetch("/api")
    const data = await res.json()
    setMessage(data.message) 
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="Home">
      {message ? message : 'Loading' }
    </div>
  )
}

export default Home