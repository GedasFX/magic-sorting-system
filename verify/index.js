const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { JSDOM } = require('jsdom');
const fs = require('fs');

const excludes = [
  'air',
  'cave_air',
  'void_air',
  'fire',
  'end_portal',
  'end_gateway',
]

/**
 * @param {string} url Wiki API url containing items
 * @returns {Promise<string[]>} Items
 */
async function getItems(url) {
  const response = await (await fetch(url)).json();

  const doc = (new JSDOM(response.parse.text["*"])).window.document;
  return Array.from(doc.getElementsByTagName("code")).map((e) => e.innerHTML);
}

async function run() {
  const items = await getItems(
    "https://minecraft.fandom.com/api.php?action=parse&format=json&prop=text%7Cmodules%7Cjsconfigvars&title=Java_Edition_data_values&text=%7B%7B%3AJava%20Edition%20data%20values%2FItems%7D%7D"
  );

  const blocks = await getItems(
    "https://minecraft.fandom.com/api.php?action=parse&format=json&prop=text%7Cmodules%7Cjsconfigvars&title=Java_Edition_data_values&text=%7B%7B%3AJava%20Edition%20data%20values%2FBlocks%7D%7D"
  );

  const allItems = [ ...items, ...blocks ];
  const accountedFor = Array.from(fs.readFileSync('../source/config.json', 'utf-8').matchAll(/"minecraft:.*"/g)).map(e => e[0].substring(1, e[0].length - 1));

  const itemsUnaccountedFor = allItems.filter(i => !(accountedFor.includes(`minecraft:${i}`) || excludes.includes(i)));
  console.log(itemsUnaccountedFor);
}

run();
