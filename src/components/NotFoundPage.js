"use strict";

import React, {Component} from 'react';
import Router, {Link} from 'react-router';

export default class NotFoundPage extends Component {
	render () {
		return (
			<div>
				<h1>Page not found</h1>
				<p>Woops! Sorry, there is nothing to see here.</p>
        <p><Link to="app">Back to Home</Link></p>
			</div>
		);
	}
}
