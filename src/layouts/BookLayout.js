// ext imports
import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router';

// int imports
import { TutorialView, ChapterView } from '../views';
import { ChapterSearch } from '../components';

class BookLayout extends Component {
	
	render() {
		return (
			<div>
				<ChapterSearch />
			
				<Switch>
					<Route exact path="/book" component={ TutorialView } />
					<Route exact path="/book/:bookName/:chapterNumber" component={ ChapterView } />
					<Route render={() => <Redirect to="/book" />} />
				</Switch>
			</div>
		)
	}

}

export default BookLayout;
