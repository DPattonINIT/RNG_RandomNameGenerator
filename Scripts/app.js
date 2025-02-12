
import { addName, deleteName, loadNames } from './nameManager.js';
import { generateRandomName, generateRandomGroups } from './groupManager.js';
import { saveNamesToStorage, getNamesFromStorage } from './storage.js';

document.addEventListener('DOMContentLoaded', () => {
    const nameList = document.querySelector('.nameList');
    const nameGenerator = document.getElementById('nameGenerator');
    const groupResults = document.getElementById('groupResults');
    const userNameInput = document.getElementById('userName');
    const addBtn = document.getElementById('addBtn');
    const generateBtn = document.getElementById('generateBtn');
    const randomBtn = document.getElementById('RandomBtn');
    const sliderValue = document.getElementById('sliderValue');
    const slider = document.getElementById('disabled-range');
    const groupSection = document.querySelector('.groupSection');  
    const closeGroupBtn = document.getElementById('closeGroupBtn');

    const names = getNamesFromStorage();
    loadNames(nameList, names);

    addBtn.addEventListener('click', () => {
        const name = userNameInput.value.trim();
        if (name) {
            addName(name, nameList);
            saveNamesToStorage(nameList);
            userNameInput.value = '';  
        }
    });

    generateBtn.addEventListener('click', () => {
        const randomName = generateRandomName(names);
        nameGenerator.textContent = randomName;
    });

    randomBtn.addEventListener('click', () => {
        const groupSize = parseInt(slider.value, 10);
        const groupCount = 3;  
        const groups = generateRandomGroups(names, groupSize, groupCount);
        groupResults.innerHTML = groups.map(group => `<div>Group: ${group.join(', ')}</div>`).join('');
        
        
        groupSection.style.display = 'block';  
       
    });

    closeGroupBtn.addEventListener('click', () => {
        groupSection.style.display = 'none'; 
    });

    slider.addEventListener('input', () => {
        sliderValue.textContent = slider.value;
    });
});
