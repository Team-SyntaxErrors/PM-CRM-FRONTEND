export default function DashboardComponent() {
	return (
		<>
			<div className='row'>
				<div className='col-12'>
					<div className='page-title-box d-flex align-items-center justify-content-between'>
						<h4 className='mb-0'>Dashboard</h4>
						<div className='page-title-right'>
							<ol className='breadcrumb m-0'>
								<li className='breadcrumb-item'>
									<a href='#!'>Dashonic</a>
								</li>
								<li className='breadcrumb-item active'>Dashboard</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-xl-3 col-sm-6'>
					{/* Card */}
					<div className='card'>
						<div className='card-body'>
							<div className='d-flex justify-content-between'>
								<div>
									<h6 className='font-size-xs text-uppercase'>Total Revenue</h6>
									<h4 className='mt-4 font-weight-bold mb-2 d-flex align-items-center'>$46.34k</h4>
									<div className='text-muted'>Earning this month</div>
								</div>
							</div>
							<div className='apex-charts mt-3' id='sparkline-chart-1' />
						</div>
					</div>
				</div>
				<div className='col-xl-3 col-sm-6'>
					{/* Card */}
					<div className='card'>
						<div className='card-body'>
							<div className='d-flex justify-content-between'>
								<div>
									<h6 className='font-size-xs text-uppercase'>Total Refunds</h6>
									<h4 className='mt-4 font-weight-bold mb-2 d-flex align-items-center'>$895.02</h4>
									<div className='text-muted'>Refunds this month</div>
								</div>
							</div>
							<div className='apex-charts mt-3' id='sparkline-chart-2' />
						</div>
					</div>
				</div>
				<div className='col-xl-3 col-sm-6'>
					{/* Card */}
					<div className='card'>
						<div className='card-body'>
							<div className='d-flex justify-content-between'>
								<div>
									<h6 className='font-size-xs text-uppercase'>Active Users</h6>
									<h4 className='mt-4 font-weight-bold mb-2 d-flex align-items-center'>6,985</h4>
									<div className='text-muted'>Users this Week</div>
								</div>
							</div>
							<div className='apex-charts mt-3' id='sparkline-chart-3' />
						</div>
					</div>
				</div>
				<div className='col-xl-3 col-sm-6'>
					{/* Card */}
					<div className='card'>
						<div className='card-body'>
							<div className='d-flex justify-content-between'>
								<div>
									<h6 className='font-size-xs text-uppercase'>All Time Orders</h6>
									<h4 className='mt-4 font-weight-bold mb-2 d-flex align-items-center'>12,584</h4>
									<div className='text-muted'>Total Number of Orders</div>
								</div>
							</div>
							<div className='apex-charts mt-3' id='sparkline-chart-4' />
						</div>
					</div>
				</div>
			</div>{' '}
			<div className='row'>
				<div className='col-xl-12'>
					<div className='card card-h-100'>
						<div className='card-body'>
							<div className='float-end'>
								<div className='dropdown'>
									<a
										className='dropdown-toggle text-reset'
										href='#'
										data-bs-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'>
										<span className='fw-semibold'>Sort By:</span>{' '}
										<span className='text-muted'>
											Yearly
											<i className='mdi mdi-chevron-down ms-1' />
										</span>
									</a>
									<div className='dropdown-menu dropdown-menu-end'>
										<a className='dropdown-item' href='#'>
											Yearly
										</a>
										<a className='dropdown-item' href='#'>
											Monthly
										</a>
										<a className='dropdown-item' href='#'>
											Weekly
										</a>
										<a className='dropdown-item' href='#'>
											Today
										</a>
									</div>
								</div>
							</div>
							<h4 className='card-title mb-4'>Sales Analytics</h4>
							<div className='mt-1'>
								<div className='row justify-content-center'>
									<div className='col-xl-6'>
										<div className='row gy-4 text-center mb-0'>
											<div className='col-sm-4'>
												<h4 className='text-primary mb-1'>$3.85k</h4>
												<div className='text-muted d-inline-block fw-normal font-size-15'>
													Income
												</div>
											</div>
											<div className='col-sm-4'>
												<h4 className='mb-1'>258</h4>
												<div className='text-muted d-inline-block fw-normal font-size-15'>
													Sales
												</div>
											</div>
											<div className='col-sm-4'>
												<h4 className='mb-1'>52k</h4>
												<div className='text-muted d-inline-block fw-normal font-size-15'>
													Users
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='mt-3'>
								<div id='sales-analytics-chart' className='apex-charts' dir='ltr' />
							</div>
						</div>{' '}
						{/* end card-body*/}
					</div>{' '}
					{/* end card*/}
				</div>{' '}
				{/* end col*/}
			</div>
			<div className='row'>
				<div className='col-xl-12'>
					<div className='card'>
						<div className='card-body'>
							<div className='d-flex justify-content-between'>
								<h4 className='card-title mb-4'>Orders</h4>
								<div>
									<div className='dropdown d-inline'>
										<a
											className='dropdown-toggle text-reset mb-3'
											href='#'
											data-bs-toggle='dropdown'
											aria-haspopup='true'
											aria-expanded='false'>
											<span className='fw-semibold'>Report By:</span>{' '}
											<span className='text-muted'>
												Monthly
												<i className='mdi mdi-chevron-down ms-1' />
											</span>
										</a>
										<div className='dropdown-menu dropdown-menu-end'>
											<a className='dropdown-item' href='#'>
												Yearly
											</a>
											<a className='dropdown-item' href='#'>
												Monthly
											</a>
											<a className='dropdown-item' href='#'>
												Weekly
											</a>
											<a className='dropdown-item' href='#'>
												Today
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className='table-responsive'>
								<table className='table table-hover table-nowrap mb-0 align-middle table-check'>
									<thead className='bg-light'>
										<tr>
											<th className='rounded-start' style={{ width: 15 }}>
												<div className='form-check'>
													<input
														className='form-check-input font-size-16'
														type='checkbox'
														defaultValue
														id='checkAll'
													/>
													<label className='form-check-label' htmlFor='checkAll'>
														{' '}
													</label>
												</div>
											</th>
											<th>ID</th>
											<th>Date</th>
											<th>Status</th>
											<th>Customer</th>
											<th>Purchased</th>
											<th colSpan={2} className='rounded-end'>
												Revenue
											</th>
										</tr>
										{/* end tr */}
									</thead>
									{/* end thead */}
									<tbody>
										<tr>
											<td>
												<div className='form-check'>
													<input
														className='form-check-input font-size-16'
														type='checkbox'
														defaultValue
														id='flexCheckexampleone'
													/>
													<label className='form-check-label' htmlFor='flexCheckexampleone'></label>
												</div>
											</td>
											<td className='fw-medium'>#DK1018</td>
											<td>1 Jun, 11:21</td>
											<td>
												<div className='d-flex'>
													<div className='me-2'>
														<i className='mdi mdi-check-circle-outline text-success' />
													</div>
													<div>
														<p className='mb-0'>Paid</p>
													</div>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													<div className='me-2'>
														<img
															src='assets/images/users/avatar-2.jpg'
															className='avatar-sm img-thumbnail h-auto rounded-circle'
															alt='Error'
														/>
													</div>
													<div>
														<h5 className='font-size-14 text-truncate mb-0'>
															<a href='#' className='text-reset'>
																Alex Fox
															</a>
														</h5>
													</div>
												</div>
											</td>
											<td>Wireframing Kit for Figma</td>
											<td>$129.99</td>
											<td>
												<div className='dropdown'>
													<a
														href='#'
														className='dropdown-toggle card-drop'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														<i className='mdi mdi-dots-horizontal font-size-18 text-muted' />
													</a>
													<ul className='dropdown-menu dropdown-menu-end'>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-pencil font-size-16 text-success me-1' />
																Edit
															</a>
														</li>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-trash-can font-size-16 text-danger me-1' />
																Delete
															</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										{/* end /tr */}
										<tr>
											<td>
												<div className='form-check'>
													<input
														className='form-check-input font-size-16'
														type='checkbox'
														defaultValue
														id='flexCheckexamplethree'
													/>
													<label
														className='form-check-label'
														htmlFor='flexCheckexamplethree'></label>
												</div>
											</td>
											<td className='fw-medium'>#DK1017</td>
											<td>29 May, 18:36</td>
											<td>
												<div className='d-flex'>
													<div className='me-2'>
														<i className='mdi mdi-check-circle-outline text-success' />
													</div>
													<div>
														<p className='mb-0'>Paid</p>
													</div>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													<div className='me-2'>
														<img
															src='assets/images/users/avatar-3.jpg'
															className='avatar-sm img-thumbnail h-auto rounded-circle'
															alt='Error'
														/>
													</div>
													<div>
														<h5 className='font-size-14 text-truncate mb-0'>
															<a href='#' className='text-reset'>
																Joya Calvert
															</a>
														</h5>
													</div>
												</div>
											</td>
											<td>
												Mastering the Grid <span className='text-muted'>+2 more</span>
											</td>
											<td>$228.88</td>
											<td>
												<div className='dropdown'>
													<a
														href='#'
														className='dropdown-toggle card-drop'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														<i className='mdi mdi-dots-horizontal font-size-18 text-muted' />
													</a>
													<ul className='dropdown-menu dropdown-menu-end'>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-pencil font-size-16 text-success me-1' />
																Edit
															</a>
														</li>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-trash-can font-size-16 text-danger me-1' />
																Delete
															</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										{/* end /tr */}
										<tr>
											<td>
												<div className='form-check'>
													<input
														className='form-check-input font-size-16'
														type='checkbox'
														defaultValue
														id='flexCheckexamplefour'
													/>
													<label
														className='form-check-label'
														htmlFor='flexCheckexamplefour'></label>
												</div>
											</td>
											<td className='fw-medium'>#DK1016</td>
											<td>25 May , 08:09</td>
											<td>
												<div className='d-flex'>
													<div className='me-2'>
														<i className='mdi mdi-arrow-left-thin-circle-outline text-warning' />
													</div>
													<div>
														<p className='mb-0'>Refunded</p>
													</div>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													<div className='me-2'>
														<img
															src='assets/images/users/avatar-4.jpg'
															className='avatar-sm img-thumbnail h-auto rounded-circle'
															alt='Error'
														/>
													</div>
													<div>
														<h5 className='font-size-14 text-truncate mb-0'>
															<a href='#' className='text-reset'>
																Gracyn Make
															</a>
														</h5>
													</div>
												</div>
											</td>
											<td>Wireframing Kit for Figma</td>
											<td>$9.99</td>
											<td>
												<div className='dropdown'>
													<a
														href='#'
														className='dropdown-toggle card-drop'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														<i className='mdi mdi-dots-horizontal font-size-18 text-muted' />
													</a>
													<ul className='dropdown-menu dropdown-menu-end'>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-pencil font-size-16 text-success me-1' />
																Edit
															</a>
														</li>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-trash-can font-size-16 text-danger me-1' />
																Delete
															</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										{/* end /tr */}
										<tr>
											<td>
												<div className='form-check'>
													<input
														className='form-check-input font-size-16'
														type='checkbox'
														defaultValue
														id='flexCheckexamplefive'
													/>
													<label
														className='form-check-label'
														htmlFor='flexCheckexamplefive'></label>
												</div>
											</td>
											<td className='fw-medium'>#DK1015</td>
											<td>19 May , 14:09</td>
											<td>
												<div className='d-flex'>
													<div className='me-2'>
														<i className='mdi mdi-check-circle-outline text-success' />
													</div>
													<div>
														<p className='mb-0'>Paid</p>
													</div>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													<div className='me-2'>
														<img
															src='assets/images/users/avatar-5.jpg'
															className='avatar-sm img-thumbnail h-auto rounded-circle'
															alt='Error'
														/>
													</div>
													<div>
														<h5 className='font-size-14 text-truncate mb-0'>
															<a href='#' className='text-reset'>
																Monroe Mock
															</a>
														</h5>
													</div>
												</div>
											</td>
											<td>Spiashify 2.0</td>
											<td>$44.00</td>
											<td>
												<div className='dropdown'>
													<a
														href='#'
														className='dropdown-toggle card-drop'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														<i className='mdi mdi-dots-horizontal font-size-18 text-muted' />
													</a>
													<ul className='dropdown-menu dropdown-menu-end'>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-pencil font-size-16 text-success me-1' />
																Edit
															</a>
														</li>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-trash-can font-size-16 text-danger me-1' />
																Delete
															</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										{/* end /tr */}
										<tr>
											<td>
												<div className='form-check'>
													<input
														className='form-check-input font-size-16'
														type='checkbox'
														defaultValue
														id='flexCheckexamplesix'
													/>
													<label className='form-check-label' htmlFor='flexCheckexamplesix'></label>
												</div>
											</td>
											<td className='fw-medium'>#DK1014</td>
											<td>10 May , 10:00</td>
											<td>
												<div className='d-flex'>
													<div className='me-2'>
														<i className='mdi mdi-check-circle-outline text-success' />
													</div>
													<div>
														<p className='mb-0'>Paid</p>
													</div>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													<div className='me-2'>
														<img
															src='assets/images/users/avatar-6.jpg'
															className='avatar-sm img-thumbnail h-auto rounded-circle'
															alt='Error'
														/>
													</div>
													<div>
														<h5 className='font-size-14 text-truncate mb-0'>
															<a href='#' className='text-reset'>
																Lauren Bond
															</a>
														</h5>
													</div>
												</div>
											</td>
											<td>Mastering the Grid</td>
											<td>$75.87</td>
											<td>
												<div className='dropdown'>
													<a
														href='#'
														className='dropdown-toggle card-drop'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														<i className='mdi mdi-dots-horizontal font-size-18 text-muted' />
													</a>
													<ul className='dropdown-menu dropdown-menu-end'>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-pencil font-size-16 text-success me-1' />
																Edit
															</a>
														</li>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-trash-can font-size-16 text-danger me-1' />
																Delete
															</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										{/* end /tr */}
										<tr>
											<td>
												<div className='form-check'>
													<input
														className='form-check-input font-size-16'
														type='checkbox'
														defaultValue
														id='flexCheckexamplenine'
													/>
													<label
														className='form-check-label'
														htmlFor='flexCheckexamplenine'></label>
												</div>
											</td>
											<td className='fw-medium'>#DK1011</td>
											<td>29 Apr , 12:46</td>
											<td>
												<div className='d-flex'>
													<div className='me-2'>
														<i className='mdi mdi-close-circle-outline text-danger' />
													</div>
													<div>
														<p className='mb-0'>Changeback</p>
													</div>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													<div className='me-2'>
														<img
															src='assets/images/users/avatar-9.jpg'
															className='avatar-sm img-thumbnail h-auto rounded-circle'
															alt='Error'
														/>
													</div>
													<div>
														<h5 className='font-size-14 text-truncate mb-0'>
															<a href='#' className='text-reset'>
																Ricardo Schaefer
															</a>{' '}
														</h5>
													</div>
												</div>
											</td>
											<td>Spiashify 2.0</td>
											<td>$63.99</td>
											<td>
												<div className='dropdown'>
													<a
														href='#'
														className='dropdown-toggle card-drop'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														<i className='mdi mdi-dots-horizontal font-size-18 text-muted' />
													</a>
													<ul className='dropdown-menu dropdown-menu-end'>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-pencil font-size-16 text-success me-1' />
																Edit
															</a>
														</li>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-trash-can font-size-16 text-danger me-1' />
																Delete
															</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										{/* end /tr */}
										<tr>
											<td>
												<div className='form-check'>
													<input
														className='form-check-input font-size-16'
														type='checkbox'
														defaultValue
														id='flexCheckDefaultexample'
													/>
													<label
														className='form-check-label'
														htmlFor='flexCheckDefaultexample'></label>
												</div>
											</td>
											<td className='fw-medium'>#DK1010</td>
											<td>27 Apr , 10:53</td>
											<td>
												<div className='d-flex'>
													<div className='me-2'>
														<i className='mdi mdi-check-circle-outline text-success' />
													</div>
													<div>
														<p className='mb-0'>Paid</p>
													</div>
												</div>
											</td>
											<td>
												<div className='d-flex align-items-center'>
													<div className='me-2'>
														<img
															src='assets/images/users/avatar-10.jpg'
															className='avatar-sm img-thumbnail h-auto rounded-circle'
															alt='Error'
														/>
													</div>
													<div>
														<h5 className='font-size-14 text-truncate mb-0'>
															<a href='#' className='text-reset'>
																Arvi Hasan
															</a>{' '}
														</h5>
													</div>
												</div>
											</td>
											<td>Wireframing Kit for Figma</td>
											<td>$51.00</td>
											<td>
												<div className='dropdown'>
													<a
														href='#'
														className='dropdown-toggle card-drop'
														data-bs-toggle='dropdown'
														aria-expanded='false'>
														<i className='mdi mdi-dots-horizontal font-size-18 text-muted' />
													</a>
													<ul className='dropdown-menu dropdown-menu-end'>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-pencil font-size-16 text-success me-1' />
																Edit
															</a>
														</li>
														<li>
															<a href='#' className='dropdown-item'>
																<i className='mdi mdi-trash-can font-size-16 text-danger me-1' />
																Delete
															</a>
														</li>
													</ul>
												</div>
											</td>
										</tr>
										{/* end /tr */}
									</tbody>
									{/* end tbody */}
								</table>
								{/* end table */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
