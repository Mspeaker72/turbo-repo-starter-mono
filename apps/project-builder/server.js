const express = require('express');
const { exec } = require('child_process');
const { promisify } = require('util');
const path = require('path');
const app = express();
const port = 3001;

// Promisify the exec function
const execAsync = promisify(exec);

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

// Async function to run the script
async function runScript() {
    try {
        console.log('\nThe turbo repo script will begin shortly... 😊');
        console.log(command);

        const { stdout, stderr } = await execAsync(command);
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            throw new Error(stderr);
        }
        console.log(`Stdout: ${stdout}`);
        console.log('\nThe project has opened in a new VSCode window 🤩');

        const { stdout: codeStdout, stderr: codeStderr } = await execAsync(`cd ${fileName} && code .`);
        if (codeStderr) {
            console.error(`Stderr: ${codeStderr}`);
            throw new Error(codeStderr);
        }
        console.log(`Stdout: ${codeStdout}`);
        return stdout;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    }
}

// Endpoint to run the script
app.get('/run-script', async (req, res) => {
    try {
        const output = await runScript();
        res.send(`Script executed successfully: ${output}`);
    } catch (error) {
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
