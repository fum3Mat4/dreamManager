

import {connect,useSelector} from 'react-redux'
import React from 'react';

import {getDreams} from '../redux/selectors'


function AlchemyProxy ({drms,getDreams}) {
	const {dreams,deepdreams} = useSelector(state=>state.dreamManager)
		
	return (
	<>
	<div> 
	<h1>Dreams</h1>
	<ul>
		{dreams.map(ad=>( 
			<li>
				{ad}
			</li>
		))}
		
	</ul> 
	
	</div>
	
	<h1>Memories</h1>
	<div> 
	<ul>
		{deepdreams.map(ad=>( 
			<li>
				{ad}
			</li>
		))}
		
	</ul> 
	
	</div>
	</>
	)


}


const mapState2Props= state =>{
	const {dreamManager}= state;
	const drms=dreamManager.dreams; 
	return {drms}
}

export default connect(mapState2Props,{getDreams})(AlchemyProxy);