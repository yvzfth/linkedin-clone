import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from './features/userSlice'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';


function Header() {

	const dispatch = useDispatch();

	const logoutOfApp = () => {
		dispatch(logout());
		auth.signOut();
	}

	return (
		<div className="header">

			<div className="header__left">
				<img alt="" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" />
				<div className="header__search">
					{/* Search Icon */}
					<SearchIcon />
					<input placeholder="Search" type="text"></input>
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notifications" />
				<HeaderOption
					onClick={logoutOfApp}
					isAvatar={true}
					title="Me"
				/>

			</div>

		</div>
	)
}

export default Header