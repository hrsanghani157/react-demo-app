import { Navigate, Route, Routes } from "react-router-dom";
import KKDemo from "./pages/KKDemo";
import Layout from "./pages/layout";
import PracticeExercise from "./pages/PracticeExercise";
import PracticeTask from "./pages/PracticeTask";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace={<PracticeExercise />} />} />
          <Route path="practiceExercise" element={<PracticeExercise />} />
          <Route path="kkdemo" element={<KKDemo />} />
          <Route path="practiceTask" element={<PracticeTask />} />
          <Route path="*" element={<h1>No Page Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
