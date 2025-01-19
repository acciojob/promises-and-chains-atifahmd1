
document.querySelector("#myForm").addEventListener("submit", function (event) {
  event.preventDefault();
	
	const name = document.querySelector("#name").value;
	const age = document.querySelector("#age").value;

	const pr = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			if(age >= 18) {
				resolve(`Welcome ${name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		}, 4000)
	})

	pr.then((data)=>{
		alert(data);
	})
	.catch((err)=>{
		alert(err);
	})
});
												   