import { Fragment, useRef, useState } from 'react';
import Card from '../ui/Card';
import classes from './SearchPlayerForm.module.css';

const SearchPlayerForm = (props) => {
	const playerInput = useRef();
	const [system, setSystem] = useState('');

	const handleOnChange = (event) => {
		setSystem(event.target.value);
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		const enteredUser = playerInput.current.value;
		const enteredSystem = system;
		console.log(enteredUser + ' ' + enteredSystem);

		props.onSearchPlayer({ user: enteredUser, system: enteredSystem });
	};
	return (
		<Fragment>
			<Card>
				<form className={classes.form} onSubmit={handleSearchSubmit}>
					<div className={classes.control}>
						<label htmlFor='UserName'>User Name</label>
						<input type='text' id='userName' ref={playerInput} />
					</div>

					<ul>
						<div className={classes.control}>
							<label> System:</label>
						</div>
						<li>
							<label htmlFor=''>
								PS4/PS5
								<input
									type='radio'
									name='system'
									value='PS4'
									onChange={handleOnChange}
								/>
							</label>
						</li>
						<li>
							<label htmlFor=''>
								XBOX
								<input
									type='radio'
									name='system'
									value='X1'
									onChange={handleOnChange}
								/>
							</label>
						</li>
						<li>
							<label htmlFor=''>
								PC
								<input
									type='radio'
									name='system'
									value='PC'
									onChange={handleOnChange}
								/>
							</label>
						</li>
					</ul>
					<div className={classes.actions}>
						<button className='btn'>Search Player</button>
					</div>
				</form>
			</Card>
		</Fragment>
	);
};

export default SearchPlayerForm;
