const express = require('express');
const { exec } = require('child_process');
const { promisify } = require('util');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3001;

// Promisify the exec function 
const execAsync = promisify(exec);

app.use(cors());

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

// Default output directory outside the project directory
const defaultOutputDir = path.join(__dirname, '../../../output');

async function runScript(fileName, withFlag, whichPackage, outputDir = defaultOutputDir) {
    try {
        const BaseCommand = ['npx', 'create-turbo@latest'];

        BaseCommand.push(fileName);

        if (withFlag in flagDic) {
            BaseCommand.splice(-1, 0, flagDic[withFlag]);
        }

        if (whichPackage in packageManager) {
            BaseCommand.splice(-1, 0, packageManager[whichPackage]);
        }

        const command = BaseCommand.join(' ');

        console.log('\nThe turbo repo script will begin shortly... 😊');
        console.log(command);

        // Create the output directory if it doesn't exist
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Run the command in the output directory
        const { stdout, stderr } = await execAsync(command, { cwd: outputDir });
        if (stderr && !stderr.includes('Downloading files') && !stderr.includes('Installing dependencies')) {
            console.error(`Stderr: ${stderr}`);
            return {
                message: stderr,
                code: 500
            };
        } else {
            console.log(`Stdout: ${stdout}`);
            console.log('\nThe project has opened in a new VSCode window 🤩');
        }

        const { stdout: codeStdout, stderr: codeStderr } = await execAsync(`code .`, { cwd: path.join(outputDir, fileName) });
        if (codeStderr) {
            console.error(`Stderr: ${codeStderr}`);
            return {
                message: codeStderr,
                code: 500
            };
        } else {
            console.log(`Stdout: ${codeStdout}`);
            return {
                message: 'project has been created',
                code: 200
            };
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return {
            message: error.message,
            code: 500
        };
    }
}

app.get('/run-script', async (req, res) => {
    try {
        const { fileName = 'my-mono-repo', withFlag = 'vite', whichPackage = 'npm' } = req.query;
        const response = await runScript(fileName, withFlag, whichPackage);
        res.status(response.code).send(response);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});