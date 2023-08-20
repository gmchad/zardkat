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
