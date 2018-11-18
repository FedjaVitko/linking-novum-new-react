// ext imports
import React, { Component } from 'react';

// int imports
import Router from './router';
import { GlobalStyle, AppContainer } from './styled';

class App extends Component {
  render() {
    return (
		<AppContainer>
			<Router />
			<GlobalStyle />
		</AppContainer>
    );
  }
}

export default App;
