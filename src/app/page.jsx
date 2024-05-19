import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import PageTitle from "@/components/PageTitle"
import GridCard from "@/components/GridCard"
import Message from "@/components/Message"
import Greeting from "@/components/Greeting"

const page = () => {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
                <Header statusType="success" statusText="App Running"/>  
                <div className="d-flex flex-grow-1">
                    <Sidebar/>
                    <div className="d-flex flex-column flex-grow-1">
                        <div className="flex-grow-1">
                            {/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
                            <div className="px-3 py-3">
                                <h2 className="fw-light"><Greeting/>, Aiden</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page