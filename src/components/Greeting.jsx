"use client"

const Greeting = () => {
    let date = new Date()
    let hour = date.getHours()
    let greeting
    if (hour>=17) {
        greeting = "Good evening"
    } else if (hour>=12) {
        greeting = "Good afternoon"
    } else {
        greeting = "Good morning"
    }
    return (
        greeting
    )
}

export default Greeting