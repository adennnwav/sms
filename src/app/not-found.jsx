import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import PageTitle from "@/components/PageTitle"
import GridCard from "@/components/GridCard"
import Message from "@/components/Message"
import GetTime from "@/components/GetTime"

const NotFound = () => {
	return (
		<div className="min-vh-100 d-flex flex-column bg-body-tertiary">
			<Header statusType="warning" statusText="Client error detected"/>  
			<div className="d-flex flex-grow-1">
				<Sidebar/>
				<div className="d-flex flex-column flex-grow-1">
					<div className="flex-grow-1">
						{/* <Message type="success" text="Your request was successfully processed." show="true"/> */}
						<div className="px-3 py-3 d-flex justify-content-center text-center align-items-center h-75">
							<div>
								<h4 className="fw-light">Page not found</h4>
								<p className="fw-light">Click <a href="/">here</a> to return to the dashboard</p>
								<small className="text-secondary">HTTP Status Code: 404 (Not found)</small><br/>
								<small className="text-secondary">
									<GetTime/>
								</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotFound