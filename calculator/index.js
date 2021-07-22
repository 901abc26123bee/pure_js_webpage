const input = document.getElementById('input'),
		  number = document.querySelectorAll('.numbers div'),
		  operator = document.querySelectorAll('.operators div'),
		  result = document.getElementById('result'),
		  clear = document.getElementById('clear')
let resultDisplayed = false;
const ruleForNumberAndDot = /[0-9\.]/
const ruleForOperator = /[\+\-\*\/]/
// console.log(rules.test(53242));  // true
// console.log(rules.test('53242')); //true

// input.innerHTML = "232"
// document.querySelectorAll('.numbers div').item(0).innerHTML //"7"
// document.querySelectorAll('.numbers div').item(0).addEventListener("click",()=>{console.log("7");})
// document.querySelectorAll('.numbers div').forEach((e)=>{console.log(e);})
// document.querySelectorAll('.buttons')[0] // <div class="buttons"></div>


// Array.prototype.slice()   陣列的 slice() 會回傳一個指定索引範圍的新陣列（不改變原陣列）。
// Array.prototype.splice()  藉由刪除既有元素或加入新元素來改變一個陣列的內容，並回傳一個包含被刪除的元素陣列。
// String.prototype.split()  String.prototype.split() 方法會依照指定規則分割字串，並回傳一個陣列，內容為拆分的字串。
// String.prototype.slice()  字串的 slice() 會回傳一個指定索引範圍字元的新字串（不改變原字串）。

function numberClick(e) {
  e.stopPropagation()
  let currentString = input.innerHTML
  let pressed = e.target.textContent

  if(resultDisplayed){
  	input.innerHTML = ""
  	resultDisplayed = !resultDisplayed
  }
	if(currentString.length === 0 && pressed ==='.') {
  	console.log("enter a number first");
  } else if (ruleForNumberAndDot.test(pressed)) {
    input.innerHTML += e.target.innerHTML
    //console.log(input.innerHTML);
  } else if (pressed==='C'){
  	input.innerHTML = ""
  }
}

function operatorClick(e) {
	console.log('operatorClick', e.target.textContent);
  let currentString = input.innerHTML
  let lastChar = currentString[currentString.length - 1]
  let op = e.target.textContent

	if(currentString.length == 0 || ruleForOperator.test(lastChar)) {
    console.log("enter a number first");
  } else if (ruleForOperator.test(op)){
    input.innerHTML += e.target.innerHTML
  }
}

function displayAns(){
	let currentString = input.innerHTML
  let lastChar = currentString[currentString.length - 1]
  let calulateItem

  if(currentString.length == 0) {
    console.log("enter a number first");
  }else{
  	ruleForOperator.test(lastChar) ? calulateItem = currentString.slice(0,-1) : calulateItem = currentString
		let operatoraArr = [...calulateItem].filter(k=>{
  		return ruleForOperator.test(k);
  	})
  	let numsArr = calulateItem.split(ruleForOperator);
  	input.innerHTML = caculateAns(operatoraArr,numsArr)
  	resultDisplayed = !resultDisplayed
  }
}


function caculateAns(operatoraArr,numsArr){
	let n=0
	for(let i=0; i<operatoraArr.length; i++){
		switch(operatoraArr[i]){
			case "+":
				numsArr[n+1] = numsArr[n]*1 + numsArr[n+1]*1
				console.log(numsArr)
				n++
				break;
			case "-":
				numsArr[n+1] = numsArr[n]*1 - numsArr[n+1]*1
				n++
				break;
			case "*":
				numsArr[n+1] = ((numsArr[n]*1) * (numsArr[n+1]*1)).toFixed(3)
				console.log(numsArr)
				n++
				break;
			case "/":
				numsArr[n+1] = ((numsArr[n]*1) / (numsArr[n+1]*1)).toFixed(3)
				n++
				break;
			default:
		}
	}
	return numsArr[n]
}

// adding methed 1
number.forEach((e)=>{ // e=element
	//console.log(e);
	e.addEventListener("click", numberClick)
})
// adding methed 2
// for(let i=0; i<number.length; i++){
// 	number.item(i).addEventListener("click", numberClick)
// }

operator.forEach((e)=>{
	//console.log(e);
	e.addEventListener("click", operatorClick)
})

result.addEventListener("click", displayAns)
