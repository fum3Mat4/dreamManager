
const initialState={
	dreams:[],
	deepdreams:[],
	forgetButKeep:[],
};

export default function(state=initialState,action){

	if (action.type=="dream"){
		const {adream} = action.payload
		state.dreams.push(adream);
		return {
			...state,
			dreams:state.dreams,
			deepdreams:state.deepdreams,
			forgetButKeep:state.forgetButKeep,
		}
	}
	else if(action.type=="recall"){
		if(state.dreams.length>0){
			state.deepdreams.push(state.dreams.pop())
		}
		return {
			...state,
			dreams:state.dreams,
			deepdreams:state.deepdreams,
			forgetButKeep:state.forgetButKeep,
		}
	}
	else{
		return state;
	}
}