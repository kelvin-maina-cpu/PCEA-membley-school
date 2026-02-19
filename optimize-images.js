#!/usr/bin/env node

/**
 * Image Optimization Script for PCEA Membley School Website
 * Converts images to WebP format for better performance
 *
 * Prerequisites:
 * npm install sharp
 *
 * Usage:
 * node optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'PCEASCH-IMAGES');
const outputDir = path.join(__dirname, 'PCEASCH-IMAGES', 'webp');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Supported image formats
const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif'];

async function optimizeImage(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .webp({ quality: 85 }) // Good quality with compression
            .toFile(outputPath);

        console.log(`✅ Optimized: ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`❌ Failed to optimize ${path.basename(inputPath)}:`, error.message);
    }
}

async function processDirectory() {
    try {
        const files = fs.readdirSync(inputDir);

        console.log('🚀 Starting image optimization...\n');

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();

            if (supportedFormats.includes(ext)) {
                const inputPath = path.join(inputDir, file);
                const outputFileName = path.basename(file, ext) + '.webp';
                const outputPath = path.join(outputDir, outputFileName);

                await optimizeImage(inputPath, outputPath);
            }
        }

        console.log('\n✨ Image optimization complete!');
        console.log(`📁 WebP images saved to: ${outputDir}`);
        console.log('\n📝 Next steps:');
        console.log('1. Update HTML to use WebP images with fallbacks');
        console.log('2. Test website performance improvements');

    } catch (error) {
        console.error('❌ Error processing directory:', error.message);
    }
}

// HTML template for WebP with fallback
function generateWebpHtml(originalName, webpName) {
    return `<picture>
    <source srcset="PCEASCH-IMAGES/webp/${webpName}" type="image/webp">
    <img src="PCEASCH-IMAGES/${originalName}" alt="School image" loading="lazy">
</picture>`;
}

console.log('🖼️  PCEA Membley School - Image Optimization Script');
console.log('================================================\n');

// Check if sharp is installed
try {
    require('sharp');
    processDirectory();
} catch (error) {
    console.error('❌ Sharp library not found!');
    console.log('\n📦 Install required dependencies:');
    console.log('npm install sharp');
    process.exit(1);
}

module.exports = { generateWebpHtml };