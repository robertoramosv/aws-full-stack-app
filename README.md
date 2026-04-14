# Image Filtered API

**
## Author
Roberto Ramos Vargas

***
## Getting Setup

### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the root of this repository. After cloning, open your terminal and run:
```bash
npm install
```

**

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:
```bash
`npm run dev` or `npm run start`
```

**

## Project Structure

The source code for this application resides in the ./src directory.

#### Test URL
http://localhost:8080/

## Curl commands

#### Get image filtered
```bash
curl --location 'http://localhost:8080/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg' --output image-filtered.jpg
```