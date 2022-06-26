import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<App />
		</StyledEngineProvider>
	</React.StrictMode>
);
