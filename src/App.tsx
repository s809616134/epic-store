import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Error404Page from './pages/Error404Page';
import Home from './pages/Home';
import './index.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Login' element={<Login />} />
				<Route path='*' element={<Error404Page />} />
			</Routes>
		</Router>
	);
}

export default App;
