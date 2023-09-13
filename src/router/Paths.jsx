import { Route, Routes } from "react-router-dom";
import FoldersContent from "../components/FoldersContent";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="" />
      <Route path="/:folder/content" element={<FoldersContent />} />
    </Routes>
  );
};

export default MyRouter;
