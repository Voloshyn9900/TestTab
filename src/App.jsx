import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import ScheduleTableFirst from "./Components/TableFirstV/Table1";
import ScheduleTableSecond from "./Components/TableSecondV/Table2";

import './App.css'
import { FormSchedule } from "./Components/CreateTab/CreateTab";

function App() {

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: "100vw",
            height: "100vh",
            backgroundSize: "cover",
          }}
        >
          {/* <PreLoader /> */}
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ScheduleTableSecond/>} />
          <Route path="/create" element={<FormSchedule />}></Route>
          <Route path="/table_v1" element={<ScheduleTableFirst />}></Route>
          <Route path="/table_v2" element={<ScheduleTableSecond />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App
