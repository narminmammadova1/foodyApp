// import { useState } from "react";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { fileStorage } from "../server/configs/firebase";

// const useProductUpload = () => {
//   const [uploading, setUploading] = useState(false);
//   const [productImageUrl, setProductImageUrl] = useState("");

//   const handleProductFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setProductImageUrl(URL.createObjectURL(file));
//   };

//   const handleProductUpload = async (file: File) => {
//     if (!file) return;

//     setUploading(true);
//     try {
//       const uniqueId = `${new Date().getTime()}_${Math.floor(Math.random() * 10000)}`;
//       const storagePath = `products/${file.name}_${uniqueId}`;
//       const imageRef = ref(fileStorage, storagePath);

//       const snapshot = await uploadBytes(imageRef, file);
//       const downloadURL = await getDownloadURL(snapshot.ref);

//       setProductImageUrl(downloadURL);

//       return downloadURL;
//     } catch (error) {
//       console.error("Error during file upload:", error);
//       throw error;
//     } finally {
//       setUploading(false);
//     }
//   };

//   return { handleProductFileChange, handleProductUpload, uploading, productImageUrl };
// };

// export default useProductUpload;