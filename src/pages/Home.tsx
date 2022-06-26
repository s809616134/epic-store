import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Home() {
	return (
		<Box sx={{ minHeight: '400px', backgroundColor: 'rgba(0, 0, 0, 0.93)' }}>
			<Container
				fixed
				sx={{ height: '660px', width: '470px', backgroundColor: '#202020' }}
				className='text-center'
			>
				<Typography
					variant='h3'
					component='h1'
					gutterBottom
					sx={{
						fontWeight: 'bold',
					}}
					className='text-teal-300'
				>
					Get Started
				</Typography>
				<Button variant='contained' component={RouterLink} to='/Login'>
					Login
				</Button>
			</Container>
		</Box>
	);
}
