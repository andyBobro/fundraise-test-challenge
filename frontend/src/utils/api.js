export function startSocketConnection () {
  const connection = new WebSocket("wss://echo.websocket.org")

  connection.onmessage = function(event) {
    console.log(event);
  }

  connection.onopen = function(event) {
    console.log(event)
    console.log("Successfully connected to the echo websocket server...")
  }

  return connection
}