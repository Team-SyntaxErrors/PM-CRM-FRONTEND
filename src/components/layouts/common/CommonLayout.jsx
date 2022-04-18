import DashboardComponent from '../../pages/Dashboard/DashboardComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';

export default function CommonLayout() {
	return (
		<>
			<div id='layout-wrapper'>
				<HeaderComponent />

				<SidebarComponent />

				<div className='main-content'>
					<div className='page-content'>
						<div className='container-fluid'>
							<DashboardComponent />
						</div>
					</div>
					<FooterComponent />
				</div>
			</div>
		</>
	);
}
