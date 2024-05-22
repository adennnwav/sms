import Header from "@/components/Header"
import Footer from "@/components/Footer"
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
                    {/* <Sidebar/> */}
                    <div className="d-flex flex-column flex-grow-1">
                        <div className="bg-body container-fluid py-3 px-4 border-bottom mb-2">
                            <h2 className="m-0 text-body fw-light px-1 d-flex align-items-center gap-2">
                                <Greeting/>, Aiden
                            </h2>
                        </div>
                        <div className="container flex-grow-1">
                            {/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
                            <div className="px-3 py-3">
                                {/* <h2 className="fw-light"><Greeting/>, Aiden</h2> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default page