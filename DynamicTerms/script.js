const practicelist = document.getElementById("practiceList");
const termInput = document.getElementById("termInput");
const termEffectiveDate = document.getElementById("termEffectiveDate");
const Penalty = document.getElementById("Penalty");

const submitTermBtn = document.getElementById("submitTerm");


const termList = ["No swearing", "No complaining", "no farting", "no breathing", "standing still cost 1 dollar"];

(()=> { //initialize Original Term list 
    for(let terms of termList)
    {
        let tmpItm = document.createElement("li");
        tmpItm.textContent = terms;
       practicelist.appendChild(tmpItm);
    }
})();

function clrText()
{
    termInput.value = "";
    termEffectiveDate.value = "";
    Penalty.value = "";
}

function newTerm(Term, EffectiveDate, Penalty) //create an object for a term
{
    this.Term = Term;
    this.EffectiveDate = EffectiveDate;
    this.Penalty = Penalty;
        }


function submitTerm()
{
    if (termInput.value == "" || termEffectiveDate.value == "" || Penalty.value == "")
        {
            alert("Please input the term conditions");
        } else {
        let tmpTerm = new newTerm(termInput.value, termEffectiveDate.value, Penalty.value); //make an instance of an object everytime the functions called
        console.log(tmpTerm);
        let termChild = document.createElement("li");  //make a new element everytime the functions called
        termChild.textContent = `${tmpTerm.Term} Effective: ${tmpTerm.EffectiveDate} Penalty: ${tmpTerm.Penalty}`;
        practicelist.appendChild(termChild); //attach the element to the parent list
        termList.push({ //push it all to submit
            Term:tmpTerm.Term,
            Date:tmpTerm.EffectiveDate,
            Penalty:tmpTerm.Penalty
        });
        console.log(termList);
        clrText();
}
}
submitTermBtn.addEventListener("click", submitTerm);
