import type {Meta} from '@storybook/react';
import React, {useMemo, useState} from "react";

const meta: Meta = {
    title: "useMemo demo"
};

export default meta;

export const DifficultCountingExample = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;

        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }

        return tempResultA;
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <>
            <input type="number" value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input type="number" value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>{resultA}</div>
            <div>{resultB}</div>
        </>
    )
};


const NewMessageCounterSecrettt = (props: {count: number}) => {
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
const NewMessageCounter = React.memo(NewMessageCounterSecrettt);

export const HelpToReactMemo = () => {

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Aidar", "Agbar", "Azim"]);

    const newUsers = useMemo(() => {
        const arr = users.filter(u => u.toLowerCase().indexOf("r") > -1);
        return arr;
    }, [users])

    const addUser = () => {
        setUsers([...users, "Baizak"]);
    }


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={counter} />
            <Users users={newUsers} />
        </>
    )
}