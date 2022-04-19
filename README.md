# coinbase-mern-material-visx

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / TypeScript / Material UI / Coingecko API

https://github.com/coding-to-music/coinbase-mern-material-visx

https://coinbase-mern-material-visx.herokuapp.com

by jgabitto https://github.com/jgabitto

https://github.com/jgabitto/coinbase

```java
const secret = process.env.JWT_SECRET;
mongoose_1.default.connect(`${process.env.MONGODB_URI
```

## Deploying to Render

This plugin will extract info from Heroku and put it into a Docker file.

```java
heroku plugins:install @renderinc/heroku-import
```

Output:

```java
warning ../../../package.json: No license field
warning ../../../../../../package.json: No license field
warning "eslint-config-oclif > eslint-config-xo-space@0.27.0" has incorrect peer dependency "eslint@>=7.20.0".
warning "eslint-config-oclif > eslint-plugin-mocha@9.0.0" has incorrect peer dependency "eslint@>=7.0.0".
warning "eslint-config-oclif > eslint-plugin-unicorn@36.0.0" has incorrect peer dependency "eslint@>=7.32.0".
warning "eslint-config-oclif > eslint-config-xo-space > eslint-config-xo@0.35.0" has incorrect peer dependency "eslint@>=7.20.0".
warning "eslint-config-oclif > eslint-plugin-unicorn > eslint-template-visitor@2.3.2" has incorrect peer dependency "eslint@>=7.0.0".
warning "eslint-config-oclif > eslint-plugin-unicorn > eslint-template-visitor > @babel/eslint-parser@7.16.3" has incorrect peer dependency "eslint@^7.5.0 || ^8.0.0".
Installing plugin @renderinc/heroku-import... installed v1.1.0
```

```java
heroku render:import --app coinbase-mern-material-visx
```

Output:

```java

=== Gathering information about Heroku app
Verifying Heroku app exists and CLI is logged in... ✔️
Verifying app is using a single, official Heroku buildpack... ✔️
Getting stack image... heroku-20
Getting and translating plan... Heroku Free $0/mo --> Render Free $0/mo
Getting instance count... 1
Getting custom domains... 0 custom domain(s)
Getting environment variables... 2 environment variable(s)
Getting add-ons... 0 add-on(s)

? Select addons to import.

Create render.yaml file and Dockerfile.render? This will overwrite any existing files with the same name. (y/n): y
Generating render.yaml file... done
Generating Dockerfile.render... done

=== Environment variables excluded from render.yaml
The following environment variables were not included in the generated
  render.yaml file because they potentially contain secrets. You may need to
  manually add them to your service in the Render Dashboard.

- JWT_SECRET:

=== Follow these steps to complete import of service(s) and database(s) to Render
1. Add, commit, and push the generated render.yaml and Dockerfile.render to GitHub or GitLab.
2. Go to https://dashboard.render.com/select-repo?type=iac
3. Search for and select this repository.
4. Verify the plan showing the resources that Render will create, and
   then click 'Create New Resources'.
5. After the resources are deployed, you may need to manually add
   the above environment variables to your Web Service in the Render Dashboard.
   They were not included in the generated render.yaml because they potentially
   contain secrets.
```

## Cryptoinfoweb App

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#deployed">Deployed</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
         <li><a href="#architecture">Architecture</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A cryptocurrency website where you can find the latest information (Market cap, price change, etc) on the top 100 global cryptocurrencies. You can view this information and favorite as as a registered user! Registered Users can keep track and remove their favorited cryptocurrencies.

The different functionalities of Cryptoinfoweb:

- View latest price information from Coingecko API about global cryptocurrencies.
- Create an account and favorite your preferred cryptocurrencies.
- Learn about blockchain and cryptocurrencies
- Usage of Material UI Components such as Topbar, Hero, Table, Footer, Grid, Box, et
- Use of reusable components such as some of the Chart Components

These were some of the facets I wanted to incorporate into this app as they would mimic some of the major features of popular cyprocurrency apps like Coinbase.

This was a fun project and there are a lot of features I would like to add in the future!

Views

-[Jumbotron](https://drive.google.com/file/d/1xhT2oKpNj0IFJgvEVPkJOLjMuXc8wAFr/view?usp=sharing) -[Prices Table](https://drive.google.com/file/d/1dESC01NkNhC5Ju-81TNiRPpd7DnNewW-/view?usp=sharing)

### Deployed

[Deployed Version](https://cryptoinfoweb.herokuapp.com/)

### Built With

Listed below are frameworks, dependencies and api's that were used for this project:

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com//)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Coingecko API](https://www.coingecko.com/en/api)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

## Architecture

- I used a MVC architecture in conjunction with a React-Redux store on the frontend. I have a views folder that acts as the views, a state folder that acts as the model, and the Controllers are specific components. I also have utilised a MVC architecture for the backend. I've included diagrams below:

- [Redux Store](https://drive.google.com/file/d/1yat5IKfYURjii-0RqduwwavplyMi-GMB/view?usp=sharing)

### Prerequisites

List of things you need to run Cryptoinfoweb locally

- npm

```sh
  npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jgabitto/coinbase.git
   ```
2. CD Client

```sh
cd client
```

3.  Install NPM packages for client

```sh
npm install
```

4.  Run client server

```sh
npm start
```

4.  CD to Server

```sh
cd ../server
```

5.  Install NPM packages for server

```sh
npm install
```

6.  Run server server

```sh
npm start
```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Jorge G.

Project Link: [RideShare](https://github.com/jgabitto/ctd_final_project_frontend#about-the-project)

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/coinbase-mern-material-visx.git
git push -u origin main
```

## Heroku

```java
heroku create coinbase-mern-material-visx
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set JWT_SECRET="secret"

heroku config:set PUBLIC_URL="https://coinbase-mern-material-visx.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```
