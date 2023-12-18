"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = require("events");
var eventEmitter = new EventEmitter();
var listener = function (str) { return console.log(str); };
eventEmitter.on("event", listener);
eventEmitter.on("event", listener);
eventEmitter.on("event", listener);
eventEmitter.emit('event', "event occurred");
eventEmitter.on("my event 2", function (data) {
    console.log({ data: data });
});
eventEmitter.emit("my event 2", {
    key: "value"
});
eventEmitter.removeListener("event", listener);
eventEmitter.removeListener("event", listener);
eventEmitter.removeListener("event", listener);
eventEmitter.emit('event', "event occurred 2"); // nothing happened
