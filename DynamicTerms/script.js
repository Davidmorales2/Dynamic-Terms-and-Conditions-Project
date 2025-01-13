const practicelist = document.getElementById("practiceList");
const termInput = document.getElementById("termInput");
const termEffectiveDate = document.getElementById("termEffectiveDate");
const Penalty = document.getElementById("Penalty");
const commit = document.getElementById("commitTerms");
const submitTermBtn = document.getElementById("submitTerm");
const commitTermsVerification = document.getElementById("commitTermsVerificationTxt");

const termList = [];
//TODO: ADD REMOVE AND EDIT BUTTON USING MODALS
(()=> { //initialize Term list from local storage 
    termList.push(localStorage.getItem(JSON.parse(localStorage.getItem("TermsAndConditionDataPractice"))));
    
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

function commitChangeConfirm()
{

    localStorage.setItem("TermsAndConditionDataPractice",JSON.stringify(termList));
}

function submitTerm()
{
    if (termInput.value == "" || termEffectiveDate.value == "" || Penalty.value == "")
        {
            alert("Please input the term conditions");
        } else {
        let currentTerm = new newTerm(termInput.value, termEffectiveDate.value, Penalty.value); //make an instance of an object everytime the functions called
        console.log(currentTerm);
        let termChild = document.createElement("li");  //make a new element everytime the functions called
        termChild.textContent = `${currentTerm.Term} Effective: ${currentTerm.EffectiveDate} Penalty: ${currentTerm.Penalty}`;

        termList.push(`${currentTerm.Term} Effective: ${currentTerm.EffectiveDate} Penalty: ${currentTerm.Penalty}`); //push full text to termList
        
        practicelist.appendChild(termChild); //attach the element to the parent list
        console.log(termList);
        clrText();
        commit.addEventListener("click",()=>{commitTermsVerification.innerText="Terms committed to database!"; commitChangeConfirm();}); //just leaving this like this for testing
}
}

submitTermBtn.addEventListener("click", submitTerm);
