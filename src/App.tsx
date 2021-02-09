import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryParamProvider } from 'use-query-params';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Store } from './lib/store';
import { buildTheme, GlobalStyle } from './styling';
import { StoreContext } from './lib/react';
import Browser from './components/Browser';
import New from './components/New';
import { AddressBar } from './components/AddressBar';

/** Initialize the store */
const store = new Store('https://surfy.ddns.net/');

/** Entrypoint of the application. This is where providers go. */
function App(): JSX.Element {
  return (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        {/* Used for getting / setting query parameters */}
        <QueryParamProvider ReactRouterRoute={Route}>
          <ThemeProvider theme={buildTheme()}>
            <GlobalStyle />
            <AddressBar />
            <Switch>
              <Route path='/new'>
                <New />
              </Route>
              <Route path='/'>
                <Browser />
              </Route>
            </Switch>
          </ThemeProvider>
        </QueryParamProvider>
      </BrowserRouter>
    </StoreContext.Provider>
  );
}

export default App;