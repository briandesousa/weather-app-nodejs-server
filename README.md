# Weather App NodeJS Server

This repository contains a NodeJS Express server that hosts:

* a very simple API used to retrieve weather data
* a static weather app pre-compiled from a Flutter (web) project

## Weather App

This server hosts the Weather App static bundle from the `public-flutter` folder.

The Weather App is built with Flutter Web. The source code for this app can be found here: [https://github.com/briandesousa/weather-app-flutter](https://github.com/briandesousa/weather-app-flutter)).

The Flutter CLI is used to compile the Weather app into a static bundle that can be copied to the `public-flutter` folder.

## Weather API

This server also exposes a simple Weather API with a single HTTP GET operation. The location for which you want to retrieve weather data for is specified as a path parameter, for example [http://localhost:3000/api/weather/londonon](http://localhost:3000/api/weather/londonon). If you do not specify a location, weather data for a default location is returned.

The API test page can be used to test the Weather API: [http://localhost:3000/api-test.html](http://localhost:3000/api-test.html).

## Run Instructions

1. Copy the pre-compiled Weather App bundle to the `./public-flutter` folder.
2. Run `npm start` to start the Node server.
3. Launch the Weather app in the browser at [http://localhost:3000](http://localhost:3000).
