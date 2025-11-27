import * as fs from 'fs';
import * as path from 'path';

function parseFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n');
    const data = [];

    lines.forEach(line => {
        const trimmedLine = line.trim();
        if (trimmedLine) {
            const [key, value] = trimmedLine.split('=');
            data.push({ key, value });
        }
    });

    return data;
}

function parseDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    const data = [];

    files.forEach(file => {
        if (path.extname(file) === '.txt') {
            const filePath = path.join(directoryPath, file);
            data.push(...parseFile(filePath));
        }
    });

    return data;
}

function parseConfig() {
    const configFilePath = path.join(__dirname, '../config.txt');
    return parseFile(configFilePath);
}

function parseData() {
    const dataFilePath = path.join(__dirname, '../data');
    return parseDirectory(dataFilePath);
}

export { parseConfig, parseData };