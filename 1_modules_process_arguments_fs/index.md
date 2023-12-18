В node.js каждый файл рассматривается как отдельный модуль.
Под капотом Node.js оборачивает его в функцию вида:

function (exports, require, module, __filename, __dirname) {
  // code of the module
}

process это свойство объекта global
process.argv - содержит массив аргументов кондной строки, переданных при запуске процесса node.js
Элемент 1 в process.argv наналогичен process.execPath - содержит абсолютный путь исполняемого в данный момент файла
Элемент 2 в process.argv содержит путь к исполняемому файлу
Оставшиеся аргументы - то, что передал пользователь

File System
Модуль fs предоставляет API для работы с файловой системой
Что бы функция, использующа колбеки, начала работать через async/await можно использовать promisify

https://wanago.io/2019/02/11/node-js-typescript-modules-file-system/