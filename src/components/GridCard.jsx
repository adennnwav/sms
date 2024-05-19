const GridCard = (props) => {
	return (
		<div className="card rounded-0 col p-0">
			<div className="border-bottom py-2 px-3">
				<h5 className="card-title m-0">{props.title}</h5>
			</div>
			<div className="card-body">
				<p className="card-text">{props.text}</p>
				<a href={props.link} target={props.target} className="btn btn-primary rounded-0">{props.cta}</a>
			</div>
		</div>
	)
}

export default GridCard