// ! ============ Error Boundaries ============
// ? Using CBC

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    console.log("I am from ErrorBoundary!!!");

    if (this.state.hasError) {
      return (
        <>
          <h1>Sorry user!!! </h1>
          <p>Something went Wrong</p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
