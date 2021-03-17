import path from 'path';
import fs from 'fs';
import { terser } from 'rollup-plugin-terser';

const monorepoRoot = __dirname;

export default function () {
  function load(id) {
    const packageFolder = path.join(monorepoRoot, 'packages', id);
    const packageJsonSrc = fs.readFileSync(
      path.join(packageFolder, 'package.json')
    );
    const packageJson = JSON.parse(packageJsonSrc);
    const outputFile = path.join(packageFolder, packageJson.main);
    const sourceFile = path.normalize(
      outputFile.replace(/^(\.\/)?dist\//, 'src/')
    );

    return { packageJson, sourceFile, outputFile };
  }

  const packages = [load('core'), load('modules')];

  return packages.map((pkg) =>
    Object.create({
      input: pkg.sourceFile,
      output: {
        file: pkg.outputFile,
        format: 'es',
        name: pkg.packageJson.name,
        plugins: [terser()],
      },
    })
  );
}
