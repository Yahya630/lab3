// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

// 🟩 PART 1: Selecting and Styling Elements (1–10)

// 1️⃣ Change text color of heading with id="title" to red
document.getElementById('title').style.color = 'red';

// 2️⃣ Change background color of all <p> elements to lightgray
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => p.style.backgroundColor = 'lightgray');

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!"
document.getElementById('title').textContent = 'Welcome to the DOM Lab!';

// 4️⃣ Add a solid black border to all <div> elements
const divs = document.querySelectorAll('div');
divs.forEach(div => div.style.border = '2px solid black');

// 5️⃣ Increase font size of the first <h1> to 36px
document.querySelector('h1').style.fontSize = '36px';

// 6️⃣ Change text color of elements with class="highlight" to blue
const highlights = document.querySelectorAll('.highlight');
highlights.forEach(el => el.style.color = 'blue');

// 7️⃣ Add CSS class "active" to the first <div>
document.querySelector('div').classList.add('active');

// 8️⃣ Change the <body> background color to lightblue
document.body.style.backgroundColor = 'lightblue';

// 9️⃣ Set the font family of all <p> elements to Arial
paragraphs.forEach(p => p.style.fontFamily = 'Arial');

// 🔟 Change the image source of #sampleImage
const img = document.getElementById('sampleImage');
if (img) {
    img.src = 'https://via.placeholder.com/200/0000FF/FFFFFF?text=Changed!';
}

// 🟦 PART 2: Creating and Appending Elements (11–20)

// 1️⃣1️⃣ Create a new <p> and append it to the <body>
const newPara = document.createElement('p');
newPara.textContent = 'This is a dynamically created paragraph!';
document.body.appendChild(newPara);

// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>
const newLi = document.createElement('li');
newLi.textContent = 'New List Item';
const ul = document.getElementById('mainList');
if (ul) ul.appendChild(newLi);

// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>
const clickBtn = document.createElement('button');
clickBtn.textContent = 'Click Me!';
const btnContainer = document.getElementById('buttonContainer');
if (btnContainer) btnContainer.appendChild(clickBtn);

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>
const newH2 = document.createElement('h2');
newH2.textContent = 'Dynamically Inserted Heading';
const firstP = document.querySelector('p');
if (firstP) firstP.parentNode.insertBefore(newH2, firstP);

// 1️⃣5️⃣ Create an image and set width and height
const dynamicImg = document.createElement('img');
dynamicImg.src = 'https://via.placeholder.com/150';
dynamicImg.width = 150;
dynamicImg.height = 150;
dynamicImg.alt = 'Dynamic Image';
document.body.appendChild(dynamicImg);

// 1️⃣6️⃣ Add 3 new <li> items using a loop
for (let i = 1; i <= 3; i++) {
    const li = document.createElement('li');
    li.textContent = `Loop Item ${i}`;
    if (ul) ul.appendChild(li);
}

// 1️⃣7️⃣ Create a <div> with class "card" and text inside
const cardDiv = document.createElement('div');
cardDiv.className = 'card';
cardDiv.textContent = 'This is a card element created dynamically';
document.body.appendChild(cardDiv);

// 1️⃣8️⃣ Append a paragraph containing your name
const namePara = document.createElement('p');
namePara.textContent = 'Created by: Your Name';
document.body.appendChild(namePara);

// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>
const allParas = document.querySelectorAll('p');
allParas.forEach(p => {
    const span = document.createElement('span');
    span.textContent = ' [Edited]';
    span.style.color = 'red';
    p.appendChild(span);
});

// 2️⃣0️⃣ Remove the last child of <ul>
if (ul && ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
}

// 🟨 PART 3: Event Handling (21–30)

// 2️⃣1️⃣ Add click event that shows an alert
if (clickBtn) {
    clickBtn.addEventListener('click', () => {
        alert('Button was clicked!');
    });
}

// 2️⃣2️⃣ Change background color of a <div> when clicked
const firstDiv = document.querySelector('div');
if (firstDiv) {
    firstDiv.addEventListener('click', () => {
        firstDiv.style.backgroundColor = 'lightcoral';
    });
}

// 2️⃣3️⃣ When hovering over <p>, make it bold
allParas.forEach(p => {
    p.addEventListener('mouseenter', () => {
        p.style.fontWeight = 'bold';
    });
});

// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style
allParas.forEach(p => {
    p.addEventListener('mouseleave', () => {
        p.style.fontWeight = 'normal';
    });
});

// 2️⃣5️⃣ Add button to hide the image
const hideBtn = document.createElement('button');
hideBtn.textContent = 'Hide Image';
hideBtn.addEventListener('click', () => {
    if (img) img.style.display = 'none';
});
if (btnContainer) btnContainer.appendChild(hideBtn);

