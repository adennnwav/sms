const Badge = (props) => {
    return (
        <span className={`badge text-bg-${props.type}`}>{props.text}</span>
    )
}

export default Badge