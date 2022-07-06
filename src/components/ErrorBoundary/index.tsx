import React from 'react';

interface IProps {
    children: React.ReactChild;
}

class ErrorBoundary extends React.Component<IProps> {
    state =  {
        hasError: false,
        errorMessage: '',
    }
  
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { 
            hasError: true,
            errorMessage: error.message
        };
    }

    /*
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }
    */
  
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return ( <h3>Aconteceu algum erro. {this.state.errorMessage} </h3> );
        }
  
        return this.props.children; 
    }
}

export default ErrorBoundary;