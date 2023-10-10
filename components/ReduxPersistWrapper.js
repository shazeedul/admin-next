import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store";

const ReduxPersistWrapper = ({ children }) => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  );
};

export default ReduxPersistWrapper;
