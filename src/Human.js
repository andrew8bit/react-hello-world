import Player from './Player';

// functional component
function Human(props) {
    return (
        // jsx syntax
        <div>
            <h1>{props.name}</h1>
            <p>Is located in {props.location}</p>
            <Player position="Small Forward" />
        </div>
    )
};

export default Human; 
