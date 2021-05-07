import { useContext, useEffect, useState } from 'react';
import { context, StateInterface, TypeEnums } from '../context';

const Notification = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  //@ts-expect-error 2461
  const [state, dispatch] = useContext(context);
  const { notificationMessage } = state as StateInterface;

  useEffect(() => {
    if (notificationMessage == '') {
      return;
    }
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
    setTimeout(() => {
      setVisible(false);
      dispatch({ type: TypeEnums.changeNotification, payload: '' });
    }, 3400);
  }, [notificationMessage]);

  const notificationClickHandler = () => {
    setVisible(false);
  };

  const baseClassName =
    'rounded shadow-lg w-auto m-auto my-0 cursor-pointer items-center transition-all duration-200 ease-in-out bg-gray-700 opacity-100 text-white text-sm px-2 py-1';
  const visibleClass = baseClassName + ' opacity-100';
  const hiddenClass = baseClassName + ' opacity-0';

  return (
    <div className={visible ? visibleClass : hiddenClass} role="alert" onClick={notificationClickHandler}>
      {/* <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
      </svg> */}
      <p className="text-sm">{notificationMessage}</p>
    </div>
  );
};

export default Notification;
