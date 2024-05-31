TicTacToe with AWS Cognito

Name: Ziad Oun

ID: 269538

Group: 3

Date: 27/05/2024

Environment Architecture

This project is a TicTacToe game application that uses AWS Cognito for user authentication and authorization.


Preview

![Screenshot 2024-05-27 215525](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/0ff5c845-f3f3-4d50-b5a1-b1f915309291)

![Screenshot 2024-05-27 215536](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/19150a17-cde0-4ff3-b32e-3ce0659c6459)

![Screenshot 2024-05-27 215556](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/3d169ae0-1a83-4951-a315-6f21ffcd1d8d)

![Screenshot 2024-05-27 220026](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/9eef294a-c08a-4d0a-b14f-9f686c725a53)

![Screenshot 2024-05-27 220043](https://github.com/pwr-cloudprogramming/a10-OUN123/assets/116722639/025d1d6f-11dc-4897-8cb7-e52b7d9125c0)

Reflections

What Did You Learn?

I gained knowledge about controlling user authorization and authentication with AWS Cognito.

I learned how to configure and launch a secure AWS application.

Additionally, I discovered how to use AWS Cognito to add permission and authentication.

What Obstacles Did You Overcome?

It was difficult for me to fix Docker Compose.

I made the template and backend functional.

For user permission and authentication, I integrated AWS Cognito.

What Helped You Most in Overcoming Obstacles?

It was quite helpful to go to the AWS documentation and examples.

Overcoming the challenges required a combination of hands-on expertise and experimentation with various solutions.

Was There Something That Surprised You?

The simplicity and potency of AWS Cognito's user authentication management astonished me.

The ease with which AWS Cognito adds user authentication and authorization also pleased me.

AWS Cognito Integration

Backend Modifications

Dependencies for JSON Web Tokens (JWT) and the AWS SDK have been added.

Using the AWS SDK, an authentication service was developed to validate user information with Cognito.

Specified endpoints for which permission is needed.

Frontend Modifications

Set up the AWS SDK to establish a connection with the AWS Cognito user pool.

Distinct forms for login, verification, and registration were created.

Tokens for access and refresh are saved in localStorage following a successful login.

Additional logic to automatically renew the access token as required.

Added access tokens to requests sent to the backend by implementing frontend logic.

Added a logout feature that alerts Cognito to the end of the session and removes any remaining session data.

