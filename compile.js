const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Adding the path here!
// Adding the path here, and more text
// More more more more
// Third Feature, test
// new-feature-3 addition
// new-feature-4 addition
const buildPath = path.resolve(__dirname, "ethereum", "build");
fs.removeSync(buildPath);

const coinCompetitionPath = path.resolve(__dirname, "ethereum", "contracts", "CompetitionCoin.sol");
const source = fs.readFileSync(coinCompetitionPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "CompetitionCoin.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "CompetitionCoin.sol"
];

fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}