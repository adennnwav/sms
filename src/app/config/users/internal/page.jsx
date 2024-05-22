import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import PageTitle from "@/components/PageTitle"
import Message from "@/components/Message"
import Badge from "@/components/Badge"

const page = () => {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
                <Header statusType="success" statusText="App Running"/>  
                <div className="d-flex flex-grow-1">
                    {/* <Sidebar/> */}
                    <div className="d-flex flex-column flex-grow-1">
                        <PageTitle title="Internal Users" return="/config"/>
                        <div className="flex-grow-1">
                            {/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
                            <div className="px-4">
                                <div className="d-flex gap-2 mb-2">
                                    <a href="" className="btn btn-secondary rounded-0">
                                        Add User
                                    </a>
                                    <a href="" className="btn btn-secondary rounded-0">
                                        Export CSV
                                    </a>
                                </div>
                                <table className="table table-striped" id="table">
                                    <thead>
                                        <tr>
                                            <th className="col-2 text-light fw-light bg-dark py-3">
                                                Actions
                                            </th>
                                            <th className="col-7 text-light fw-light bg-dark py-3">
                                                Full Name
                                            </th>
                                            <th className="col-1 text-light fw-light bg-dark py-3">
                                                User Status
                                            </th>
                                            <th className="col-2 text-light fw-light bg-dark py-3">
                                                Last Updated
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <tr id="">
                                        <td className="py-4">
                                            <div className="d-flex gap-1">
                                                <a href="" className="btn btn-primary py-1 rounded-0">View</a>
                                                <a href="" className="btn btn-warning py-1 rounded-0 d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                        <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                                    </svg>
                                                </a>
                                                <button className="btn btn-danger py-1 rounded-0 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                                    </svg>
                                                </button>
                                                <div className="modal fade" id="delete" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content rounded-0">
                                                            <div className="modal-header">
                                                                <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm Action</h1>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div className="modal-body">
                                                                Are you sure you wish to delete this record? This action is permanent and has no option to undo.
                                                                <div className="mt-2">
                                                                    <b>Name:&nbsp;</b>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
                                                                <form action="" method="POST">
                                                                    <button type="submit" className="btn btn-primary rounded-0">Save changes</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-3">
                                            <div className="py-1 d-flex gap-3 align-items-center">
                                                <div className="circle">
                                                    <p className="circle-inner text-white">Te</p>
                                                </div>
                                                <a href="">Test</a>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="py-1">
                                                <Badge type="success" text="Active"/>
                                            </div>
                                        </td>
                                        <td className="py-4">
                                            <div className="py-1 d-block text-truncate">
                                                2024-01-01T16:03:00.000Z
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
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