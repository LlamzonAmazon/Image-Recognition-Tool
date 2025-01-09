# Project Plan & Management

## Goal
This is an AI-powered image recognition tool. Users can log on or sign up to use this tool. The point of having this tool be account-based is that user data will be stored so that they can return to the tool with their information and past uses saved. This account-based capability will be facilitated by AWS. I will use AWS to create user authentication and cloud-based data storage for this tool. Hopefully, by the end of this project I have learned how to integrate AI functionality in a web-based service, gained useful experience with a cloud-computing service (AWS), and improved my front-end development skills with something like React. 

## Flow
<ol>
    <li>A user enters the site</li>
    <li>Account page
        <ol>
            <li>User logs in – go to 3.</li>
            <li>User creates account – go to 4.</li>
        </ol>
    </li>
    <li>Main Menu
        <ol>
            <li>Settings – Settings menu pops up</li>
            <li>Create/Choose Topic – all subsequent image uploads will be categorized under this topic</li>
            <li>User uploads image – AI will begin processing the image, and then create a textual summary of what it sees</li>
            <li>User is prompted to upload another image</li>
        </ol>
    </li>
</ol>

## Development Plan
<ol>
    <li>Control flow diagram ✅</li>
    <li>Create wireframe to identify features ✅</li>
    <li>Understand how to implement AWS features</li>
    <ul>
        <li>Goal is to understand the order in which development should occur</li>
    </ul>
    <ol>
        <li>Amplify (Frontend)</li>
        <li>Cognito (User Authentication)</li>
        <li>Rekognition (Image Processing)</li>
        <li>S3 (Data Storage)</li>
        <li>Lambda (Backend) + API Gateway</li>
    </ol>
    <li></li>
</ol>

## Resources to Use 
> Subject to change
### Languages
- React
- HTML
- CSS

### AWS Features
- Amplify (Web hosting)
- Cognito (Account handling)
- S3 (Image Storage)
- Rekognition via Lambda (Image processing)
- Lambda + API Gateway? (Backend shenanigans)
