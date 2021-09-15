import React from 'react'
import Builder from 'boomform-builder'

const innerComponent = (attrs) => {
  console.log('Inner Component', attrs)
}

const App = () => {
  return (
    <Builder
      global={{
        name: 'Form',
        description: 'Description',
        innerComponent: innerComponent
      }}
      fields={[
        {
          id: 3,
          apiKey: 'AIzaSyAnaT_v4wuB2p_9M2sbriWcIGD2gclaqAs',
          type: 'map',
          label: 'Map',
          lat: -21.8926266,
          lng: -41.3909684,
          markers: [
            {
              id: 1,
              description: 'Dream City',
              position: { lat: -22.908333, lng: -43.196388 },
              value: 'Rio'
            }
          ],
          zoom: 4
        }
      ]}
    />
  )
}

export default App
