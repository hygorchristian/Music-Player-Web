import cors from 'cors'
import express from 'express'
// @ts-ignore
import jsonGraphqlExpress from 'json-graphql-server'
import data from './db'

const PORT = 3002
const app = express()

app.use(cors())
app.use('/graphql', jsonGraphqlExpress(data))
app.listen(PORT)
