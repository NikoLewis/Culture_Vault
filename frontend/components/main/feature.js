import React from 'react';
import store from '../../store/store.js'
import {getFeature} from '../../actions/feature-action.js'

const Feature = React.createClass({
	render(){
		console.log('FEATURE ===>',this.props.featureProps)
		// let feature = this.props.featureProps[0]
		return(
			<div>
			Feature
			Name: 
			Quote: 
			Image: 
			{store.dispatch(getFeature(2))}
			</div>
			)
		}
	
}) 

export default Feature;