import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('index.html')
})

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the React Express Demo App.' })
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const server = await app.listen(3001)

console.log(`listening on http://localhost:3001`)