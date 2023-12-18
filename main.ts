import touch from "./1_modules_process_arguments_fs/utils/touch";
import cat from "./1_modules_process_arguments_fs/utils/cat";
import remove from "./1_modules_process_arguments_fs/utils/remove";

const command = process.argv[2];
const path = process.argv[3];

const commands = {
    touch: (path: string) => touch(path),
    cat: (path: string) => cat(path),
    remove: (path: string) => remove(path),
}

if (command && path) {
    const strCommand = String(command);
    const isCommandHasProperty = commands.hasOwnProperty(strCommand);
    isCommandHasProperty && commands[strCommand as keyof typeof commands](path);
    !isCommandHasProperty && console.log('Unknown command');
} else {
    console.log("Command or Path is missing");
}