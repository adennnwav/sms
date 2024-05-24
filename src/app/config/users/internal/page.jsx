import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import PageTitle from "@/components/PageTitle"
import Message from "@/components/Message"
import RowControl from "@/components/RowControl"
import Badge from "@/components/Badge"

const page = () => {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
                <Header statusType="success" statusText="App Running"/>  
                <div className="d-flex flex-grow-1">
                    <div className="d-flex flex-column flex-grow-1">
                        <PageTitle title="Internal Users" return="/config"/>
                        <div className="flex-grow-1">
                            <div className="px-4 py-0">
                                {/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
                                <form action="/config/users/internal" method="GET">
                                    <div className="mb-2 d-flex gap-2">
                                        <a href="/config/users/internal/create" className="btn btn-primary rounded-1 d-flex align-items-center gap-1 p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                                <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                            </svg>
                                            <p className="m-0">Add Record</p>
                                        </a>
                                        <a href="/config/users/internal/export/csv" className="btn btn-primary rounded-1 d-flex align-items-center gap-1 p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filetype-csv" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.517 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879z"/>
                                            </svg>
                                            <p className="m-0">Export CSV</p>
                                        </a>
                                        <button type="submit" className="btn btn-primary rounded-1 d-flex align-items-center gap-1 p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                            </svg>
                                            <p className="m-0">Get Data</p>
                                        </button>
                                    </div>
                                    <div className="border bg-body rounded-1 mb-2 bg-body-secondary">
                                        <p className="m-0 text-secondary py-2 px-2 border-bottom">Query Options</p>
                                        <div className="py-2 px-2 bg-body rounded-bottom-1">
                                            <div className="d-flex gap-2">
                                                <div>
                                                    <label for="exampleFormControlInput1" className="form-label mb-1">Name</label>
                                                    <input type="email" className="form-control rounded-1 py-1 px-2" id="exampleFormControlInput1"/>
                                                </div>
                                                <div>
                                                    <label for="exampleFormControlInput1" className="form-label mb-1">Email</label>
                                                    <input type="email" className="form-control rounded-1 py-1 px-2" id="exampleFormControlInput1"/>
                                                </div>
                                                <div>
                                                    <label for="exampleFormControlInput1" className="form-label mb-1">Status</label>
                                                    <select className="form-select rounded-1 py-1 ps-2" name="" id="">
                                                        <option value="" disabled selected>Select one...</option>
                                                        <option value="Disabled">Disabled</option>
                                                        <option value="Enabled">Enabled</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mt-1">
                                                <a href="/config/users/internal" className="">Clear All Filters</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="border bg-body rounded-1">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="col text-secondary bg-body-secondary fw-normal border-end border-top-start-1 text-end">
                                                    <input type="checkbox" className="form-check-input mx-1" name="" id="" />
                                                </th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-end text-end">#</th>
                                                <th className="col-2 text-secondary bg-body-secondary fw-normal border-end">Actions</th>
                                                <th className="col-8 text-secondary bg-body-secondary fw-normal border-end">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        Name
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                                            <path d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                                        </svg>
                                                    </div>
                                                </th>
                                                <th className="col-1 text-secondary bg-body-secondary fw-normal border-end">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        Status
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
                                                <td className="border-end align-middle">Aiden O'Neal</td>
                                                <td className="font-monospace align-middle">
                                                    <Badge type="success" text="Enabled"/>
                                                </td>
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