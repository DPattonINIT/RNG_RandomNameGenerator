export function addName(name, nameList) {
    const listItem = document.createElement('li');  
    listItem.textContent = name;  

    const deleteBtn = document.createElement('button');  
    deleteBtn.textContent = 'Delete';  
    deleteBtn.classList.add('deleteBtn');  

  
    deleteBtn.addEventListener('click', () => {
        deleteName(name, nameList); 
    });

    listItem.appendChild(deleteBtn);  
    nameList.appendChild(listItem);  
}

export function deleteName(name, nameList) {
    const listItems = nameList.querySelectorAll('li');
    listItems.forEach(item => {
        if (item.textContent.startsWith(name)) {
            item.remove();
        }
    });
}

export function loadNames(nameList, names) {
    names.forEach(name => {
        addName(name, nameList);
    });
}
