// functional component
function Human(props) {
    return (
        // jsx syntax
        <div>
            <h1>{props.name}</h1>
            <p>Is located in {props.location}</p>
        </div>
    )
};

export default Human; 
