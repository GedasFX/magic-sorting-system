"use strict";

import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import JSZip from "jszip";

import excludes from "./excludes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.argv.length != 3) {
  console.error("Provide the path to Minecraft .jar file");
  process.exit(1);
}

const jarFile = fs.readFileSync(process.argv[2]);
const jar = await JSZip.loadAsync(jarFile);

var allItems = jar
  .file(/^assets\/minecraft\/models\/item\//)
  .map((i) => i.name)
  .map((s) => s.match(/\/(\w+)\.json/)[1]);

const accountedFor = Array.from(fs.readFileSync(path.resolve(__dirname, "../source/config.json"), "utf-8").matchAll(/"minecraft:.*"/g)).map((e) =>
  e[0].substring(1, e[0].length - 1)
);

const itemsUnaccountedFor = allItems.filter((i) => !(accountedFor.includes(`minecraft:${i}`) || excludes.some((e) => e.test(i))));
const wastedCpuCycles = accountedFor.filter((i) => !allItems.includes(i.substring(10)));

console.log("Items to address:");
console.log(itemsUnaccountedFor);

console.log("Items to remove:");
console.log(wastedCpuCycles);
