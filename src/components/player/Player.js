import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';

const Player = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const [transData, setTransData] = useState({
		userName: '',
		platform: '',
		rankName: '',
		rankDiv: '',
		lastLgnd: '',
	});
	//icecold_phenom  PS4
	const fetchPlayer = useCallback(async (user, system) => {
		setError(null);
		setIsLoading(true);
		try {
			const resp = await fetch(
				`https://api.mozambiquehe.re/bridge?auth=142181252df5d8e977810798153249ee&player=${user}&platform=${system}`
			);
			if (!resp.ok) {
				console.log('im looking down');
				throw new Error('Username/Platform invalid!');
			}
			const data = await resp.json();
			console.log(data); //keeping to see what other data I want to pull

			setTransData({
				userName: data.global.name,
				platform: data.global.platform,
				rankName: data.global.rank.rankName,
				rankDiv: data.global.rank.rankDiv,
				lastLgnd: data.legends.selected.LegendName,
			});
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		console.log('my props ' + props);
		fetchPlayer(props.player.userName, props.player.system);
	}, [fetchPlayer, props]);
	return (
		<section>
			<h4>Player Name: {transData.userName}</h4>
			<h5>Last Legend: {transData.lastLgnd}</h5>
			<h5>Platform: {transData.platform}</h5>
			<h5>Rank: {transData.rankName + ' ' + transData.rankDiv}</h5>
		</section>
	);
};

export default Player;
