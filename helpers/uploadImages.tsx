
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { fileStorage } from "../server/configs/firebase";
import { ChangeEvent, SetStateAction, useState } from "react";
import { Dispatch } from 'react';

interface UploadProps {
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleUpload: (file: File) => Promise<void>;
  downloadURL: string;
  setDownloadURL: Dispatch<SetStateAction<string>>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  productFile: File | null;
  setImageUrl:any,
  imageUrl: string; 
}

const UseFileUpload = (): UploadProps => {
  const [file, setFile] = useState<File | null>(null);
  const [downloadURL, setDownloadURL] = useState("");
  const [productFile, setProductFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(""); 

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile: File | null = e.target.files?.[0] || null;

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setImageUrl(imageUrl);
      setFile(selectedFile); 
    }
  };

  const handleUpload = async (file: File) => {
    if (file) {
      const storageRef = ref(fileStorage, 'uploads/' + file.name);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setDownloadURL(url);
      console.log("File uploaded successfully");
      console.log("url", url);
      console.log("downloaddddddddddurl",downloadURL);

    }
  }

  return { handleFileChange, handleUpload, downloadURL, setDownloadURL, file, setFile, productFile, setImageUrl, imageUrl };
}

export default UseFileUpload;