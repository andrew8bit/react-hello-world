// functional component
function Animal(props) {
    return (
        // jsx syntax
        <div>
            <h1>{props.name}</h1>
            <p>This is a {props.mammal}</p>
        </div>
    )
};

export default Animal; 