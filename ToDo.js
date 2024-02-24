let listcontainer=document.getElementById("mylist");
let tasks=document.getElementById( "tasks" );
var inputcontent=document.getElementById("inputcontainer");
function addTask(){
    if(inputcontent.value===''){
        let p=document.createElement('p');
        p.textContent="Please enter a task!";
       
        tasks.appendChild(p);
        }else{ 
             
            let  li = document.createElement('li');
            li.textContent=inputcontent.value;
            listcontainer.appendChild(li);

         let span=document.createElement('span');
         span.textContent='\u00D7'
         li.appendChild(span);  
    }
    inputcontent.value='';
    
}
tasks.addEventListener('click',(el)=>{
    if(el.target.tagName=='LI'){
        el.target.classList.toggle('checked');
    }
    else if(el.target.tagName=='SPAN'){
        el.target.parentElement.remove();g
    }
    
})

