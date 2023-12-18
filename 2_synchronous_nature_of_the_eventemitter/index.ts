import * as EventEmitter from "events";

const eventEmitter = new EventEmitter();
const listener = (str: string) => console.log(str);
eventEmitter.on("event", listener);
eventEmitter.on("event", listener);
eventEmitter.on("event", listener);

eventEmitter.emit('event', "event occurred");

eventEmitter.on("my event 2", (data) => {
    console.log({data});
});

eventEmitter.emit("my event 2", {
    key: "value"
});

eventEmitter.removeListener("event", listener)
eventEmitter.removeListener("event", listener)
eventEmitter.removeListener("event", listener)

eventEmitter.emit('event', "event occurred 2"); // nothing happened