// 2️⃣6️⃣ Add button to show the image again
const showBtn = document.createElement('button');
showBtn.textContent = 'Show Image';
showBtn.addEventListener('click', () => {
    if (img) img.style.display = 'block';
});
if (btnContainer) btnContainer.appendChild(showBtn);

// 2️⃣7️⃣ Create a counter button that increases with each click
let counter = 0;
const counterBtn = document.createElement('button');
counterBtn.textContent = `Counter: ${counter}`;
counterBtn.addEventListener('click', () => {
    counter++;
    counterBtn.textContent = `Counter: ${counter}`;
});
if (btnContainer) btnContainer.appendChild(counterBtn);

// 2️⃣8️⃣ Display entered text from an input when button clicked
const displayTextBtn = document.getElementById('displayTextBtn');
const textInput = document.getElementById('textInput');
const displayArea = document.getElementById('displayArea');
if (displayTextBtn && textInput && displayArea) {
    displayTextBtn.addEventListener('click', () => {
        displayArea.textContent = `You entered: ${textInput.value}`;
    });
}

// 2️⃣9️⃣ Change background color randomly when a button is clicked
const randomColorBtn = document.createElement('button');
randomColorBtn.textContent = 'Random Background Color';
randomColorBtn.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
if (btnContainer) btnContainer.appendChild(randomColorBtn);

// 3️⃣0️⃣ Display which key is pressed
const keyInput = document.getElementById('keyInput');
const keyDisplay = document.getElementById('keyDisplay');
if (keyInput && keyDisplay) {
    keyInput.addEventListener('keydown', (e) => {
        keyDisplay.textContent = `Key pressed: ${e.key} (Code: ${e.keyCode})`;
    });
}

// 🟧 PART 4: Modifying and Traversing DOM (31–40)

// 3️⃣1️⃣ Change text of the first <li>
const firstLi = document.querySelector('li');
if (firstLi) firstLi.textContent = 'First Item - Modified!';

// 3️⃣2️⃣ Get input value when button clicked (already done in #28, but here's another example)
const getValueBtn = document.createElement('button');
getValueBtn.textContent = 'Get Input Value';
getValueBtn.addEventListener('click', () => {
    if (textInput) {
        alert(`Input value: ${textInput.value}`);
    }
});
if (btnContainer) btnContainer.appendChild(getValueBtn);

// 3️⃣3️⃣ Count number of <p> and alert the count
const countBtn = document.createElement('button');
countBtn.textContent = 'Count Paragraphs';
countBtn.addEventListener('click', () => {
    const pCount = document.querySelectorAll('p').length;
    alert(`There are ${pCount} paragraphs on the page.`);
});
if (btnContainer) btnContainer.appendChild(countBtn);

// 3️⃣4️⃣ Remove all <p> elements (commented out to preserve the page structure)
const removeAllBtn = document.createElement('button');
removeAllBtn.textContent = 'Remove All Paragraphs';
removeAllBtn.addEventListener('click', () => {
    const allP = document.querySelectorAll('p');
    allP.forEach(p => p.remove());
});
    if (btnContainer) btnContainer.appendChild(removeAllBtn);

// 3️⃣5️⃣ Replace existing <h2> with new one
const firstH2 = document.querySelector('h2');
if (firstH2) {
    const replacementH2 = document.createElement('h2');
    replacementH2.textContent = 'This H2 was replaced!';
    firstH2.parentNode.replaceChild(replacementH2, firstH2);
}

// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>
const allLis = document.querySelectorAll('li');
allLis.forEach(li => li.classList.add('highlighted'));

// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked
const toggleDiv = document.getElementById('toggleDiv');
if (toggleDiv) {
    toggleDiv.addEventListener('click', () => {
        toggleDiv.classList.toggle('active');
    });
}

// 3️⃣8️⃣ Clone an existing element and append copy
const cloneSource = document.getElementById('cloneSource');
if (cloneSource) {
    const clonedElement = cloneSource.cloneNode(true);
    clonedElement.textContent = 'Cloned Element';
    clonedElement.style.background = 'lightgreen';
    cloneSource.parentNode.appendChild(clonedElement);
}

// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked
const scrollBtn = document.getElementById('scrollBtn');
if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
}

// 4️⃣0️⃣ Build list dynamically using innerHTML from an array
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
const dynamicList = document.createElement('ul');
dynamicList.innerHTML = fruits.map(fruit => `<li>${fruit}</li>`).join('');
const dynamicContainer = document.createElement('div');
dynamicContainer.className = 'container';
const listHeading = document.createElement('h2');
listHeading.textContent = 'Dynamic Fruit List';
dynamicContainer.appendChild(listHeading);
dynamicContainer.appendChild(dynamicList);
document.body.appendChild(dynamicContainer);
