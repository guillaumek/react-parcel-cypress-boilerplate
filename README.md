# README

A minimal React.js boilerplate with Parcel bundler, including testing tools and deployable on aws s3.

## Table of Contents

- [Installation](#installation)
- [Start](#start)
- [Testing](#testing)
- [Deployment](#deployment)
- [Usage](#usage)
- [Resources](#resource)
- [Support](#support)
- [Contributing](#contributing)

## Installation

Clone the repository in your project folder:

```sh
yarn install
```

## Start

Start the application:

```sh
yarn start
```

Build the application

```sh
yarn build:[dev|staging|prod]
```

## Deployment

In order to deploy add 'name' to your AWS profile ~/.aws/credentials:

```
[name]
aws_access_key_id= XXXX
aws_secret_access_key= XXXXX
```

Deploy using the following command:

```sh
yarn deploy:[dev|staging|prod]
```

## Testing

### Unit Testing

Jest is a testing solution developped by Facebook for react application. In order to run application test, use the following command:

```sh
yarn test
```

### Integration Testing

Integration testing is addressed by Cypress tool. It can be compared to Selenium.
In order to run integration use the following command:

```sh
yarn cypress:open
```

You must have a server running to test against

## Usage

TBC.

## Resources

TBC.

## Support

Please [open an issue](https://github.com/guillaumek/react-parcel-cypress-boilerplate/issues) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/guillaumek/react-parcel-cypress-boilerplate/pulls).
