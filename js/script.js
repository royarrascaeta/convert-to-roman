let d = document,
  $input = d.getElementById("form-number"),
  $btn = d.getElementById("form-btn"),
  $result = d.getElementById("result");


$btn.addEventListener("click",(e)=>{
  let num = $input.value;

  if(num < 1 || num > 4000){
    $result.classList.add("border-danger");
    $result.innerText = "Error: El número debe ser mayor a 1 y menor que 4000.";
    $input.value = "";
    setTimeout(() => {
      $result.classList.remove("border-danger")
      $result.innerText = "Resultado";
    }, 2000);
  }else{
    $result.innerText = `${num} => ${convertToRoman($input.value)}`
    $input.value = "";
  }



})


function convertToRoman(num) {
  let letters = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

  let roman = "";

  for (let val in letters) {
    while (num >= letters[val]) {
      roman += val;
      num -= letters[val]
    }
  }
  return roman
}

