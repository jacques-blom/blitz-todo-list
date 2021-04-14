import {Input} from 'app/core/components/Input'
import {Task} from 'app/core/components/Task'
import Layout from 'app/core/layouts/Layout'
import {BlitzPage} from 'blitz'
import {useState} from 'react'

const Tasks: BlitzPage = () => {
    const [newTask, setNewTask] = useState('')

    return (
        <div>
            <Task
                task={{id: 1, label: 'Example task', checked: false}}
                onClick={() => {
                    console.log("TODO: Toggle the task's checked state")
                }}
            />
            <Input
                value={newTask}
                onChange={setNewTask}
                onPressEnter={() => {
                    console.log('TODO: Insert task', newTask)
                    setNewTask('')
                }}
            />
        </div>
    )
}

Tasks.getLayout = (page) => <Layout title="Taskhero">{page}</Layout>

export default Tasks
