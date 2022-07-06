import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme  from 'assets/styles/themes';
import './App.css';
import Router from './Router'

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <ThemeProvider theme={ theme }>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
