const CompSci=function(a,b,c) {
	  const d=a*b+c;
	  return "CS"+d;
};
 

 const name=function() {

 	return "Hey! Have a nice day!";
 };

  const hptns=function(p,q) {
  	const l=Math.sqrt(p*p+q*q);
  };
 
      
const string=function(x,y,z) {

  if (x.length>=y.length && x.length>=z.length) {
  	return x;
  } else if (y.length>=x.length && y.length>=z.length) {
  	return y;
  } else {
  	return z;
  };
};


const number=function(a,b) {

  if(a===b) {
  	return 0;
  } else if (a>b) {
  	return 1;
  } else {
  	return -1;
  };

};

const mult=function(a,b) {
	const c= a*b;
	return c;
};

const div=function(a,b) {
	const c= a/b;
	return c;
};

const triangleArea=function(base,height) {
   return div(mult(base,height),2);
  
};

 const numlength=function(a) {
 	const b= ""+a;
 	return b.length;
 }


 const compare=function(a,b,c) {
  const d=a+b
  if (d.length>c) {
  	return 1;
  } else { 
  	return -1; 
  };
 };
 

 const runStuff=function(a,b,c) {

 	if (a==="rectangle") {
 			return mult(b,c);
 			
 		} else if (a==="triangle") {
 		return triangleArea(b,c);
 	} else {
 		return -1;
 	};
 };
