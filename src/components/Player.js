import React from 'react';

const Player = (props) => {
	return (
		<section>
			<h4>Player Name: {props.userName}</h4>
			<h5>Platform: {props.platform}</h5>
			<h5>Rank: {props.rankName + ' ' + props.rankDiv}</h5>
		</section>
	);
};

export default Player;
