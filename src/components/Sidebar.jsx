import pjson from "../../package.json"

const Sidebar = () => {
	return (
		<div className="d-flex">
			<div className="d-flex flex-grow-1">
				<div className="p-3 border-end bg-body sms-sidebar d-flex flex-column">
					<ul className="list-unstyled ps-0 flex-grow-1">
						<li className="mb-1">
							<button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
								Dashboard
							</button>
							<div className="collapse" id="home-collapse">
								<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
									<li><a href="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Dashboard Index</a></li>
								</ul>
							</div>
						</li>
						<li className="mb-1">
							<button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
								Accounting Info System (AIS)
							</button>
							<div className="collapse" id="dashboard-collapse">
								<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
								<li><a href="/ais" className="link-body-emphasis d-inline-flex text-decoration-none rounded">AIS Index</a></li>
									<li><a href="/ais/coa" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Chart of Accounts</a></li>
									<li><a href="/ais/entries" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Entries</a></li>
									<li><a href="/ais/parties" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Parties</a></li>
									<li><a href="/ais/inventory" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Inventory</a></li>
									<li><a href="/ais/billing" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Billing Gateway</a></li>
									<li><a href="/ais/analytics" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Analytics</a></li>
									<li><a href="/ais/import" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Import Wizard</a></li>
									<li><a href="/ais/config" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Configuration</a></li>
								</ul>
							</div>
						</li>
						<li className="mb-1">
							<button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
								System Configuration
							</button>
							<div className="collapse" id="orders-collapse">
								<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
									<li><a href="/config" className="link-body-emphasis d-inline-flex text-decoration-none rounded">System Configuration Index</a></li>
									<li><a href="/config/users/internal" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Internal Users</a></li>
									<li><a href="/config/users/external" className="link-body-emphasis d-inline-flex text-decoration-none rounded">External Users</a></li>
									<li><a href="/config/apps" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Applications</a></li>
								</ul>
							</div>
						</li>
						<li className="border-top my-3"></li>
						<li className="mb-1">
							<button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
								Profile
							</button>
							<div className="collapse" id="account-collapse">
								<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
									<li><a href="/profile" className="link-body-emphasis d-inline-flex text-decoration-none rounded">My Profile</a></li>
									<li><a href="/auth/logout" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Logout</a></li>
								</ul>
							</div>
						</li>
					</ul>
					<div>
						<small className="text-secondary">Release: {pjson.version}</small>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Sidebar