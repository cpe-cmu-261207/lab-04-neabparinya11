
  (function(){

    const input = document.querySelector('#item') 
    const btnAdd = document.querySelector('#addTodo')
    const ul = document.querySelector('#list')
    const ul2 = document.querySelector('#list2')

    const dataFile = []
    const dataFile2 = [];
    let dataRead ;

    input.addEventListener("keypress", e => {
        if(e.keyCode === 13){
        Adds();
        AddToStorage();
        ReadStorage();

        input.value = "";
        }
    })

    btnAdd.addEventListener('click', e =>{
        // store();
        Adds();
        AddToStorage();
        ReadStorage();

        input.value = "";
        
    })

    function Adds(){
        dataFile.push({name:input.value});     
        
    }
    function AddToStorage(){
        localStorage.setItem("Todo",JSON.stringify(dataFile))
    }
    function ReadStorage(){
        dataRead = JSON.parse(localStorage.getItem("Todo"))
        getValues();
    }
    function AddToStorage2(){
        localStorage.setItem("Finish",JSON.stringify(dataFile2))
    }


    function getValues() {
        var storedValues = JSON.parse(localStorage.getItem("Todo"))
        var i = 0;
        if(!storedValues) {
            ul.innerHTML = '' 
        }
        else {
            ul.innerHTML = '';
            for(i=0;i<storedValues.length;i++){
                const list = document.createElement('li')
                const donBut = document.createElement('button')
                const delBut = document.createElement('button')
                ul.appendChild(list).innerHTML = storedValues[i].name;
                list.classList.add('listBtn');

                list.id = "listData"
                delBut.innerHTML = "Delete"
                donBut.innerHTML = "Done"
                delBut.classList.add('btnList','btn', 'btn-danger');
                donBut.classList.add('btnList','btn', 'btn-success');
                donBut.id = "btnDone"
                delBut.id = "btnDel"
                list.style.listStyle ="none"
                list.appendChild(donBut)
                list.appendChild(delBut)
                
                const name = storedValues[i].name;
                donBut.addEventListener('click', e =>{
                dataFile2.push({nameFinish:name});
                AddToStorage2();
                ShowListDone();
                })

                delBut.addEventListener('click', e =>{
                var t = e.composedPath().map((curr,index) =>{
                    return index == 2
                })
                console.log(t)
                })
            } 
            
        }
      }

      
    function ShowListDone(){
        var storedValues = JSON.parse(localStorage.getItem("Finish"))
        ul2.innerHTML = '';
        for(i=0;i<storedValues.length;i++){
            const list = document.createElement('li')
            list.style.textDecoration = "line-through"
            ul2.appendChild(list).innerHTML = storedValues[i].nameFinish;

        } 
    }

    getValues();

    

})()
    