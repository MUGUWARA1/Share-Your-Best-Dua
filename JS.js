import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseURL: "https://best-dua-default-rtdb.europe-west1.firebasedatabase.app/"
}


const text = document.getElementById("inp1")
const btn = document.getElementById("publish-btn")
const field =document.getElementById("pubs fields")

const app=initializeApp(appSettings)
const DB=getDatabase(app)
const Duas = ref(DB,"Duas")

btn.addEventListener("click",function()
    {
        let dua = text.value
        push(Duas,dua)

        clearDuainput()
    }
)


function addDua(d)
{
    let pub = document.createElement("div")
    pub.classList.add("divi")
    pub.textContent=d
    field.append(pub)

}


onValue(Duas,function(a){
    let duaArray = Object.entries(a.val())
    clearDuaField()
    for(let i = 0 ;i<duaArray.length;i++)
    {
        let currentdua = duaArray[i]
        let currentduaValue=currentdua[1]
        let currentduakey = currentdua[0]
        addDua(currentduaValue)
    }

})

function clearDuaField()
{
    field.innerHTML=""
}
function clearDuainput()
{
    text.value=""
}