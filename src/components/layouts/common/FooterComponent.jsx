export default function FooterComponent() {
	return (
		<footer className='footer'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-6'>© Syntax Errors.</div>
					<div className='col-sm-6'>
						<div className='text-sm-end d-none d-sm-block'>
							Crafted with <i className='mdi mdi-heart text-danger' /> by{' '}
							<a href='//syntaxerrors.com/' target='_blank' className='text-reset' rel='noreferrer'>
								Syntax Errors
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
