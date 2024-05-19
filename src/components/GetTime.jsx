const GetTime = () => {
    let date = new Date()
    date = date.toISOString()
    return (
        date
    )
}

export default GetTime