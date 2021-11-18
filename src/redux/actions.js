// redux/actions.js


export const dream = adream =>({
	type: "dream", payload:{adream}
})

export const recall = aflashback =>({
	type:"recall", payload:{aflashback}
})




export function addRevertedDream(adream){
	let arr=adream.split("");
	let revertedDream=arr.map((on,ox)=>{return arr[arr.length-ox-1]}).join("");
	return function(dispatch){
		dispatch(dream(revertedDream))
	}

}


