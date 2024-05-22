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
                            <div className="container px-3 py-0">
                                {/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
                                <div className="border bg-body rounded-1">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="col text-secondary bg-body-secondary fw-normal border-end border-top-start-1 text-end">
                                                    <input type="checkbox" className="form-check-input mx-1" name="" id="" />
                                                </th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-end text-end">#</th>
                                                <th className="col-2 text-secondary bg-body-secondary fw-normal border-end">Actions</th>
                                                <th className="col-3 text-secondary bg-body-secondary fw-normal border-end">Company</th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-end text-end">Number</th>
                                                <th className="col-3 text-secondary bg-body-secondary fw-normal border-end">Name</th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-end">Currency</th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-top-end-1 text-end">Balance</th>
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