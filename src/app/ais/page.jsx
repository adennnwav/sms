import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sidebar from "@/components/Sidebar"
import PageTitle from "@/components/PageTitle"
import GridCard from "@/components/GridCard"
import Message from "@/components/Message"

const page = () => {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column bg-body-tertiary">
                <Header statusType="success" statusText="App Running"/>  
                <div className="d-flex flex-grow-1">
                    {/* <Sidebar/> */}
                    <div className="d-flex flex-column flex-grow-1">
                        <PageTitle title="Accounting Information System (AIS)" return="/"/>
                        <div className="flex-grow-1">
                            {/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
                            <div className="container px-3 py-2">
                                <h4 className="fw-light text-center mb-3 mt-2">Aiden O'Neal</h4>
                                <div className="d-flex gap-3">
                                    <GridCard title="Chart of Accounts" text="View and create financial asset, liability, equity, revenue, and expense accounts." link="/ais/coa" target="_self" cta="Manage"/>
                                    <GridCard title="Entries" text="Create journal entries and manage existing transaction records for all accounts." link="/ais/entries" target="_self" cta="Manage"/>
                                    <GridCard title="Parties" text="Manage vendor and customer records such as billing accounts, tax, and currency information." link="/ais/parties" target="_self" cta="Manage"/>
                                </div>
                                <div className="d-flex gap-3 mt-3">
                                    <GridCard title="Inventory" text="Create and update inventory items that can be used on sales and purchasing entries." link="/ais/inventory" target="_self" cta="Manage"/>
                                    <GridCard title="Invoicing & Orders" text="Manage incoming and outgoing purchase/sales orders and invoices." link="/ais/orders" target="_self" cta="Manage"/>
                                    <GridCard title="Billing Gateway" text="View and create customer billing gateways for payment processing." link="/ais/billing" target="_self" cta="Manage"/>
                                </div>
                                <div className="d-flex gap-3 mt-3">
                                    <GridCard title="Analytics" text="Generate reports for fiscal periods including profit-loss, balance sheets, and ledgers." link="/ais/analytics" target="_self" cta="Manage"/>
                                    <GridCard title="Import Wizard" text="Import flat files to existing collections like sales, purchases, and more." link="/ais/import" target="_self" cta="Manage"/>
                                    <GridCard title="Configuration" text="Manage module-speific settings such as defaults, fiscal calendars, locales, and more." link="/ais/config" target="_self" cta="Manage"/>
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