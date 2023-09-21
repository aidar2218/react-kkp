import type {Meta} from '@storybook/react';
import React, {useState} from "react";

const meta: Meta = {
    title: "React.memo demo"
};

export default meta;

const NewMessageCounterSecret = (props: {count: number}) => {
    console.log("count")
    return <div>{props.count}</div>
}

const SecretUsers = (props: {users: string[]}) => {
    console.log("users")
    return (
        <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
    )
}

const Users = React.memo(SecretUsers);
const NewMessageCounter = React.memo(NewMessageCounterSecret);

export const Example1 = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Aidar", "Agbar", "Azim"]);

    const addUser = () => {
        setUsers([...users, "Baizak"]);
    }


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={counter} />
            <Users users={users} />
        </>
    )
}