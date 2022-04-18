import * as Icon from 'react-feather';

export default function SidebarComponent() {
	return (
		<div className='vertical-menu'>
			{/* LOGO */}
			<div className='navbar-brand-box'>
				<a href='index.html' className='logo logo-dark'>
					<span className='logo-sm'>
						<img src='assets/images/logo-sm.png' alt='true' height={22} />
					</span>
					<span className='logo-lg'>
						<img src='assets/images/logo-dark.png' alt='true' height={22} />
					</span>
				</a>
				<a href='index.html' className='logo logo-light'>
					<span className='logo-lg'>
						<img src='assets/images/logo-light.png' alt='true' height={22} />
					</span>
					<span className='logo-sm'>
						<img src='assets/images/logo-sm-light.png' alt='true' height={22} />
					</span>
				</a>
			</div>
			<button type='button' className='btn btn-sm px-3 font-size-16 header-item vertical-menu-btn'>
				<i className='fa fa-fw fa-bars' />
			</button>
			<div data-simplebar className='sidebar-menu-scroll'>
				{/*- Sidemenu */}
				<div id='sidebar-menu'>
					{/* Left Menu Start */}
					<ul className='metismenu list-unstyled' id='side-menu'>
						<li className='menu-title'>Menu</li>
						<li>
							<a href='index.html'>
								<Icon.Monitor className='icon nav-icon' />
								<span className='menu-item'>Dashboard</span>
							</a>
						</li>
						<li className='menu-title'>Authentication</li>
						<li>
							<a href='auth-signin-basic.html'>
								<Icon.User className='icon nav-icon' />
								<span className='menu-item'>Sign In</span>
							</a>
						</li>
						<li>
							<a href='auth-signup-basic.html'>
								<Icon.Edit className='icon nav-icon' />
								<span className='menu-item'>Sign Up</span>
							</a>
						</li>
						<li>
							<a href='auth-resetpassword-basic.html'>
								<Icon.RefreshCw className='icon nav-icon' />
								<span className='menu-item'>Reset Password</span>
							</a>
						</li>
					</ul>
				</div>
				{/* Sidebar */}
			</div>
		</div>
	);
}
