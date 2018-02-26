import React from 'react'
import createClass from 'create-react-class'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types'
import PropsRoute from '../components/PropsRoute.js'
import AddressStack from '../components/AddressStack.js'

let syncInterval
export default createClass({
	displayName: 'AddressPage',
	contextTypes: {
		web3: PropTypes.object,
		contracts: PropTypes.array,
		account: PropTypes.string,
		myTokens: PropTypes.array,
	},
	render(){
		const { contracts } = this.context
		if( !contracts.Cryptogs){
			return (
				<div style={{opacity:0.3}}>Loading...</div>
			)
		}
		return (
			<Route
        render={({ location }) => (
          <div>
            <PropsRoute
              location={location}
              key={location.key}
              path="/address/:address"
              component={AddressStack}
							context={this.context}
            />
          </div>
        )}
      />
    )
	}
});
//