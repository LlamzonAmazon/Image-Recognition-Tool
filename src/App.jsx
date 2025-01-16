import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Authenticator, Button, Flex } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";

// Configure Amplify
Amplify.configure(outputs);

export default function App() {

  return (
    <Authenticator>
      {({ signOut }) => (
        <Flex direction="column" justifyContent="center" alignItems="center">
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Image Recognition Tool</h1>
          <Button id="signOutButton" onClick={signOut}>Sign Out</Button>
        </Flex>
      )}
    </Authenticator>
  );
}
