import readline from 'readline-sync';

function mathBot(){
  console.log("I can do addition, multiplication, substraction, division and modulation. Or even Some Percentage Calculation");
  return mathInput();
}

function mathResponse(choose){
  const chs = choose.toLowerCase().trim();

  if (chs.includes("addition")){
    const angka1 = readline.question("Masukan angka pertama : ");
    const number = parseInt(angka1);
    const angka2 = readline.question("Masukan angka kedua : ");
    const number2 = parseInt(angka2);
    const total = number + number2;
    return total.toString();
  }

  if (chs.includes("multiplication") || chs.includes("multi")){
    const angka1 = readline.question("Masukan angka pertama : ");
    const number = parseInt(angka1);
    const angka2 = readline.question("Masukan angka kedua : ");
    const number2 = parseInt(angka2);
    const total = number * number2;
    return total.toString();
  }

  if (chs.includes("percentage")){
    console.log("Oh do you want to do some percentage calculation?");
    console.log("I can do something like : searching value from percentage, searching percentage from value")

    function percentageInput(){
      const percenInput = readline.question("You: ");
      const percentageRes = percentageResponse(percenInput);
      return percentageRes;
    }

    function percentageResponse(chsPercentage){
      const chsPercen = chsPercentage.toLowerCase().trim();
      // mengerti pertanyaan seseorang adalah kunci.. tapi gimana gue tau dasar nya ya..
      if (chsPercen.includes("percent of") || chsPercen.includes("% of")) {
        console.log("You can input x as percentage and p as total");
        const x = readline.question("Masukan X : ");
        const p = readline.question("Masukan P : ");
        const xNum = parseInt(x);
        const pNum = parseInt(p);
        const formula = xNum / 100 * p;
        return formula.toString();
      }
      else if (chsPercen.includes("what percentage") || chsPercen.includes("percentage of")) {
        console.log("You can input x as remaining value and p as total");
        const x = readline.question("Masukan X : ");
        const p = readline.question("Masukan P : ");
        const xNum = parseInt(x);
        const pNum = parseInt(p);
        const formula = pNum/xNum ;
        return `${formula.toString()} %`;
      }
      // new function
    }

    return percentageInput();
  }

  if (chs === "exit"){
    return null
  }

  return "sorry, what kind of math is that?";
}

function mathInput(){
  const mathChoose = readline.question("You: ");
  const responseMath = mathResponse(mathChoose);
  if (responseMath === "exit"){
    return null;
  }
  return responseMath;
}

export { mathBot, mathInput, mathResponse }
