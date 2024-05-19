const PageTitle = (props) => {
	return (
		<div className="bg-primary p-3 border-bottom">
			<h3 className="m-0 text-light fw-light d-flex align-items-center gap-2">
				<a href={props.return} className="text-light d-flex align-self-center ">
					<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
						<path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
					</svg>
				</a>
				{props.title}
			</h3>
		</div>
	)
}

export default PageTitle