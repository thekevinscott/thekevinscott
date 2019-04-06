import React from 'react';
import 'styles/styles.scss';

interface IProps {
  children: JSX.Element;
}

const App:React.SFC<IProps> = ({
  children,
}) => (
  <>
    {children}
  </>
);
export default App;
