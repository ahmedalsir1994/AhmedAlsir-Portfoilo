import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Canvas Error Boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='w-full h-screen bg-black flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-white text-lg mb-4'>Loading 3D Content...</p>
            <div className='w-8 h-8 border-4 border-[#915EFF] border-t-transparent rounded-full animate-spin mx-auto' />
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
