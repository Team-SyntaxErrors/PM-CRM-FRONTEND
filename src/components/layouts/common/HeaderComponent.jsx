export default function HeaderComponent() {
	return (
		<header id='page-topbar'>
			<div className='navbar-header'>
				<div className='d-flex'>
					{/* LOGO */}
					<div className='navbar-brand-box'>
						<a href='/' className='logo logo-dark'>
							<span className='logo-sm'>
								<img src='assets/images/logo-sm.png' alt='true' height={22} />
							</span>
							<span className='logo-lg'>
								<img src='assets/images/logo-dark.png' alt='true' height={22} />
							</span>
						</a>
						<a href='/' className='logo logo-light'>
							<span className='logo-sm'>
								<img src='assets/images/logo-sm.png' alt='true' height={22} />
							</span>
							<span className='logo-lg'>
								<img src='assets/images/logo-light.png' alt='true' height={22} />
							</span>
						</a>
					</div>
					<button
						type='button'
						className='btn btn-sm px-3 font-size-16 header-item vertical-menu-btn'>
						<i className='fa fa-fw fa-bars' />
					</button>
				</div>
				<div className='d-flex'>
					<div className='dropdown d-inline-block'>
						<button
							type='button'
							className='btn header-item user text-start d-flex align-items-center'
							id='page-header-user-dropdown'
							data-bs-toggle='dropdown'
							aria-haspopup='true'
							aria-expanded='false'>
							<img
								className='rounded-circle header-profile-user'
								src='assets/images/users/avatar-1.jpg'
								alt='Header Avatar'
							/>
							<span className='ms-2 d-none d-sm-block user-item-desc'>
								<span className='user-name'>Kate Dudley</span>
								<span className='user-sub-title'>Administrator</span>
							</span>
						</button>
						<div className='dropdown-menu dropdown-menu-end pt-0'>
							<a className='dropdown-item' href='#!'>
								<i className='mdi mdi-account-circle text-muted font-size-16 align-middle me-1' />{' '}
								<span className='align-middle'>Profile</span>
							</a>
							<a className='dropdown-item d-flex align-items-center' href='#!'>
								<i className='mdi mdi-cog-outline text-muted font-size-16 align-middle me-1' />{' '}
								<span className='align-middle'>Settings</span>
								<span className='badge bg-success ms-auto'>New</span>
							</a>
							<a className='dropdown-item' href='#!'>
								<i className='mdi mdi-lock text-muted font-size-16 align-middle me-1' />{' '}
								<span className='align-middle'>Lock screen</span>
							</a>
							<a className='dropdown-item' href='#!'>
								<i className='mdi mdi-logout text-muted font-size-16 align-middle me-1' />{' '}
								<span className='align-middle'>Logout</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
