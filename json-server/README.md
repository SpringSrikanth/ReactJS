# Json Server

This server is mock server no need of any knowledge to develop [Json Server](https://www.npmjs.com/package/json-server).

## Installation

-Install json server by using "npm install -g json-server"

## Create db.json file add some json code 

-Example:

<code>
    {
        "blogs": [
                {
                    "id": 1,
                    "title": "Blog 1",
                    "description": "Blog 1 Description",
                    "author": "Srikanth Y"
                }]
    }
</code>

## Run Server By using below command

### `json-server --watch db.json --port 3001`

Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
