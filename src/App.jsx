import { useState } from "react";
import { Authenticator, Button, Flex } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";

// Configure Amplify
Amplify.configure(outputs);

export default function App() {
  // Move useState to the top level
  const [count, setCount] = useState(0);

  return (
    <Authenticator>
      {({ signOut }) => (
        <Flex direction="column" justifyContent="center" alignItems="center">
          <h1>Vite + React Project by Thomas</h1>
          <div className="card">
            <button onClick={() => setCount(count + 1)}>
              count is {count}
            </button>
            <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
          </div>
          <Button onClick={signOut}>Sign Out</Button>
        </Flex>
      )}
    </Authenticator>
  );
}
