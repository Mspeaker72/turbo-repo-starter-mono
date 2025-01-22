const express = require('express');
const { exec } = require('child_process');
const { promisify } = require('util');
const path = require('path');
const app = express();
const port = 3001;

// Promisify the exec function
const execAsync = promisify(exec);

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

// Default output directory
const defaultOutputDir = path.join(__dirname, '../../output');

// Async function to run the script
async function runScript(fileName, withFlag, whichPackage, outputDir = defaultOutputDir) {
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

    // Create the output directory if it doesn't exist
    await execAsync(`mkdir -p ${outputDir}`);

    // Run the command in the output directory
    const { stdout, stderr } = await execAsync(command, { cwd: outputDir });
    if (stderr && !stderr.includes('Downloading files') && !stderr.includes('Installing dependencies')) {
        console.error(`Stderr: ${stderr}`);
    } else {
        console.log(`Stdout: ${stdout}`);
        console.log('\nThe project has opened in a new VSCode window 🤩');
    }

    // Remove the .git directory to negate the initial commit
    await execAsync(`rm -rf .git`, { cwd: path.join(outputDir, fileName) });

    // Open the project in VSCode
    const { stdout: codeStdout, stderr: codeStderr } = await execAsync(`code .`, { cwd: path.join(outputDir, fileName) });
    if (codeStderr) {
        console.error(`Stderr: ${codeStderr}`);
    } else {
        console.log(`Stdout: ${codeStdout}`);
    }
}

// Endpoint to run the script
app.get('/run-script', async (req, res) => {
    const { fileName = 'my-mono-repo', withFlag = 'vite', whichPackage = 'npm' } = req.query;
    await runScript(fileName, withFlag, whichPackage);
    res.send('Script execution initiated. Check logs for details.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});