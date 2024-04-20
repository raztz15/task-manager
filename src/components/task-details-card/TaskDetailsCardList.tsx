import './TaskDetailsCardList.css'
import { Task, TaskDetailsCard, TaskDetailsCardProps } from './TaskDetailsCard'
import { useEffect, useState } from 'react';

interface TaskDetailsCardListProps {
    userId: number;
}

export const TaskDetailsCardList = ({ userId }: TaskDetailsCardListProps) => {

    const [userTasks, setUserTasks] = useState<Array<Task>>([])

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
                const tasks = await res.json()
                setUserTasks(tasks)
            } catch (error) {
                console.error("coluldn't load tasks ===> ", error)
            }
        }

        fetchTasks()
    }, [])

    const completeTask = (id: number) => {
        setUserTasks(prevState => prevState.map(task => {
            if (task.id === id) {
                const updatedTask = { ...task, completed: true };
                localStorage.setItem(`${task.id}`, JSON.stringify(updatedTask));
                return updatedTask;
            }
            return task;
        }))
    }

    return (
        <div className='task-details-cards-list--container'>
            <div className='number-of-users-tasks'>
                Number Of User Tasks : {userTasks.length}
            </div>
            {userTasks.map(task => <div key={task.id}><TaskDetailsCard task={task} completeTask={completeTask} /></div>)}
        </div>
    )
}
