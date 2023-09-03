import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        {/*하나씩만 렌더링 하기 위함*/}
        <Route path="/movie/:id" element={<Detail />} />
        {/*:뒤에 있는 이름의 파라미터가 변수를 받을 것이라고 인식*/}
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

//Switch를 Routes가 대체함
