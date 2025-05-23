import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

import Flex from '@shared/Flex'
import Text from '@shared/Text'

import type { Hotel } from '@/models/hotel'

function Map({ location }: { location: Hotel['location'] }) {
  const {
    directions,
    pointGeolocation: { x, y },
  } = location

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  return (
    <Flex direction="column" style={{ padding: '24px' }}>
      <Text typography="t4" bold>
        기본 정보
      </Text>
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '250px',
          margin: '16px 0',
          boxSizing: 'border-box',
        }}
        center={{ lat: y, lng: x }}
        zoom={15}
      >
        <Marker position={{ lat: y, lng: x }} />
      </GoogleMap>
      <Text typography="t6" color="gray600">
        {directions}
      </Text>
    </Flex>
  )
}

export default Map
