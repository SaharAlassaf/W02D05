let toDos =[
    {name: "eat", isCompleted: false}, 
    {name: "work", isCompleted: true},
];


const deleteListItem = (index) => {
    toDos.splice(index, 1);
    renderList();
}


const updateListItem = (index) => {

    //fetch li needs to change
    let liName = toDos[index].name;
    console.log(liName);

    //change li content to input text
	$( '.liList' ).html(`<input type="text" value="${liName}" id="input">`);
    $( '.liList' ).find('#input').focus();

    //change value in array
    toDos[index].name = liName;

    //change li content to previous format


    console.log("e");
    renderList();
}


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

toDos.forEach((item, index) => {

    $( "ul" ).append(`<li class="liList"> 
    <span onclick="Completed(${index})" class=${item.isCompleted ? 'completed': ''}>${item.name}</span>
    <a class="edit" onclick="updateListItem(${index})">EDIT</a>
    <a class="remove" onclick="deleteListItem(${index})">REMOVE</a>
    </li>`)
});

const notCompleted = toDos.filter( (item) => !item.isCompleted);
$( "#p" ).html(`You have ${notCompleted.length} todos left`);


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