export default function(context, inject) {

  const appId = 'D2XLSQ1SJQ'
  const apiKey = 'e5e6a7a73a7afdeff80ce6d36520a374'

  const headers = {
    "X-Algolia-API-Key": apiKey,
    "X-Algolia-Application-Id": appId,
  }

  inject('dataApi', {
    getHome
  })

  async function getHome(apartmentId) {

    try{

      return unWrap(await fetch(`https://${appId}-dsn.algolia.net/1/indexes/apartments/${apartmentId}`, { headers }))

    } catch (error){

      return getErrorResponse(error)

    }


  }

  async function unWrap(response) {

    const json = await response.json()
    const { ok, status, statusText} = response

    return {
      json,
      ok,
      status,
      statusText
    }

  }

  function getErrorResponse(error) {

    return{

      ok: false,
      status: 500,
      statusText: error.message,
      json: {}

    }

  }

}
