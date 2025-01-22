const { exec } = require('child_process');

// Mock data for testing
const fileName = 'my-mono-repo';
const withFlag = 'vite';  // Example flag
const whichPackage = 'npm';  // Example package manager

const flagDic = {
    'vite': '-ewith-vite',
    'svelte': '-ewith-svelte',
    'tailwind': '-ewith-tailwind',
    'storybook': '-edesign-system'
};
const packageManager = {
    'npm': '-mnpm',
    'yarn': '-myarn',
    'pnpm': '-mpnpm'
};

const BaseCommand = ['npx', 'create-turbo@latest'];

// Add project name to the command
BaseCommand.push(fileName);

// Add flag to the command if specified
if (withFlag in flagDic) {
    BaseCommand.splice(-1, 0, flagDic[withFlag]);
}

// Add package manager to the command if specified
if (whichPackage in packageManager) {
    BaseCommand.splice(-1, 0, packageManager[whichPackage]);
}

const command = BaseCommand.join(' ');

console.log('\nThe turbo repo script will begin shortly... 😊');
console.log(command);

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(`Stdout: ${stdout}`);
    console.log('\nThe project has opened in a new VSCode window 🤩');
    exec(`cd ${fileName} && code .`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(`Stdout: ${stdout}`);
    });
});