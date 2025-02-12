
export function generateRandomName(names) {
    const randomIndex = Math.floor(Math.random() * names.length);  
    return names[randomIndex];  
}


export function generateRandomGroups(names, groupSize, groupCount) {
    let randomNames = [...names];  
    randomNames.sort(() => Math.random() - 0.5);  

    const groups = [];
    let currentGroup = [];

 
    for (let i = 0; i < randomNames.length; i++) {
        if (currentGroup.length < groupSize) {
            currentGroup.push(randomNames[i]);
        } else {
            groups.push(currentGroup);  
            currentGroup = [randomNames[i]];  
        }
    }

    
    if (currentGroup.length > 0) {
        groups.push(currentGroup);
    }

    return groups;  
}
