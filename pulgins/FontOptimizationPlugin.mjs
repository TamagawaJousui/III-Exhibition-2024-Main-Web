import fs from "fs";
import zlib from "zlib";

export class FontOptimizationPlugin {
    options;
    constructor({ fontPath, outputPath, chars }) {
        this.options = { fontPath, outputPath, chars };
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync("FontOptimizationPlugin", (compilation, callback) => {
            const fontPath = this.options.fontPath;
            const neededChars = new Set(this.options.chars);

            // Read and decompress the gzip font file
            const compressedData = fs.readFileSync(fontPath);
            zlib.gunzip(compressedData, (err, buffer) => {
                if (err) {
                    return callback(err);
                }

                const fontData = JSON.parse(buffer.toString("utf8"));

                // Filter the needed characters
                fontData.glyphs = Object.fromEntries(
                    Object.entries(fontData.glyphs).filter(([char]) => neededChars.has(char))
                );

                // Write back the optimized font file
                fs.writeFileSync(this.options.outputPath, JSON.stringify(fontData));

                callback();
            });
        });
    }
}
