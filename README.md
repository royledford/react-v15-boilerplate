# React v15 boilerplate

## Overview
A simple boilerplate for a react project made with create-react-app and some of my personal favs for npm packages.

Includes:

* axios
* memento
* numeral
* chalk
* json-schema-faker
* json-server

## Api and data mocking

This uses json-server to provide a simple way to mock an api.

To provide data for the api, update ```buildScripts/mockDataSchema.js``` to provide the shape of the data. You can use Faker and Chance as part of the schema to provide data.


```bash
# To populate/refresh the data
yarn run generate-mock-data

# To start the server
yarn run start-mockapi
```

This will serve data at ```http:/localhost:5001```. You can change the port in the ```start-mockapi``` script in package.json.

## Storybook
This includes an install Storybook to view components.

```bash
# to start storybook
yarn run storybook

# It will run on http:/localhost:9009
```
