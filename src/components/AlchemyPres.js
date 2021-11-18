import {connect} from 'react-redux'
import {dream,recall,addRevertedDream} from '../redux/actions'
import React from 'react'
import AlchemyProxy from './AlchemyProxy'

class AlchemyPress extends React.Component{

	constructor(props){
		super(props);
		
		this.state={
			strVal:"",
		}
		
		this.handleDream=this.handleDream.bind(this);
		this.handleRecall=this.handleRecall.bind(this);
		this.RevertedDream=this.RevertedDream.bind(this);
	}
	RevertedDream(){
		if(this.state.strVal.length==0)
			return;
		this.props.addRevertedDream(this.state.strVal)
		this.setState({strVal:""})
	}
	
	handleStrChange(nT){
		this.setState({strVal:nT})
	}
	
	handleDream(){
		if(this.state.strVal.length==0)
			return;
		this.props.dream(this.state.strVal);
		//this.props.dispatch(dream(this.state.strVal))
		this.setState({strVal:""})
	}
	
	handleRecall(){
		this.props.recall(this.state.strVal);
		//this.props.dispatch(recall())
	}

	render(){
	
		return( 
			<>
			<div>
			<input value={this.state.strVal} onChange={(e)=>this.handleStrChange(e.target.value)}/>
			<button onClick={this.handleDream}>Dream</button>
			<button onClick={this.RevertedDream}>RevertedDream</button>
			<button onClick={this.handleRecall}>Recall</button>
			</div>
			
			< AlchemyProxy />
			</>
			
		)
	}

}

const mapDispatchers2Props= (dispatch) =>{

	return {dispatch}
}



export default connect(null,{dream,recall,addRevertedDream})(AlchemyPress)