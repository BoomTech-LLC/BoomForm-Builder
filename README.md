# boomform-builder


[![NPM](https://img.shields.io/npm/v/boomform-builder.svg)](https://www.npmjs.com/package/boomform-builder)
[![github](https://badgen.net/npm/dependents/boomform-builder)](https://www.npmjs.com/package/boomform-builder?activeTab=dependents)
[![github](https://badgen.net/github/stars/BoomTech-LLC/BoomForm-Builder)](https://github.com/BoomTech-LLC/BoomForm-Builder)
[![github](https://badgen.net/github/issues/BoomTech-LLC/BoomForm-Builder)](https://github.com/BoomTech-LLC/BoomForm-Builder)
[![github](https://badgen.net/github/last-commit/BoomTech-LLC/BoomForm-Builder/main)](https://github.com/BoomTech-LLC/BoomForm-Builder)
[![NPM](https://badgen.net/npm/dt/boomform-builder)](https://www.npmjs.com/package/boomform-builder)



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://form.boomform.com/">
    <img src="https://general.boomte.ch/images/npm/Boomform-builder-logo.svg" alt="Logo" width="260" height="120">
  </a>

  <p align="center">
    Building a form is as easy as making coffee. :coffee:
    <br />
    <a href="https://boomform-builder.boomform.com/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://codesandbox.io/s/stoic-darkness-e34ej">View Demo</a>
    ·
    <a href="https://github.com/BoomTech-LLC/BoomForm-Builder/issues">Report Bug</a>
    ·
    <a href="https://github.com/BoomTech-LLC/BoomForm-Builder/issues">Request Feature</a>
  </p>
</p>




### Why BoomForm ?
😎 It’s pretty simple. <br />
You just need to pass an object with the parameters you want and the form builder will automatically create all fields for you. 

[Full documentation here](https://boomform-builder.boomform.com/)

## Code Example

```jsx
import React from 'react'
import Builder from 'boomform-builder'

const App = () => {
  return (
    <Builder
      global={{
        name: 'Fill your name'
      }}
      fields={[
        {
          id: 'name',
          type: 'name',
          validations: {
            first: { required: { msg: 'First name is required' } },
            last: { required: { msg: 'Last name is required' } }
          }
        }
      ]}
      button={{
        text: 'Submit'
      }}
    />
  )
}

export default App
```

## Made in BoomTech 

<img src="https://general.boomte.ch/images/npm/builder-logo.svg" height="100">

![This is an image](https://general.boomte.ch/images/npm/Tikon.png) | ![This is an image](https://general.boomte.ch/images/npm/Tikop.png) | ![This is an image](https://general.boomte.ch/images/npm/Sahaks.png) | ![This is an image](https://general.boomte.ch/images/npm/Hrachb.png) | ![This is an image](https://general.boomte.ch/images/npm/Tikov.png)
-- | -- | -- | -- | -- 
Tigran Nazaryan | Tigran Paployan | Sahak Sahakyan | Hrach Bekejyan | Tigran Vardanyan

--- 

[Apache 2.0 License.](https://github.com/BoomTech-LLC/BoomForm-Builder/blob/main/LICENSE)
