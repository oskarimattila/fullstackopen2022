const Person = ({remove, name, number}) => {
    return (
        <li>
            {name} {number}
            <button onClick={remove}>Delete</button>
        </li>
    )
}

// GIT havainnollistus
export default Person