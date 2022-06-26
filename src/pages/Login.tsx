import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IFormInput {
	userName: String;
	password: String;
}

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
export default function Login() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
	};
	console.log(errors);

	return (
		<ThemeProvider theme={darkTheme}>
			<Container component='body' maxWidth='xs'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name='userName'
						control={control}
						rules={{ required: true, pattern: /^\S+@\S+$/i }}
						defaultValue=''
						render={({ field }) => <Input {...field} />}
						// {...register('userName', { required: true, pattern: /^\S+@\S+$/i })}
					/>
					<Controller
						name='password'
						control={control}
						rules={{
							required: true,
							maxLength: 12,
							pattern: /^(?=.*?[a-z])(?=.*?[0-9]).{6,}$/i,
						}}
						defaultValue=''
						render={({ field }) => <Input {...field} />}
					/>

					<Button type='submit' variant='contained'>
						Login
					</Button>
				</form>
			</Container>
		</ThemeProvider>
	);
}
