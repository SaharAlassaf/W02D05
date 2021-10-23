let toDos =[
    {name: "eat", isCompleted: false}, 
    {name: "work", isCompleted: true},
];


const deleteListItem = (index) => {
    toDos.splice(index, 1);
    renderList();
}


const updateListItem = (index) => {    

    //change li content to input text
	$( '#liList-'+index ).html(`<input type="text" id='input-${index}''>`);
    $( '#input-'+index ).val(toDos[index].name);
    $( '#input-'+index ).change(() => {
        //change value in array
        toDos[index].name = $( '#input-'+index ).val();
        console.log("e");
        renderList();
    });
};


const Completed = (index) => {
    toDos = toDos.map((item, i) => {
        if (index === i){
            return { ...item, isCompleted: !item.isCompleted};
        } else return item;
    });
    renderList();
}

const renderList = () => {

$( "ul" ).html("");
let count = 0;

toDos.forEach((item, index) => {

    $( "ul" ).append(`<li id="liList-${index}"> 
    <span data-id="editable-list-item" onclick="Completed(${index})" class=${item.isCompleted ? 'completed': ''}>${item.name}</span>
    <a class="edit" onclick="updateListItem(${index})">EDIT</a>
    <a class="remove" onclick="deleteListItem(${index})">REMOVE</a>
    </li>`)

    if (item.isCompleted === false) {
      count++;
    }
});

const notCompleted = toDos.filter( (item) => !item.isCompleted);
$( "#p" ).html(`You have ${count} todos left`);


}
renderList();


$( '#btnAdd' ).click((item, index) => {
    if ($( '#input' ).val() == '') {
		return;
	}
    let newTask = $( '#input' ).val();
    toDos.push({name: newTask, isCompleted: false});
    renderList();
    $( '#input' ).val(""); 
});


$( "#btnClearL" ).click(() => { 
    toDos.length = 0;  
    renderList();
});


$( "#btnClearC" ).click(() => { 
    toDos = toDos.filter( (item) => !item.isCompleted);
    renderList();
});