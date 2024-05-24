import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import PageTitle from "@/components/PageTitle"
import Message from "@/components/Message"
import RowControl from "@/components/RowControl"

const page = () => {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
                <Header statusType="success" statusText="App Running"/>  
                <div className="d-flex flex-grow-1">
                    <div className="d-flex flex-column flex-grow-1">
                        <PageTitle title="Chart of Accounts" return="/ais"/>
                        <div className="flex-grow-1">
                            <div className="px-4 py-0">
                                {/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
                                <div className="mb-2 d-flex gap-2">
                                    <a href="" className="btn btn-primary rounded-1 d-flex align-items-center gap-1 py-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                        </svg>
                                        <p className="m-0">Add Record</p>
                                    </a>
                                </div>
                                <div className="border bg-body rounded-1">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="col text-secondary bg-body-secondary fw-normal border-end border-top-start-1 text-end">
                                                    <input type="checkbox" className="form-check-input mx-1" name="" id="" />
                                                </th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-end text-end">#</th>
                                                <th className="col-2 text-secondary bg-body-secondary fw-normal border-end">Actions</th>
                                                <th className="col-3 text-secondary bg-body-secondary fw-normal border-end">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        Company
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                                            <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                                        </svg>
                                                    </div>
                                                </th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-end text-end">
                                                    <div className="d-flex align-items-center justify-content-end gap-1">
                                                        Number
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                                            <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                                        </svg>
                                                    </div>
                                                </th>
                                                <th className="col-3 text-secondary bg-body-secondary fw-normal border-end">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        Name
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                                            <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                                        </svg>
                                                    </div>
                                                </th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-end">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        Currency
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                                            <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                                        </svg>
                                                    </div>
                                                </th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-top-end-1 text-end">
                                                    <div className="d-flex align-items-center justify-content-end gap-1">
                                                        Balance
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                                            <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                                        </svg>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-end align-middle">
                                                    <input type="checkbox" className="form-check-input mx-1" name="" id="" />
                                                </td>
                                                <td className="border-end text-end py-2 font-monospace align-middle">1</td>
                                                <td className="border-end">
                                                    <RowControl view="" edit="" delete=""/>
                                                </td>
                                                <td className="border-end align-middle">Societas Music Group Corporation</td>
                                                <td className="border-end text-end font-monospace align-middle">1101</td>
                                                <td className="border-end align-middle">
                                                    <a href="">
                                                        Cash
                                                    </a>
                                                </td>
                                                <td className="border-end align-middle">USD</td>
                                                <td className="text-end font-monospace align-middle">0.00</td>
                                            </tr>
                                            <tr> 
                                                <td className="border-end align-middle">
                                                    <input type="checkbox" className="form-check-input mx-1" name="" id="" />
                                                </td>
                                                <td className="border-end text-end py-2 font-monospace align-middle">2</td>
                                                <td className="border-end">
                                                    <RowControl view="" edit="" delete=""/>
                                                </td>
                                                <td className="border-end align-middle">Societas Music Group Corporation</td>
                                                <td className="border-end text-end font-monospace align-middle">1102</td>
                                                <td className="border-end align-middle">
                                                    <a href="">
                                                        Accounts Receivable
                                                    </a>
                                                </td>
                                                <td className="border-end align-middle">USD</td>
                                                <td className="text-end font-monospace align-middle">0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="text-secondary">Showing 1-1 of 1 Record(s)</p>
                                    {/* <button type="text" className="form-control text-secondary" disabled>Showing 1 Record(s)</button> */}
                                </div>
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