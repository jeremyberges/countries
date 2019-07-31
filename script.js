const cn = document.querySelector('#countriesNum'),
    ul = document.querySelector('#ul');
document.getElementById("search").oninput = onValueChange
let arr;

async function getCountry() {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        arr = response.data;
        displayList(arr)



        cn.innerText = `(${response.data.length})`;


    } catch (error) {
        console.error(error);
    }


}

getCountry();




function displayList(arr1) {
    Country = arr1.map(item =>
        `
<li>
       <div class="Flag"
           style="background-image: url('${item.flag}')">
       </div>
       <div>
            <span class="name" >${item.name} -${item.nativeName} </span>
            <span class="continant">${item.region}</span>
           
           </div>
      
   </li>`).join('');

    ul.innerHTML = Country;
}

function onValueChange(e) {
    let { value } = e.target
    value = value.toLowerCase()

    const filteredArr = arr.filter(item => item.name.toLowerCase().startsWith(value));
    displayList(filteredArr)
}