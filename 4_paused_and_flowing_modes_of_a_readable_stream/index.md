Потоки это способ работы с коллекциями данных, когда они не могут быть получены за раз.
Это позволяет не занимать всю память, а обрабатывать данные по частям. 
Это позволят обрабатывать данные как только мы получим часть из них не дожидаясь получения ввсех данных целиком.

Каждый поток это инстанс EventEmitter.

Поток чтения создается API fs - fs.createReadableStream

У потока чтения 2 режима - paused и flowing. По-умолчанию используется paused.

Если прослушиваем событие "data" то будет сипользоваться режим flowing

https://wanago.io/2019/03/04/node-js-typescript-4-paused-and-flowing-modes-of-a-readable-stream/
https://nodejsdev.ru/guides/webdraftt/files/
https://nodejsdev.ru/guides/webdraftt/streams/