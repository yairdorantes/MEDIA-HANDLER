import { Toaster } from "react-hot-toast";
import ShowImages from "./components/ShowImages";
import UploadFiles from "./components/UploadFiles";
import ShowFolders from "./components/ShowFolders";
import Paths from "./router/Paths";
function App() {
  return (
    <>
      <Paths>
        {/* <UploadFiles /> */}
        <div></div>
        <Toaster />
        <ShowFolders />
        {/* <ShowImages /> */}
      </Paths>
    </>
  );
}

export default App;
