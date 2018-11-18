// ext imports
import React from 'react';

// int imports
import { TutorialContainer } from './styled';

const TutorialView = () => (
	<TutorialContainer>
		<h1>Welcome to Linking Novum</h1>
		<h2>Steps to create a Link</h2>
		<ol>
			<li>1. Select book and the chapter from the top.</li>
			<li>2. Hover over the verse you want your section to start with.</li>
			<li>3. Click on the + to create a new link.</li>
		</ol>
	</TutorialContainer>
);

export default TutorialView;
