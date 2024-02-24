import { defineAsyncComponent } from 'vue'
import { MongoClient, ServerApiVersion } from 'mongodb'
import { resolve } from 'path'

const StartMongoDbClient = defineAsyncComponent(() => {
    return new Promise((resolve, reject) => {
        const client = new MongoClient(
            'mongodb+srv://0138:wlSEGVCulpkHrGig@vikapedia.scgpq1w.mongodb.net/?retryWrites=true&w=majority&appName=VIKAPEDIA',
            {
                serverApi: {
                    version: ServerApiVersion.v1,
                    strict: true,
                    deprecationErrors: true
                }
            }
        )
        try {
            connectMongoDbClient(client)
            testMongoDbConnection(client)
        } catch (error) {
            return reject(error)
        } finally {
            closeConnection(client)
        }
    })
})

function connectMongoDbClient(client: MongoClient): Promise<any> {
    return client
        .connect()
        .then(() => {
            return resolve('MongoDbClient: connecting...')
        })
        .catch((error) => {
            console.warn('MongoDbClient: an error occured during connection!')
            throw error
        })
}

function testMongoDbConnection(client: MongoClient): Promise<any> {
    return client
        .db('admin')
        .command({ ping: 1 })
        .then(() => {
            return resolve('MongoDbClient: connected!')
        })
        .catch((error) => {
            console.warn('MongoDbClient: an error occured during pinging!')
            throw error
        })
}

function closeConnection(client: MongoClient): Promise<any> {
    return client
        .close()
        .then(() => {
            return resolve('MonoDb: disconnected!')
        })
        .catch((error) => {
            console.warn('MongoDbClient: an error occured during disconnection!')
            throw error
        })
}
