import { useState } from "react";
import { storage } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Profile() {
  // State to store uploaded file
  const [file, setFile] = useState("");
  const handleUpload = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container-sm d-flex justify-content-center align-items-center vh-100">
      <div className="input-group mb-3">
        <input type="file" className="form-control" />
        <button className="input-group-text" id="basic-addon2">
          Upload image
        </button>
      </div>
    </div>
  );
}

export default Profile;
