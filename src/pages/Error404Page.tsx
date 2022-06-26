import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

export default function Error404Page() {
	const navigate = useNavigate();
	return (
		<Container>
			<div>Error404Page</div>
			<Button
				variant='contained'
				onClick={() => {
					navigate('/');
				}}
			>
				Back to Home
			</Button>
		</Container>
	);
}
