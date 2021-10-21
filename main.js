let toDos =[{name: "eat", isCompleted: false}, {name: "work", isCompleted: true}];


const deleteListItem = (index) => {
    toDos.splice(index, 1);
    renderList();
}

const updateListItem = (index) => {
    $( "li" ).append(`<input type="text" name="inputLi" id="inputLi">`);
    let toEdit = $('#inputLi').val();
    toDos.push(item.name = toEdit);
    renderList();
}

const notCompleted = () =>{
    toDos = toDos.filter( (item, index) => !item.isCompleted);
   return toDos.length;
   renderList();
}

const Completed = (arr, index) => {
    $('li').toggleClass('completed');
    item.isCompleted = true;
}

const renderList = () => {

$( "ul" ).html("");

toDos.forEach((item, index) => {

    $( "ul" ).append(`<li class="liList" onclick="Completed(${index})">${item.name}
    <button class="btnChanges" id="btnChanges" onclick="updateListItem(${index})">EDIT</button>
    <button class="btnChanges" id="btnRemove" onclick="deleteListItem(${index})">REMOVE</button>
    </li>`)
});
}

renderList();

$( "#p" ).append(`You have ${notCompleted()} todos left`)

$( "#btnClearL" ).click(() => { 
    toDos.length = 0;  
    $( "ul" ).html(""); 
    $( "#p" ).remove();
    $( "#p0" ).append("You have 0 todos left");
    renderList();
});

$( "#btnClearC" ).click(() => { 
    toDos = toDos.filter( (item) => item.isCompleted == true);
    renderList();
});


$('#btnAdd').click((item, index) => {
    if ($( '#input' ).val() == '') {
		return;
	}

    let toAdd = $('#input').val();
    toDos.push({name: toAdd, isCompleted: false});
    renderList();
    $( '#input' ).val(""); 
});