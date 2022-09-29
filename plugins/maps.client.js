export default function(context, inject){

  let mapLoaded = false
  let mapWaiting = null

  addScript()
  inject('maps', {
    showMap
  })

  function addScript() {

    const script = document.createElement('script')
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVL-Z9FIguDCw4Pb_VWDrC3D0aO-FNELM&Libraries=places&callback=initMap"
    script.async = true
    window.initMap = initMap
    document.head.appendChild(script)
  }

  function initMap() {
    mapLoaded = true
    if (mapWaiting) {
      const { canvas, Lat, Lng} = mapWaiting
      renderMap( canvas, Lat, Lng )
      mapWaiting = null
    }
  }

  function showMap(canvas, Lat, Lng) {
    if (mapLoaded) renderMap(canvas, Lat, Lng)
    else mapWaiting = { canvas, Lat, Lng }
  }

  function renderMap(canvas, Lat, Lng){

    console.log('mounted');

    const mapOptions = {

      // Obbligatori
      zoom: 18,
      center: {lat: Lat, lng: Lng},

      // Abbellisce la UI
      disableDefaultUI: true,

      // Zoom e street view
      zoomControl: true,
      streetViewControl: true,

      mapTypeId: 'roadmap',
    }

      // Mappa:
      const map = new window.google.maps.Map(canvas, mapOptions)

      //Posizione e relativo marker:
      const position = {lat: Lat, lng: Lng}
      const marker = new window.google.maps.Marker({position})
      marker.setMap(map)

  }

}
