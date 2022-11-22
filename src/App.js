import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/layout/LoadingSpinner';
import Player from './components/player/Player';
import SearchPlayerForm from './components/player/SearchPlayerForm';

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [player, setPlayer] = useState({ userName: '', system: '' });
	const searchPlayer = (data) => {
		setPlayer({ userName: data.user, system: data.system });
		console.log('in app: ' + data.user);
	};
	return (
		<Layout>
			<Fragment>
				<h2>Welcome to Apex</h2>
				{isLoading ? (
					<LoadingSpinner />
				) : (
					<>
						<SearchPlayerForm onSearchPlayer={searchPlayer} />
						<Player
							player={player}

							// userName={transData.userName}
							// platform={transData.platform}
							// rankName={transData.rankName}
							// rankDiv={transData.rankDiv}
						/>
					</>
				)}
			</Fragment>
		</Layout>
	);
}

export default App;
