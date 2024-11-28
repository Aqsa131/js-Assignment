
var field = document.getElementById('field')
var ol = document.getElementById('ol')
ol.setAttribute('class' , 'ol')

function add() {
    if (field.value.trim() === "") {
        alert('To Add Items, Enter the Field')
    }
    else {

        var li = document.createElement('li')
        var liText = document.createTextNode(field.value)
        li.setAttribute('class' , 'li')
        ol.appendChild(li)
        li.appendChild(liText)

    }
    field.value = ''
    // edit btn

    var editBtn = document.createElement('button')
    var editBtnTxt = document.createTextNode('EDIT')
    editBtn.appendChild(editBtnTxt)
    editBtn.setAttribute('class' , 'editBtn')
    editBtn.setAttribute('onClick', 'editTask(this)' )
    li.appendChild(editBtn)

    // deleteBtn

    var del = document.createElement('button')
    var delTxt = document.createTextNode('DELETE')
    del.setAttribute('class' , 'del')
    del.setAttribute('onClick' , 'deleteTask(this)')


    del.appendChild(delTxt)
    li.appendChild(del)



}

// deleteALL

function deleteAll() {
    ol.innerHTML = '';
}

// edit btn
function editTask(editvalue){
    var oldValue = editvalue.parentNode.firstChild.nodeValue
    var newValue = prompt('Edit the value' , oldValue)
    editvalue.parentNode.firstChild.nodeValue = newValue
}

// delete task
function deleteTask(delTask){
    delTask.parentNode.remove()
}
