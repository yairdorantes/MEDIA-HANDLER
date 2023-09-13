import { Toaster } from "react-hot-toast";
import ShowImages from "./components/ShowImages";
import UploadFiles from "./components/UploadFiles";
import ShowFolders from "./components/ShowFolders";
function App() {
  return (
    <>
      {/* <UploadFiles /> */}
      <div></div>
      <Toaster />
      <ShowFolders />
      {/* <ShowImages /> */}
    </>
  );
}

export default App;
