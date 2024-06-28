// Import necessary hooks and components at the top of your file
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import TextAreaForm from '@/Components-Dish-Dash/TextAreaForm';

const FoodForm = () => {
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Convert the file to a base64 string
        const base64String = e.target.result.replace("data:", "").replace(/^.+,/, "");
        // Store the base64 string in the state
        setImages(prevImages => [...prevImages, base64String]);
        // Generate a URL for the image preview
        const imageUrl = URL.createObjectURL(file);
        setPreviewUrls(prevUrls => [...prevUrls, imageUrl]);
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  // Function to clear the preview URLs
  const clearPreviewUrls = () => {
    setPreviewUrls([]);
  };

  return (
    <section className='flex justify-around  md:w-[80rem] h-[700px]'>
      <div className='bg-gray-700 w-[35rem] rounded-md flex-col gap-2 flex-1 justify-center backdrop:backdrop-opacity-100'>
      <div {...getRootProps()} style={{ border: '2px dashed #ccc', borderRadius: '5px', padding: '50px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <div className='flex-col mt-2 justify-center flex-1 text-center p-3' >
        <button onClick={clearPreviewUrls} className='bg-gray-400 h-9 p-2 rounded-md'>Clear Previews</button>
        <h4 className='mt-5 text-[20px] font-semibold'>Image Previews:</h4>
        <div className='flex-1 flex-wrap outline-dashed outline-white w-[450px] p-2 h-[400px] mt-2 rounded-md'>
          {previewUrls.map((imageUrl, index) => (
            <img src={imageUrl} alt={`Preview ${index}`} key={index} style={{ width: '200px', height: 'auto' }} />
          ))}
        </div>
      </div>
    </div>
    <div className='!text-white w-full'>
      <TextAreaForm/>
    </div>
    </section>
  );
};

export default FoodForm;
