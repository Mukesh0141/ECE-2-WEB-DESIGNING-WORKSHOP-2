function StudentCard(props) {
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <p>Roll No: {props.rollNo}</p>
            <p>City: {props.city}</p>
        </div>
    );
}
export default StudentCard;