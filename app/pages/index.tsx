import {Input} from 'app/core/components/Input'
import {Task} from 'app/core/components/Task'
import Layout from 'app/core/layouts/Layout'
import insertTask from 'app/tasks/mutations/insertTask'
import getTasks from 'app/tasks/queries/getTasks'
import {BlitzPage, invalidateQuery, useMutation, useQuery} from 'blitz'
import {useState} from 'react'

const Tasks: BlitzPage = () => {
    const [newTaskLabel, setNewTaskLabel] = useState('')
    const [insertTaskMutation, {isLoading}] = useMutation(insertTask, {
        onSuccess: async () => {
            await invalidateQuery(getTasks)
        },
    })
    const [tasks] = useQuery(getTasks, undefined)

    return (
        <div>
            {tasks.map((task) => (
                <Task
                    task={{label: task.label, checked: task.checked}}
                    onClick={() => {
                        console.log(`TODO: Toggle the task's checked state`)
                    }}
                />
            ))}
            <Input
                value={newTaskLabel}
                onChange={setNewTaskLabel}
                onPressEnter={async () => {
                    await insertTaskMutation({label: newTaskLabel})
                    setNewTaskLabel('')
                }}
                isLoading={isLoading}
            />
        </div>
    )
}

Tasks.getLayout = (page) => <Layout title="Taskhero">{page}</Layout>

export default Tasks
