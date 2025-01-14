import React, { Component, ErrorInfo } from 'react';
import './ErrorBoundary.css';

interface State {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<React.PropsWithChildren, State> {
  state: State = {
    hasError: false,
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error.message,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorBoundary">
          <h2>Something went wrong!</h2>
          <p>{this.state.errorMessage}</p>
          <button onClick={this.handleReload}>Reload</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
