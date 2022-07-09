let myLeads=[]
const inputEl=document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")
let deleteBtn =document.getElementById("delete-btn")
let tabBtn=document.getElementById("tab-btn")


const myDb = JSON.parse(localStorage.getItem("myLeads"));
if(myDb){
    myLeads=myDb
    rander(myLeads)
}



tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

      
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    rander(myLeads)
   
     })
  
})


function rander(leads)
{

    let listItem=""
for(let i=0;i<leads.length;i++)
{
    //listItem += "<li><a traget='_blank' href='"+myLeads[i]+"'>"+ myLeads[i] +"</a></li>"
    listItem += `
    <li>
    <a traget='_blank' href='${leads[i]}'>
        ${leads[i]}
    </a>
    </li>`
 
}
ulEl.innerHTML=listItem

}


deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    rander(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    inputEl.value=""
    rander(myLeads)

})

