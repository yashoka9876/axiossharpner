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
    axios.post('https://crudcrud.com/api/1f9dbdd059f544db81c0e94228b540b9/appointmentDate',obj)
    .then((response)=>console.log(response))
    .catch(error=>console.log(error))

    email.value='';
    name.value='';
    number.value='';
}

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/1f9dbdd059f544db81c0e94228b540b9/appointmentDate')
    .then((response)=>{
        for(let i=0;i<response.data.length;i++){
            showOnScreen(response.data[i]);
        }
    })
    .catch(error=>console.log(error))
})



ul.addEventListener('click',deleteElement);

function deleteElement(e){
    if(e.target.classList.contains('delete')){
        let parent=e.target.parentElement;
        let text=parent.firstChild.textContent;

        let att=e.target.getAttribute('id');
        
        axios.delete('https://crudcrud.com/api/1f9dbdd059f544db81c0e94228b540b9/appointmentDate/'+att)
    .then((response)=>{
        console.log(response);
    })
    .catch(error=>console.log(error))

         ul.removeChild(parent);
         
    }
}

ul.addEventListener('click',updateElement);

function updateElement(e){
    if(e.target.classList.contains('edit')){
        let parent=e.target.parentElement;

         let str=parent.firstChild.textContent;
         let arr=str.split(' - ');
         document.getElementById('email').value=arr[0];
         document.getElementById('name').value=arr[1];
         document.getElementById('number').value=arr[2];




        let text=parent.firstChild.textContent;



        let att=e.target.getAttribute('id');
        
        axios.delete('https://crudcrud.com/api/1f9dbdd059f544db81c0e94228b540b9/appointmentDate/'+att)
    .then((response)=>{
        console.log(response);
    })
    .catch(error=>console.log(error))

         ul.removeChild(parent);


         
    }
}



function showOnScreen(obj){
    let li=document.createElement('li');
    li.classList='list-group-item';
    let str=`${obj.email} - ${obj.name} - ${obj.number}`;


    let btn=document.createElement('button');
    //  btn.className='delete';
    btn.classList='btn btn-danger btn-sm float-right delete mx-1';
    btn.setAttribute('id',obj._id);
    btn.appendChild(document.createTextNode('Delete'));


    //CREASTE EDIT BUTTON
    let edit=document.createElement('button');
    // edit.className='edit';
     edit.classList='btn btn-primary btn-sm float-right edit mx-1';
     edit.setAttribute('id',obj._id);
    edit.appendChild(document.createTextNode('Edit'));
   


    li.appendChild(document.createTextNode(str));
    li.appendChild(btn);
    li.appendChild(edit);

    ul.appendChild(li);

}