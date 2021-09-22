# boomform-builder


[![NPM](https://img.shields.io/npm/v/boomform.svg)](https://www.npmjs.com/package/boomform-builder)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://form.boomform.com/">
    <img src="https://cdn.boomte.ch/images/boomtechdeveloper/Boomform-builder-logo.svg" alt="Logo" width="260" height="120">
  </a>

  <p align="center">
    Building a form is as easy as making coffee. :coffee:
    <br />
    <a href="https://form-builder.boomform.com"><strong>Explore the docs »</strong></a>
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

[Full documentation here](https://form-builder.boomform.com)

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

<img src="https://cdn.boomte.ch/images/boomtechdeveloper/logo.svg" height="100">

![This is an image](https://cdn.boomte.ch/images/TikoN.png?x=2) | ![This is an image](https://cdn.boomte.ch/images/TikoP.png?x=1) | ![This is an image](https://cdn.boomte.ch/images/SahakS.png?x=2) 
-- | -- | -- 
Tigran Nazaryan | Tigran Paployan | Sahak Sahakyan
