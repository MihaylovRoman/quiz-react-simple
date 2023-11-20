
import { useState } from 'react';
import './App.css';

function App() {

	const [open, setOpen] = useState(false)

	return (
		<div className="wrapper">

			<button className='window__button'>Открыть окно</button>
			
		</div>
	);
}

export default App;
