import SignUp from "./components/auth/Registration";
import { Routes, Route, Navigate } from "react-router-dom";
import SignInSide from "./components/auth/SignIn";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { auth } from "./api/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { RoutesName } from "./types/enums/routes";
import { FormPage } from "./pages/FormPage";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleOnAuthStateChange = (user: any) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, handleOnAuthStateChange);
    return subscriber;
  }, []);

  if (isLoading) return;

  return (
    <>
      <Routes>
      <Route
              path={RoutesName.FORM_PAGE}
              element={<FormPage />}
            />
        {user ? (
          <>
            <Route
              path="/"
              element={<Dashboard user={user} isLoading={isLoading} />}
            />
            <Route
              path={RoutesName.DASHBOARD}
              element={<Dashboard user={user} isLoading={isLoading} />}
            />
            <Route
              path="*"
              element={<Navigate to={RoutesName.DASHBOARD}/>}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<SignInSide />} />
            <Route path={RoutesName.SIGN_IN} element={<SignInSide />} />
            <Route path={RoutesName.SIGN_UP} element={<SignUp />} />
            <Route path="*" element={<Navigate to={RoutesName.SIGN_IN} />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
