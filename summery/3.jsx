// REATING A COMPONENT
const Message = () => {
    return <h1>Hello Wolrd</h1>
}

export default Message;
// RENDERING A LIST
const Component = () => {
    const items = ['a', 'b', 'c'];

    return (
        <ul>
            {items.map((item) => (
                <li key={item}></li>
            ))}
        </ul>
    );
};


// CONDITIONAL RENDERING
{ items.length === 0 ? 'a' : 'b' }
{ items.length === 0 && 'a' }





const { useState } = require("react")

// HANDLING EVENTS

<button onClick={ () => console.log('clicked') }></button>;

// DEFINING STATE
const [name, setName] = useState('');

// PROPS
interface Props1{
    name: string
}

const Component1 = ({name}: Props1) => {
    return <p>{name}</p>
}

// PASSING CHILDREN
interface Props2 {
    children: ReactNode
}

const Component2 = ({ children }:Props2) => {
    return <div>{children}</div>
}