import { useEffect, useState } from 'react'
import './TaskDetailsCard.css'

export interface TaskDetailsCardProps {
    task: Task
    completeTask: (id: number) => void
}

export type Task = {
    id: number
    title: string
    completed: boolean
}

export const TaskDetailsCard = ({ task, completeTask }: TaskDetailsCardProps) => {

    const [cachedTask, setCachedTask] = useState<Task>(task)

    useEffect(() => {
        const res: Task | null = JSON.parse(localStorage.getItem(`${task.id}`)!)
        res && setCachedTask(res)
    }, [task.completed])

    return (
        <div className='task-details-card--container' style={{ borderColor: cachedTask.completed ? 'green' : 'rgb(201, 119, 19) ' }}>
            <h2>Task Details</h2>
            <div className='task-details'>
                <div>Id : {cachedTask.id}</div>
                <div>Description : {cachedTask.title}</div>
                <div>Completed : {cachedTask.completed.toString()}</div>
                <button onClick={() => completeTask(cachedTask.id)} style={{ visibility: cachedTask.completed ? 'hidden' : 'visible' }}>Complete Task</button>
            </div>
        </div>
    )
}
