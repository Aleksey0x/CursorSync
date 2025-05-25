import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.resolve(__dirname, '../assets/icons');
const outputDir = path.resolve(__dirname, '../images/icons');

// Ensure output directory exists if needed, or use a tool like 'mkdirp'
// For simplicity here, we assume images/icons exists or will be created by svg-sprite

const command = `svg-sprite --mode symbol -s --symbol-dest ${outputDir} ${inputDir}/*.svg`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error generating SVG sprite: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
  console.log('SVG sprite generated successfully!');
}); 