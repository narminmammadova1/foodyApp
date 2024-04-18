import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileStorage } from "../server/configs/firebase";
import { ChangeEvent, SetStateAction, useState } from "react";
import { Dispatch  } from 'react';


interface UploadProps{
   handleFileChange:(e: ChangeEvent<HTMLInputElement>) => void;
  //  handleUpload:(file:File)=>void | undefined;
  handleUpload: (file: File) => Promise<void>;

    downloadURL:string;
    
    // setDownloadURL:Dispatch<SetStateAction<string | null>>;

    setDownloadURL: Dispatch<SetStateAction<string>>;


     file:File | null;
    //  setFile:React.Dispatch<React.SetStateAction<string | null >>;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    }


const UseFileUpload = ():UploadProps => {
  const [file, setFile] = useState<File | null>(null);
  const [downloadURL, setDownloadURL] = useState("");


  // const[productFile,setProductFile]=useState(null)
  // const [downloadProductURL, setDownloadProductURL] = useState("");

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile: File | null = e.target.files?.[0] || null;
    setFile(selectedFile);    // setNewFile(selectedFile);
    setFile(selectedFile);


    if (selectedFile) {
      const storageRef = ref(fileStorage, 'uploads/' + selectedFile.name);
      await uploadBytes(storageRef, selectedFile).then(() => {
        console.log("File uploaded successfully");
      }).catch((error) => {
        console.error("Error uploading file:", error);
      });
    }
  }

  const handleUpload = async (file:File) => {
    if (file) {
      const storageRef = ref(fileStorage, 'uploads/' + file.name);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setDownloadURL(url);
      console.log("File uploaded successfully");
      console.log("url", url);
    }
  }

  return { handleFileChange, handleUpload, downloadURL, setDownloadURL ,file,setFile};
}
export default UseFileUpload;