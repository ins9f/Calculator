let currentEq = [];
let eqSolution = 0;
let lastOp = "";
let currentNum = 0;
let semiOp_state = 0;

$(".btn-num").click(function() {
  if ( semiOp_state === 1) {
    alert("Error! Number already typed! Use any operator.")
  } else {
    const stringTyped = this.id;
    if (currentNum === 0) {
      currentNum = stringTyped.toString();
    } else {
      currentNum = currentNum.toString() + stringTyped.toString();
    }
    console.log(currentNum);
    $(":text")[1].value = currentNum;
  }

});

$(".uniq").click(function() {
  if (semiOp_state === 0) {
    switch (this.id) {
      case ".":
        currentNum = currentNum.toString() + ".";
        $(":text")[1].value = currentNum;
        break;
      case "+/-":
        currentNum = Number(currentNum) * -1;
        $(":text")[1].value = currentNum;
        break;
      case "<<":
        currentNum = currentNum.slice(0, -1);
        $(":text")[1].value = currentNum;
        break;
      case "CE":
        currentNum = 0;
        $(":text")[1].value = currentNum;
        break;
      case "C":
        currentEq = [];
        eqSolution = 0;
        lastOp = "";
        currentNum = 0;
        $(":text")[0].value = "0";
        $(":text")[1].value = currentNum;
        break;
      default:
    }
  } else {
    switch (this.id) {
      case "CE":
        currentNum = 0;
        $(":text")[1].value = currentNum;
        break;
      case "C":
        currentEq = [];
        eqSolution = 0;
        lastOp = "";
        currentNum = 0;
        semiOp_state = 0;
        $(":text")[0].value = "0";
        $(":text")[1].value = currentNum;
        break;
      default:
    }
  }

});

$(".op").click(function() {
  if (lastOp == "") {
    if (currentNum !== 0) {
      if (semiOp_state === 0) {
        currentEq.push(currentNum);
        lastOp = this.id;
        currentEq.push(lastOp);
        eqSolution = currentNum;
      } else {
        lastOp = this.id;
        currentEq.push(lastOp);
        eqSolution = currentNum;
        semiOp_state = 0;
      }

    } else {
      alert("Error!");
    }
  } else {
    if (semiOp_state === 0) {
      currentEq.push(currentNum);
    } else {
      semiOp_state = 0;
    }

    switch (lastOp) {
      case "+":
        eqSolution = Number(eqSolution) + Number(currentNum);
        console.log(eqSolution);
        break;
      case "-":
        eqSolution = Number(eqSolution) - Number(currentNum);
        console.log(eqSolution);
        break;
      case "*":
        eqSolution = Number(eqSolution) * Number(currentNum);
        console.log(eqSolution);
        break;
      case "/":
        eqSolution = Number(eqSolution) / Number(currentNum);
        console.log(eqSolution);
        break;
      case "%":
        eqSolution = Number(eqSolution) % Number(currentNum);
        console.log(eqSolution);
        break;
    }
    lastOp = this.id;
    currentEq.push(lastOp);
  }
  console.log(currentEq);
  $(":text")[0].value = currentEq.join(" ");

  currentNum = 0;
  $(":text")[1].value = currentNum;
});

$(".semi-op").click(function(){
  switch (this.id) {
    case "sqrt(x)":
      currentEq.push("sqrt(" + currentNum + ")");
      currentNum = Math.sqrt(Number(currentNum));
      console.log(currentNum);
      break;
    case "1/x":
      currentEq.push("1/" + currentNum);
      currentNum = 1 / (Number(currentNum));
      console.log(currentNum);
      break;
    case "sq(x)":
      currentEq.push("sq(" + currentNum + ")");
      currentNum = Math.pow(Number(currentNum),2);
      console.log(currentNum);
      break;
  }
  semiOp_state = 1;
  $(":text")[0].value = currentEq.join(" ");
  $(":text")[1].value = 0;
});

$(".eq").click(function(){
  if (semiOp_state === 0) {
    currentEq.push(currentNum);
  } else {
    semiOp_state = 0;
  }

  switch (lastOp) {
    case "+":
      eqSolution = Number(eqSolution) + Number(currentNum);
      console.log(eqSolution);
      break;
    case "-":
      eqSolution = Number(eqSolution) - Number(currentNum);
      console.log(eqSolution);
      break;
    case "*":
      eqSolution = Number(eqSolution) * Number(currentNum);
      console.log(eqSolution);
      break;
    case "/":
      eqSolution = Number(eqSolution) / Number(currentNum);
      console.log(eqSolution);
      break;
    case "%":
      eqSolution = Number(eqSolution) % Number(currentNum);
      console.log(eqSolution);
      break;
  }

  $(":text")[0].value = currentEq.join(" ");
  currentNum = 0;
  $(":text")[1].value = eqSolution;
  currentEq = [];
  eqSolution = 0;
  lastOp = "";
  currentNum = 0;
  semiOp_state = 0;
});
