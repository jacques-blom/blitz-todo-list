import {sleep} from 'app/core/sleep'
import db from 'db'

type InsertTaskInput = {
    label: string
}

export default async function insertTask(input: InsertTaskInput) {
    await sleep()

    await db.task.create({
        data: {
            label: input.label,
        },
    })
}
