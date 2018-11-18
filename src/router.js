// ext imports
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// int imports
import { BookLayout, LinkLayout } from './layouts';

const Router = () => (
	<Switch>
		<Route path="/book" component={ BookLayout } />
		<Route path="/:bookName/:chapterNumber/:verseNumber" component={ LinkLayout } />
		<Route render={() => <Redirect to="/book" />} />
	</Switch>
)

export default Router;
