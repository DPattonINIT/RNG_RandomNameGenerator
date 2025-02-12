


export function saveNamesToStorage(nameList) {
    const names = [];
    const listItems = nameList.getElementsByTagName('li');  

    
    for (let i = 0; i < listItems.length; i++) {
        const name = listItems[i].textContent.replace('Delete', '').trim();  
        names.push(name);  
    }

    localStorage.setItem('names', JSON.stringify(names));  
}


export function getNamesFromStorage() {
    const names = JSON.parse(localStorage.getItem('names')) || [];  
    return names;  
}
