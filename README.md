# Set Up Continuous Integration and Deployment on EC2 Using Docker

Set up your website effortlessly on EC2 with Docker, using a simple CI/CD pipeline. Automate the deployment process, ensuring your website is always up-to-date. Experience seamless hosting with Docker on EC2.

## Project Overview

- **AWS Service**: EC2
- **Framework**: React.js
- **CI/CD**: Github Action
- **Tool**: Dcoker
- **Libraries**: React-simple-chatbot, React Router DOM, FontAwesomeIcon

## Features

- Enhance appointment scheduling with specialists seamlessly through optimized workflows.
- Enable virtual consultations for precise medical advice with a user-friendly interface.
- Guarantee a consistent user experience on all devices with a responsive UI.
- Implement React-Toastify for comprehensive notifications and React Router DOM for smooth navigation.
- Enhance visual appeal with FontAwesomeIcon for icons across your application.
- Simplify deployment and sharing by utilizing GitHub Pages, coupled with Docker and CI/CD pipelines on EC2.

## Screenshots

### Hero Section

![Health-Plus Image-1](https://i.postimg.cc/0Q4839KN/Health-Plus-Image1.png)

## Getting Started With React App

To run the project locally:

1. Clone this repository: `git clone https://github.com/jay659/HealhCare-Website-CI-CD.git`
2. Navigate to the project directory: `cd HealhCare-Website-CI-CD`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit: `http://localhost:3000/`

## Deployment Steps On AWS
To run the project EC2:

1. Create EC2 Instance
2. Connect to Your EC2 Instance
3. Install Docker Dependencies `sudo apt install apt-transport-https ca-certificates curl software-properties-common`
4. Add Docker's GPG Key: `curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
5. Add Docker Repository: `sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`
6. Update Package Repositories (Again): `sudo apt update`
7. Install Docker Engine : `sudo apt install docker-ce`
8. Verify Docker Installation : `sudo docker --version`
9. Manage Docker as a Non-root User : `sudo usermod -aG docker ${USER}`
10. Start and Enable Docker Service : `sudo systemctl start docker``sudo systemctl enable docker`

## CI/CD Integration with Docker and EC2 using Github 

Follow below steps for integration 

1. Add Six Variables in Repository secrets in **Github Repository Setting > Secrates and Variabes > Actions**.
 - DOCKER_HUB_USERNAME : its user name of docker hub
 - DOCKER_HUB_PASSWORD : PAssword of Docker hub
 - EC2_HOST : Public IPv4 DNS Of EC2 Inatance
 - EC2_PORT : which should be 22
 - EC2_SSH_KEY : .pem File content
 - EC2_USERNAME : ubuntu(in my case since it is ubuntu Os)
2. Change you Docker Image name according to Project Need in my case i have given healthcare-app.
   

   
## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.


