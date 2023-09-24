# TypeScript Location Marker Project

This project serves as a simple demonstration of TypeScript, showcasing the integration of user and company details along with their respective coordinates. It utilizes a fake data generation faker package from  npm to automatically generate user and company information.

## Features

- Automatically generates user and company details including location coordinates.
- Integrates Google Maps API to display markers for user and company locations.
- Clicking on a marker displays the details of the corresponding user and company.

## Usage

1. Generate a Google Maps API key from the [Google Developer's Console](https://console.developers.google.com/).

2. Add your API key to the `index.html` file.
   
   "<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback==Function.prototype"></script>"

## Fake Data Generation

The project uses a fake data generation package to create user and company details, as well as their respective coordinates. This allows for easy testing and demonstration purposes.

To install the package, run the following command:

"npm install @faker-js/faker"

You'll then need to update all of your imports:

"import { faker } from "@faker-js/faker";"

## Bundling with Parcel

This project is bundled using Parcel, a fast, zero-config web application bundler. Parcel provides a seamless build process, ensuring that the application is optimized for production.
