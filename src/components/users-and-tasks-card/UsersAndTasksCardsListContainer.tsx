import React, { useEffect, useState } from 'react'
import { UsersAndTasksCardsList } from './UsersAndTasksCardsList'
import { UsersAndTasksCardProps } from './UsersAndTasksCard'

export const UsersAndTasksCardsListContainer = () => {

    const [users, setUsers] = useState<Array<UsersAndTasksCardProps>>([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error("couldn't load users ===> ", error)
            }

        }

        fetchUsers();
    }, [])

    return (
        <UsersAndTasksCardsList users={users} />
    )
}
