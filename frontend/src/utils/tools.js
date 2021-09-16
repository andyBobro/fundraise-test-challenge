export function makeHash (l = 6) {
  return (Math.random() * Math.random()).toString(16).slice(2, 2 + l)
}

export function checkLocalStorageField (field) {
  return tryParseJSON(window.localStorage[field])
}

export function tryParseJSON (str) {
  try {
    const json = JSON.parse(str)

    return json
  } catch (e) {
    return null
  }
}

export function updateLocalStorage (key, payload) {
  window.localStorage[key] = JSON.stringify(payload)
}