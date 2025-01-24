import { useState } from "react";
import viteLogo from '/vite.svg';
import './App.css'
import { Authenticator, Button, Flex } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";

// Configure Amplify
Amplify.configure(outputs);

export default function App() {
  const [image, setImage] = useState(null);

  // Handle file selection (either from drag and drop or file input)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle drag and drop functionality
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          style={{ height: '95vh', padding: '1rem' }}
        >
          {/* Sign Out Button */}
          <Button
            id="signOutButton"
            onClick={signOut}
            style={{
              position: 'absolute', // Changed to absolute positioning
              top: '10px',
              right: '10px',
            }}
          >
            Sign Out
          </Button>
  
          {/* Title */}
          <h1 style={{ margin: 0, marginTop: '3rem' }}>Image Recognition Tool</h1>
  
          {/* Drag and Drop Area */}
          <div
            className="drag-drop-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
              width: '100%',
              height: '200px',
              border: '2px dashed #666',
              borderRadius: '8px',
              textAlign: 'center',
              paddingTop: '50px',
              marginTop: '6rem', 
              position: 'relative',
            }}
          >
            <p
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                margin: 0,
              }}
            > 
              Drag and drop an image here.
            </p>
  
            {/* Vite Logo */}
            <img
              src={viteLogo}
              alt="Vite Logo"
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px', // Center horizontally
                height: '25px',
                width: '25px',
              }}
            />
  
            {/* File Input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{
                display: 'none',
              }}
              id="fileInput"
            />
          </div>
  
          {/* Display the selected image */}
          {image && (
            <div style={{ marginTop: '20px' }}>
              <img src={image} alt="Selected" style={{ maxWidth: '100%', maxHeight: '400px' }} />
            </div>
          )}
        </Flex>
      )}
    </Authenticator>
  );
  

}