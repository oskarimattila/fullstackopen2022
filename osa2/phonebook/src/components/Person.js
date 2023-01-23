const Person = ({remove, name, number}) => {
    return (
        <li>
            {name} {number}
            <button onClick={remove}>Delete</button>
        </li>
    )
}
export default Person