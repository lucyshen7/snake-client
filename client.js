const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // data event
  conn.on("data", (message) => {
    console.log(message);
  });

  // connect event object
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // push name to server
    conn.write("Name: BOB");
  });

  return conn;
};

module.exports = connect;