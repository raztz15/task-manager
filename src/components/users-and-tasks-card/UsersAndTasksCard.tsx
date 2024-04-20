import './UsersAndTasksCard.css'
import { useState } from 'react'
import { TaskDetailsCardList } from '../task-details-card/TaskDetailsCardList'
import { TaskDetailsCardProps } from '../task-details-card/TaskDetailsCard'

export interface UsersAndTasksCardProps {
    id: number
    name: string
    email: string
}

export const UsersAndTasksCard = ({ id, name, email }: UsersAndTasksCardProps) => {

    const [isTaskDetailsOpen, setisTaskDetailsOpen] = useState<boolean>(false)

    return (
        <div className='user-and-tasks-card-container'>
            <div className='users-details'>
                <div>Id : {id}</div>
                <div>Name : {name}</div>
                <div>Email : {email}</div>
            </div>
            <div className='users-task-button'>
                <button onClick={() => setisTaskDetailsOpen(prev => !prev)}>{`${name} Tasks`}</button>
            </div>
            <div className='users-tasks-details'>
                {isTaskDetailsOpen && <TaskDetailsCardList userId={id} />}
            </div>
        </div>
    )
}
