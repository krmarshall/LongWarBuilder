import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Empty = (): JSX.Element => {
  const history = useHistory();

  useEffect(() => {
    history.replace('/build');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Loading</div>;
};

export default Empty;
