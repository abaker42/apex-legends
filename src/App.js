import { Fragment, useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player';

function App() {
	console.log('im in app');
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [transData, setTransData] = useState({
		userName: '',
		platform: '',
		rankName: '',
		rankDiv: '',
	});

	useEffect(() => {
		const fetchPlayer = async () => {
			setError(null);
			setIsLoading(true);
			try {
				const resp = await fetch(
					'https://api.mozambiquehe.re/bridge?auth=142181252df5d8e977810798153249ee&player=icecold_phenom&platform=PS4'
				);
				if (!resp.ok) {
					console.log('im looking down');
					throw new Error('Username/Platform invalid!');
				}
				const data = await resp.json();
				console.log(data);
				// const transformData = data.results.map((stats) => {
				// 	return {
				// 		userName: stats.global.name,
				// 		platform: stats.global.platform,
				// 		rankName: data.global.rank.rankName,
				// 		rankDiv: data.global.rank.rankDiv,
				// 		//lastLegend: legends.selected.LegendName,
				// 	};
				//});

				setTransData({
					userName: data.global.name,
					platform: data.global.platform,
					rankName: data.global.rank.rankName,
					rankDiv: data.global.rank.rankDiv,
				});

				console.log(transData);
				const playerData = [];
				for (const key in data) {
					playerData.push();
				}
			} catch (error) {
				setError(error.message);
			}
			setIsLoading(false);
		};

		fetchPlayer();
	}, []);

	return (
		<Fragment>
			<h2>Welcome to Apex</h2>
			<Player
				userName={transData.userName}
				platform={transData.platform}
				rankName={transData.rankName}
				rankDiv={transData.rankDiv}
			/>
		</Fragment>
	);
}

export default App;
