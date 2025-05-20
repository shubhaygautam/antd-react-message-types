# react-message-types

> A package of message types components for chatbot and their dashoboard 

[![NPM](https://img.shields.io/npm/v/antd-react-message-types.svg)](https://www.npmjs.com/package/antd-react-message-types) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- 
  - we are using Button, Carousel and Tooltip component from ant-design. if these component are not used in   parent project then you have to manually import css of these component from antd.
  - Create library using [create-react-library](https://www.npmjs.com/package/create-react-library) CLI
  - `cd your-library`
  - `rm -rf example`
  - `npx create-react-app example`
  - Update dependecies in package.json of example 
    (add parent node_modules react path in react `"react": "file:../node_modules/react"` and add `"your-library": "file:.."` )
  - Update version of many package in package.json of root directory (means your-library). This is very important part.
  - Go to your root directory (means your-library)
  - `npm link`
  - `npm install`
  - `npm start`
  - `cd example`
  - `npm link your-library`
  - `npm install`
  - `npm start`
  - [reference](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7)
 -->


## Install

```bash
npm install --save antd-react-message-types
```

## Usage

```jsx
import React, { Component } from 'react'

import { MyComponent } from 'antd-react-message-types'

class Example extends Component {
  render () {
    return (
      <MyComponent data="your-data" />
    )
  }
}
```

## Publish

<!-- `npm version` to check current version -->
<!-- `npm version x.y.z` to update version  -->
```bash
npm version x.y.z 
npm publish
git push
```

## License

MIT © [Shubhay Gautam](https://github.com/shubhaygautam)
