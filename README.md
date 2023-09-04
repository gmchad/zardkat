# ZK-SNARK-Assessment

This repository is for the project assessment of the project of the 3rd module of : POLY PROOF: Advanced course of Metacrafters academy . The purpose of creating this to prove my learning and to showcase my skill as a circom, solidity developer to the people.

## Problem Statement

Imagine that you wake up, check your email, and you see an interesting task: Polygon is asking you to design a new zkSNARK circuit that implements some logical operations. You need to implement the circuit and deploy a verifier on-chain to verify proofs generated from this circuit

For this project, you will create a circuit using the circom programming language that implements the following logical gate:

![image](https://github.com/Amanlath1/ZK-SNARK-Assessment/assets/85346421/7e110f95-ca5e-46fa-9ed7-516f7a60d321)


## Description
This program is a simple contract written in circom, solidity,  a programming language used for developing smart contracts on the blockchain. The contract has been created to verify the circuit using the different gates and verifing the output and deploying the contract created on the mumbai testnet which is the testnet for the polygon chain network and which uses MATIC as its currency for the gas fees.

## Getting Started

### Executing Program

1. Inside the project directory, in the terminal type: npm i
2. In same terminal type: npx hardhat circom
3. This will generate the out file in the circuit folder and create our Verifier smart contract for the verification.
4. if you want to run it on the local host type on the terminal: npx hardhat run scripts/deploy.ts
5. And if you want to deploy the contract on the test net to check the circuit.
6. Add the private key of your wallet to which you want to state as the owner of the contract and deploy to the desired testnet as i am using mumbai in the walkthrough video.
7. And in the terminal type: npx hardhat run --network mumbai scripts/deploy.ts
8. It will give the address of the contract deployed go to: https://mumbai.polygonscan.com/
9. And paste the address of your contract in the search bar and it will show you the contract details

## Author

codeWithNoob

## License

This project is licensed under the GPL-3.0 - see the LICENSE file for details


**determinism**
> When you recompile the same circuit using the groth16 protocol, even with no changes, this plugin will apply a new final beacon, changing all the zkey output files. This also causes your Verifier contracts to be updated.
> For development builds of groth16 circuits, we provide the --deterministic flag in order to use a NON-RANDOM and UNSECURE hardcoded entropy (0x000000 by default) which will allow you to more easily inspect and catch changes in your circuits. You can adjust this default beacon by setting the beacon property on a circuit's config in your hardhat.config.js file.
