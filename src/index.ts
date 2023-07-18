import express, {Request, Response} from 'express'
const app = express()
const port = 3000

const user = {
    id: '123qwer',
    name: 'Ivan',
    age: 25
}

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!!')
})

app.get('/user', (req: Request, res: Response) => {
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})