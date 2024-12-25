const EventEmitter = require("node:events");

const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
  console.log(`We are working on your ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size) => {
  if (size === "Large") {
    console.log("Serve with a drink");
  }
});

emitter.emit("order-pizza", "Large", "Cheese");
