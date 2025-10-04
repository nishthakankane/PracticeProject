const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"

const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".To select");



for(let select of dropdown){
 for(currcode in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = currcode;
    newOption.value = currcode;
    if(select.name === "from" && currcode === "USD"){
    newOption.selected = "selected";
    } else if (select.name ==="to" && currcode === "INR"){
        newOption.selected= "selected";
    }
    select.append(newOption);
 }

select.addEventListener("change" , (evt) =>{
    updateFlag(evt.target);
});
};
 
const updateFlag =(element) =>{
    let currcode = element.value;
    let countrycode = countryList[currcode];
    let newSrc =`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    console.log(amtval);
    if(amtval ==="" || amtval<1){
        amtval = 1;
        amount.value ="1";
    }
    console.log(fromCurr.value,toCurr.value);
    const URL = `${BASE_URL}/${fromCurr}/${toCurr}.json`;
    let response = await fetch(URL);
    console.log(response);

});
