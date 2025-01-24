import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Authenticator, Button, Flex } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";
import uploadIcon from './assets/image-upload-icon.svg';

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
        <Flex direction="column" justifyContent="flex-start" alignItems="flex-start" style={{ position: 'relative', height: '100vh' }}>
          
          {/* Sign Out Button - positioned at the top right corner */}
          <Button 
            id="signOutButton" 
            onClick={signOut} 
            style={{
              position: 'absolute', 
              top: '10px', 
              right: '10px'
            }}
          >
            Sign Out
          </Button>

          {/* Title */}
          <h1>Image Recognition Tool</h1>
          
          {/* Logo Section */}
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

          {/* Drag and Drop Area */}
          <div 
            className="drag-drop-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{
              width: '100%',
              height: '200px',
              border: '2px dashed #ccc',
              borderRadius: '8px',
              textAlign: 'center',
              paddingTop: '60px',
              position: 'relative'
            }}
          >
            <p>Drag and drop an image here</p>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange}
              style={{
                display: 'none'
              }}
              id="fileInput"
            />
            <label 
              htmlFor="fileInput" 
              style={{
                position: 'absolute', 
                top: '10px', 
                right: '10px',
                cursor: 'pointer'
              }}
            >
              <img 
                src="https://github.com/ant-design/ant-design-icons/blob/master/packages/icons-svg/svg/outlined/upload.svg" 
                alt="File Icon" 
                width="40"
              />
            </label>
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