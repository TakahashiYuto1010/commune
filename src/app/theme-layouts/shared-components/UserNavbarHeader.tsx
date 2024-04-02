import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectUser } from 'app/store/user/userSlice';

const Root = styled('div')(({ theme }) => ({
	'& .username, & .email': {
		transition: theme.transitions.create('opacity', {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeInOut
		})
	},

	'& .avatar': {
		background: theme.palette.background.default,
		transition: theme.transitions.create('all', {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeInOut
		}),
		bottom: 0,
		'& > img': {
			borderRadius: '50%'
		}
	}
}));

/**
 * The user navbar header.
 */
function UserNavbarHeader() {
	const user = useSelector(selectUser);

	return (
		<Root className="user relative flex flex-col items-center justify-center p-16 pb-14 shadow-0">
			<div className="mb-24 flex items-center justify-center">
				<Avatar
					sx={{
						backgroundColor: 'background.paper',
						color: 'text.secondary'
					}}
					className="avatar h-96 w-96 text-32 font-bold"
					src="assets/images/logo/commune.gif"
					alt="commune logo"
				>
				</Avatar>
			</div>
		</Root>
	);
}

export default UserNavbarHeader;
