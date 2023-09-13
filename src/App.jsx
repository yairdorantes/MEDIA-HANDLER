import { Toaster } from "react-hot-toast";
import "./App.css";
import ShowImages from "./components/ShowImages";
import UploadFiles from "./components/UploadFiles";
function App() {
  return (
    <>
      {/* <UploadFiles /> */}
      <div></div>
      <Toaster />

      <ShowImages></ShowImages>
    </>
  );
}

export default App;
