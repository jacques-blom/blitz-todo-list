import db from 'db'

export default async function getTasks() {
    return db.task.findMany()
}
