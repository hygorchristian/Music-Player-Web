import express from 'express'
// @ts-ignore
import jsonGraphqlExpress from 'json-graphql-server'
import data from './db'

const PORT = 3000
const app = express()

app.use('/graphql', jsonGraphqlExpress(data))
app.listen(PORT)
