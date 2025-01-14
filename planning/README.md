# Project Plan & Management

This folder contains planning documents and process documentation.

## Flow
<ol>
    <li>User enters site – Go to 2.</li>
    <li>Account page
        <ol>
            <li>User logs in – Go to 3.</li>
            <li>User creates account – Go to 3.</li>
        </ol>
    </li>
    <li>Main Menu
        <ol>
            <li>Settings – Settings menu pops up</li>
            <li>Create/Choose Topic – all subsequent image uploads will be categorized under this topic</li>
            <li>User uploads image – AI will begin processing the image, and then create a textual summary of what it sees</li>
            <li>User is prompted to upload another image</li>
            <li>User signs out – Go to 2.</li>
        </ol>
    </li>
</ol>

## Development Process
<ol>
    <li>Control flow diagram ✅</li>
    <li>Create wireframe to identify features ✅</li>
    <li>Create React app with Vite ✅</li>
    <li>Host with AWS Amplify ✅</li>
    <li>Add user authentication with Amplify ✅</li>
    <li>Create the layout of the main page</li>
    <li>Implement AWS Rekognition</li>
    <li></li>
</ol>

## Resources to Use 
> Subject to change

### Languages
- React
- HTML
- CSS

### AWS Features

<ul>
    <li>Web Hosting
        <ul><li>Amplify</li></ul>
    </li>
    <li>Account Handling 
        <ul>
            <li>Amplify Auth, Data, Storage</li>
        </ul>
    </li>
    <li>Image Processing & Storing
        <ul>
            <li>Rekognition (via Lambda?)</li>
            <li>S3</li>
        </ul>
    </li>
    <li>Backend
        <ul><li>Lambda + API Gateway</li></ul>
    </li>
</ul>
