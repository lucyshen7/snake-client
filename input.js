// setup interface to handle user input from stdin

// Stores the active TCP connection object.
let connection; 

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;  
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Leaving...");
    process.exit();
  } 
  if (key === "w") { // w
    connection.write("Move: up");
  }
  if (key === "a") { // a
    connection.write("Move: left");
  }
  if (key === "s") { // s
    connection.write("Move: down");
  }
  if (key === "d") { // d
    connection.write("Move: right");
  }
  if (key === "o") {
    connection.write("Say: O hello there hehe");    
  }
};

module.exports = { setupInput };