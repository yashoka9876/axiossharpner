let form=document.getElementById('addForm');

let ul=document.getElementById('items');

form.addEventListener('submit',addFrom);



function addFrom(e){
    e.preventDefault()
    let email=document.getElementById('email');
    let name=document.getElementById('name');
    let number=document.getElementById('number');

    let obj={
        email:email.value,
        name:name.value,
        number:number.value
    }
     
    showOnScreen(obj);
    axios.post('https://crudcrud.com/api/44314eabb8ec4ec5b3c5c2961b65a81f/appointmentDate',obj)
    .then((response)=>console.log(response))
    .catch(error=>console.log(error))

    email.value='';
    name.value='';
    number.value='';
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/44314eabb8ec4ec5b3c5c2961b65a81f/appointmentDate')
    .then((response)=>{
        for(let i=0;i<response.data.length;i++){
            showOnScreen(response.data[i]);
        }
    })
    .catch(error=>console.log(error))
})

function showOnScreen(obj){
    let li=document.createElement('li');
    li.classList='list-group-item';
    let str=`${obj.email} - ${obj.name} - ${obj.number}`;
    li.appendChild(document.createTextNode(str));

    ul.appendChild(li);

}