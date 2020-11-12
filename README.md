![](https://github.com/jack1yn/ilearn-git/blob/main/img/node2heroku.png)

A simple demo on CI/CD by deploying a Node app to Heroku. It is fast and easy to develop by using Express, a minimal and flexible **node**.js web application framework and deployed it to Heroku. 

GitHub integration and automatic deploys are enabled as Heroku has registered a webhook on GitHub repo. Heroku will auto deploy in real time when any changes committed at GitHub.  

![](https://github.com/jack1yn/ilearn-git/blob/main/img/node-heroku.png)



## Step 1: Create a simple Node App

1. Create a folder **ilearn-git** on your local machine. 
2. Add a file [package.json](https://github.com/jack1yn/ilearn-git/blob/main/package.json) and paste the same code.
3. Add a file [app.js](https://github.com/jack1yn/ilearn-git/blob/main/app.js) and paste the same code.
4. Run the following commands. 

	`npm install --save express body-parser`

	`node app.js`

5. Node will start the server and show the below message.

![](https://github.com/jack1yn/ilearn-git/blob/main/img/servermsg.png)

6. Test the Node app using Postman. Import Curl statement. 

	`Curl localhost:3000` 

7. It will show the below message in the response body.

![](https://github.com/jack1yn/ilearn-git/blob/main/img/pmtestmsg.png)

Cool! A simple Nodejs app is created successfully.



## Step 2: Push the code to GitHub

1. Create a new public repository **ilearn-git** on Github. It is a remote repo. 
2. Initialize the Git repository in the command prompt at your local machine.

	`git init`

3. Add all the files to your local Git (staging).

	`git add .`

4. Commit your code changes to your local Git.

	`git commit -m "first commit"`

5. Link to GitHub repository (i.e. remote repo). 

	`git remote add origin https://github.com/jack1yn/ilearn-git.git`

6. Push the changes to GitHub repository (i.e. main).

	`git push origin main`

7. Check the status. It will show the below message.

	`git status`

![](https://github.com/jack1yn/ilearn-git/blob/main/img/chkstatus.png)

8. Open GitHub and refresh the repository. Check that the changes is updated to the remote repo.



## Step 3: Deploy to Heroku

1. Open the [Heroku app](https://dashboard.heroku.com/apps).
2. Click **New** and select **Create new app** with name **ilearnapp**.
3. Open *Deploy* tab at dashboard of Heroku app.
4. Select Github as the deployment method by selecting **Connect to GitHub** option.   
5. Key in "ilearn-git" and select **Connect**. It will find and connect to Github repo.
6. Select **Enable Automatic Deploys**. Heroku will pick up the changes at Github and deploy automatically. 
7. Go to **Settings** tab and click **Add buildpack**.
8. Select **nodejs** from the options and click **Save changes**.
9. Go back to **Deploy** tab and click **Deploy Branch** at the bottom.
10. Go to **Settings** tab. Copy and paste the URL [ilearnapp.herokuapp.com](https://ilearnapp.herokuapp.com/) in the browser.

![](https://github.com/jack1yn/ilearn-git/blob/main/img/app-url.png) 

Below message will be shown in the browser. 

![](https://github.com/jack1yn/ilearn-git/blob/main/img/hellomsg.png)

Great! A simple web applicaion is created that can be accessed over the internet. 

Now make some code changes at your Git repo and see the changes deployed automaically at Heroku.

![](https://github.com/jack1yn/ilearn-git/blob/main/img/git-heroku.png)



## Learning Journey
### Design Approach

* Simple web application architecture  
* Rapid deployment 
* Easy to understand

### Stack & Tools

* [Node](https://nodejs.org/en/) on your local machine
* [GitHub account](https://github.com) to host the code online 
* [GitHub desktop](https://desktop.github.com/) to push the code changes to Github
* [Heroku account](https://signup.heroku.com/login) to deploy the app
* [Docker Hub](https://hub.docker.com/) to push container images to Docker Hub

### References

* [How to get started with GIT and work with GIT Remote Repo](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Git_HowTo.html)
* [Use the GitHub Desktop client](https://idratherbewriting.com/learnapidoc/pubapis_github_desktop_client.html#:~:text=In%20your%20GitHub%20Desktop%20GUI,button%20changes%20to%20Pull%20Origin.)
* [How To Stage Commits And Push To Github With Visual Studio Code](https://www.youtube.com/watch?v=NFK18j-HUNU)
* [Heroku Dev Guide](https://devcenter.heroku.com/categories/reference)
* [Learn Docker](https://www.docker.com/101-tutorial)

### Outcome
* Get started with Git and Docker
* Understand the concept of DevOps and CI/CD 
* Practice is key to success
