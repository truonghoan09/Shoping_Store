import { useSelector, useDispatch } from "react-redux";
import styles from "./Product.module.scss";
import { useState } from "react";
import uploadFileReducer from "@/redux/reducers/uploadFileReducer";
import { uploadFile } from "@/redux/actions";
import LoadingModal from "@/components/loadingModal/loadingModal";

const Product = () => {
    const theme_now = useSelector(state => state.setThemeReducer.theme);

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
    const dispatch = useDispatch();

    const handleUpload = () => {
        if (selectedFile) {
          dispatch(uploadFile(selectedFile, onProgress));
        }
    };

    const loading = useSelector(state => state.uploadFileReducer.loading)
    const error = useSelector(state => state.uploadFileReducer.error)

    
    const onProgress = (progress) => {
        setUploadProgress(progress);
    };

    return (
        <>
            <div className={`${styles.container} ${styles[theme_now]}`}>This is product Page</div>
            <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          {selectedFile.type.startsWith('image') ? (
            <img src={URL.createObjectURL(selectedFile)} alt="Uploaded" />
          ) : selectedFile.type.startsWith('video') ? (
            <video controls>
              <source src={URL.createObjectURL(selectedFile)} />
            </video>
          ) : (
            <p>File không được hỗ trợ.</p>
          )}
        </div>
      )}
      <div onClick={handleUpload}>Start upload to fireBase</div>
      {loading ? <LoadingModal/> : null}
      {error ? <div>error: {error}</div> : null}
        </>
    )
}

export default Product;