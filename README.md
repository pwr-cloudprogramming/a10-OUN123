# TicTacToe with AWS Cognito

- **Name:** Ziad Oun
- **ID:** 269538
- **Group:** 3
- **Date:** 27/05/2024

## Environment Architecture

This project is a TicTacToe game application that uses AWS Cognito for user authentication and authorization.


## Preview

![Screenshot 2024-05-27 215525](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/0ff5c845-f3f3-4d50-b5a1-b1f915309291)

![Screenshot 2024-05-27 215536](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/19150a17-cde0-4ff3-b32e-3ce0659c6459)

![Screenshot 2024-05-27 215556](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/3d169ae0-1a83-4951-a315-6f21ffcd1d8d)

![Screenshot 2024-05-27 220026](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/9eef294a-c08a-4d0a-b14f-9f686c725a53)

![Screenshot 2024-05-27 220043](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/025d1d6f-11dc-4897-8cb7-e52b7d9125c0)

## Reflections

### What Did You Learn?

- I gained knowledge about controlling user authorization and authentication with AWS Cognito.
- I learned how to configure and launch a secure AWS application.
-Additionally, I discovered how to use AWS Cognito to add permission and authentication.

### What Obstacles Did You Overcome?
- It was difficult to fix GHI.
- Made the template and backend functional.
- Integrated AWS Cognito for user permission and authentication.

### What Helped You Most in Overcoming Obstacles?
- AWS documentation and examples were very helpful.
- Hands-on expertise and experimentation with various solutions.

### Was There Something That Surprised You?
- The simplicity and potency of AWS Cognito's user authentication management.
- The ease of adding user authentication and authorization with AWS Cognito.

## AWS Cognito Integration

### Backend Modifications
- Added dependencies for JSON Web Tokens (JWT) and the AWS SDK.
- Developed an authentication service using the AWS SDK to validate user information with Cognito.
- Specified endpoints that require permission.

### Frontend Modifications
- Set up the AWS SDK to connect with the AWS Cognito user pool.
- Created distinct forms for login, verification, and registration.
- Saved tokens for access and refresh in `localStorage` after successful login.
- Added logic to automatically renew the access token as needed.
- Implemented frontend logic to include access tokens in requests to the backend.
- Added a logout feature that alerts Cognito to the end of the session and clears session data.
