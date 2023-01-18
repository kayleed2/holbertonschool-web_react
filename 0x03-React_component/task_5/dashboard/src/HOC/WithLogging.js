import React from 'react';

const WithLogging = (Comp) => {
  const name =
    Comp.displayName || Comp.name || 'Component';

  class toConsole extends React.Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <Comp {...this.props} />;
    }
  }
  toConsole.displayName = `WithLogging(${name})`;
  return toConsole;
};

export default WithLogging;
