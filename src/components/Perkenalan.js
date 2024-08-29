import React from 'react';

const Perkenalan = (props) => {
	return (
		<div>
			<h1>my name is {props.name}</h1>
			<p>My hobby is {props.hobby}</p>
		</div>
	);
};

export default Perkenalan;
