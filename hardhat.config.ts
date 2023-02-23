import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
// https://github.com/projectsophon/hardhat-circom
import "hardhat-circom";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.11",
      }
    ]
  },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./circuits",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "powersOfTau28_hez_final_12.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: [
      { 
        name: "multiplier",
        protocol: "groth16",
        circuit: "multiplier/circuit.circom",
        input: "multiplier/input.json",
        wasm: "multiplier/out/circuit.wasm", 
        zkey: "multiplier/out/multiplier.zkey",
        vkey: "multiplier/out/multiplier.vkey",
        r1cs: "multiplier/out/multiplier.r1cs",
        // Used when specifying `--deterministic` instead of the default of all 0s
        beacon: "0102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f",
      }
    ],
  },
};

export default config;
