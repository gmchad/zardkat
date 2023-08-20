## ZK SNARK DESIGNER
In this project I have created a circuit using ***circom*** programming langugae that implements the logical gates.

## Circuit Code
pragma circom 2.0.0;

/*This circuit template checks that c is the multiplication of a and b.*/  

template Multiplier2 () {  
   //signal input
   signal input a;
   signal input b;
   
  //signals from gates
    signal x;
    signal y;
    

    //final signal output
   signal output Q;
  //component gate used to create custom circuit
    
     component and = AND();
     component not = NOT();
     component or = OR();

  //circuit logic
    and.a <== a;
    and.b <== b;
    x <== and.out;

    not.in <== b;
    y <== not.out;

    or.a <== x;
    or.b <== y;
    Q <== or.out;


   
}

template NOT() {
    signal input in;
    signal output out;

    out <== 1 + in - 2*in;
}
template AND() {
    signal input a;
    signal input b;
    signal output out;

    out <== a*b;
}
template OR() {
    signal input a;
    signal input b;
    signal output out;

    out <== a + b - a*b;
}

  


component main = Multiplier2();

## Execution
1. In the hardhat.config.ts file import dotenv
2. Also install dotenv locally using ***npm*** ***install*** ***dotenv***
3. Add the code snippet in hardhat.config.ts file to add ***mumbai*** ***testnet*** network
4. Also add mumbai network to metamask wallet
   
   ### Exeuting the Program
   1. Open terminal
   2. ***npm*** ***i*** for intallation of npm
   3. ***npm*** ***hardhat*** ***circom*** for compilation
   4. ***npm*** ***hardhat*** ***run*** ***scripts*** ***deploy.ts*** ***--network*** ***mumbai*** for deploying
  
      ### Check your transaction on Polygon Scan

### Authors
Gauri Kauhsal
   
