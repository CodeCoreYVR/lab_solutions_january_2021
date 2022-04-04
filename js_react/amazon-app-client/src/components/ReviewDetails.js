export default function ReviewDetails(props) {
    return (
        <p>
            <strong>Rating: {props.rating}</strong>
            <br />
            {props.body}
            <br />
            Created at: {props.created_at.toString()}
            <br />
            Created by: {props.full_name}
        </p>
    )
}