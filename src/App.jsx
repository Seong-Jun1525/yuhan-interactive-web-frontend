import { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientIndex from "./client/ClientIndex";
import DeptCanvasLayout from "./client/components/canvas_layout/DeptCanvasLayout";
import ErrorPage from "./client/components/error/ErrorPage";
import MemberIndex from "./client/components/member/MemberIndex";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<ClientIndex />} errorElement={<ErrorPage />} />
          <Route path="/login" element={<MemberIndex value="login" />} errorElement={<ErrorPage />} />
          <Route path="/join" element={<MemberIndex value="join" />} errorElement={<ErrorPage />} />
          <Route path="/membermodify" element={<MemberIndex value="modify" />} errorElement={<ErrorPage />} />
          <Route path="/department/*" element={<DeptCanvasLayout />} errorElement={<ErrorPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
