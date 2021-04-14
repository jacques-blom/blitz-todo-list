import {Input} from 'app/core/components/Input'
import {Task} from 'app/core/components/Task'
import Layout from 'app/core/layouts/Layout'
import {BlitzPage} from 'blitz'
import {useState} from 'react'

const Tasks: BlitzPage = () => {
    const [newTaskLabel, setNewTaskLabel] = useState('')

    return (
        <div>
            <Task
                task={{label: 'Example', checked: true}}
                onClick={() => {
                    console.log(`TODO: Toggle the task's checked state`)
                }}
            />
            <Input
                value={newTaskLabel}
                onChange={setNewTaskLabel}
                onPressEnter={async () => {
                    console.log('TODO: Insert new task with label: ', newTaskLabel)
                    setNewTaskLabel('')
                }}
            />
        </div>
    )
}

Tasks.getLayout = (page) => <Layout title="Taskhero">{page}</Layout>

export default Tasks
