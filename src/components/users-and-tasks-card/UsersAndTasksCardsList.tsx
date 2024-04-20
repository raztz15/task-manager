import './UsersAndTasksCardsList.css'
import { UsersAndTasksCard, UsersAndTasksCardProps } from "./UsersAndTasksCard"

interface IUsersAndTasksCardsListPorps {
    users: Array<UsersAndTasksCardProps>
}

export const UsersAndTasksCardsList = ({ users }: IUsersAndTasksCardsListPorps) => {

    return (
        <div className="users-and-tasks-cards-list--container">
            <h1>Users And Tasks</h1>
            {users.map(user => <div key={user.id}><UsersAndTasksCard {...user} /></div>)}
        </div>
    )
}
