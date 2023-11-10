import React, { useState, useEffect } from 'react';
import { useCallback } from 'react';
import Tracker from './Tracker';

const Player = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const [transData, setTransData] = useState({
		userName: '',
		platform: '',
		rankName: '',
		rankDiv: '',
		lastLgnd: '',
		legendImg: '',
		trackers:[],
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
				trackers: data.legends.selected.data,
				rankScore: data.global.rank.rankScore,
				toNextLevel: data.global.toNextLevelPercent,
				legendImg: data.legends.selected.ImgAssets,
			});
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		console.log('use effect ran props: ' + props);
		fetchPlayer(props.player.userName, props.player.system);
	}, [fetchPlayer, props]);

	if (isLoading) {
		return <p>Searching for Player...</p>;
	}

	if (error) {
		return <p>Uh Oh... {error}</p>;
	}
	return (
		<section>
			<h4>Player Name: {transData.userName}</h4>
			<h5>Last Legend: {transData.lastLgnd}</h5>
			<h5>Platform: {transData.platform}</h5>
			<h4>Rank Score: {transData.rankScore}</h4>
			<h4>% to next level: {transData.toNextLevel}%</h4>
			<h5>Rank: {transData.rankName + " " + transData.rankDiv}</h5>
			<h4>Trackers:: </h4>
			<h5>
			{transData.trackers.map((tracker)=>(
				<Tracker key={tracker.name}
					name= {tracker.name}
					value = {tracker.value}/>
			))}
			</h5>
			{/* <h5>
				{transData.trackers[1].name}: {transData.trackers[1].value}
			</h5>
			<h5>
				{transData.trackers[2].name}: {transData.trackers[2].value}
			</h5> */}
			<img src={transData.legendImg.icon} alt='' />
		</section>
	);
};

export default Player;
