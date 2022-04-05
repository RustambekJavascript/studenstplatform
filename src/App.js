import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutMenu from "./comps/LayoutMenu";
import "antd/dist/antd.css";

import { Teachers, Students } from "./page";

function App() {
  return (
    <div>
      <BrowserRouter>
        <LayoutMenu>
          <Routes>
            <Route path="/">
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
            </Route>
          </Routes>
        </LayoutMenu>
      </BrowserRouter>
    </div>
  );
}

export default App;
