const makeChange = (c) => {
  // your name here
	let obj={ q:25,d:10,n:5,p:1 }
	let ans={ q:0,d:0,n:0,p:0}
	for(let key in obj){
		let temp=parseInt(c/obj[key])
		ans[key]=temp
		c=c%obj[key]
	}
	return ans
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
