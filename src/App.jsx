import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientIndex from "./client/ClientIndex";
import DeptCanvasLayout from "./client/components/canvas_layout/DeptCanvasLayout";
import ErrorPage from "./client/components/error/ErrorPage";
import store from "./redux/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<ClientIndex />} errorElement={<ErrorPage />} />
          <Route path="/department/*" element={<DeptCanvasLayout />} errorElement={<ErrorPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
