import React, { useState } from "react";
import Image from "next/image";
import FilePreview from "./FilePreview";
import styles from "styles/DropZone.module.css";

const DropZone = ({ data, dispatch }) => {
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let files = [...e.dataTransfer.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));
      dispatch({ type: "ADD_FILE_TO_LIST", files });
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  const handleFileSelect = (e) => {
    let files = [...e.target.files];

    if (files && files.length > 0) {
      const existingFiles = data.fileList.map((f) => f.name);
      files = files.filter((f) => !existingFiles.includes(f.name));
      dispatch({ type: "ADD_FILE_TO_LIST", files });
    }
  };

  const uploadFiles = async () => {
    let files = data.fileList;

    const formData = new FormData();

    files.forEach((file) => formData.append("files", file));

    const response = await fetch("/api/fileupload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      alert("Files uploaded successfully");
    } else {
      alert("Error uploading files");
    }
  };

  return (
    <>
      <div
        className={styles.dropzone}
        onDrop={(e) => handleDrop(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDragEnter={(e) => handleDragEnter(e)}
        onDragLeave={(e) => handleDragLeave(e)}
      >
        <Image src="/upload.svg" alt="upload" height={30} width={30} />

        <input
          id="fileSelect"
          type="file"
          multiple
          className={styles.files}
          onChange={(e) => handleFileSelect(e)}
        />
        <label htmlFor="fileSelect">Adaugati pozele</label>
      </div>
      <FilePreview fileData={data} />

      {data.fileList.length > 0 && (
        <button className={styles.uploadBtn} onClick={uploadFiles}>
          Upload
        </button>
      )}
    </>
  );
};

export default DropZone;
