const yogaClass = [
    {
        name: 'Sunrise Flow',
        style: 'Vinyasa',
        length: '60 min',
        image: 'images/sunrise-flow.jpg',
        description: 'A dynamic, breath-linked sequence that builds heat gradually as the sun comes up. Expect sun salutations, standing postures, and a gentle cool-down to start your day centered and energized.',
        tags: ['vinyasa', 'morning'],
    },
    {
        name: 'Power Vinyasa',
        style: 'Vinyasa',
        length: '75 min',
        image: 'images/power-vinyasa.jpg',
        description: 'A challenging, athletic class that links strength-building postures with continuous movement. Build core strength, stamina, and focus through creative, fast-paced sequencing.',
        tags: ['vinyasa', 'mid-day',]
    },
    {
        name: 'Deep Release Yin',
        style: 'Yin',
        length: '60 min',
        image: 'images/deep-release-yin_50.jpg',
        description: 'A slow, meditative practice where poses are held for 3-5 minutes to target connective tissue and deep fascia. A restorative counterbalance to more active practices.',
        tags: ['yin', 'evening',]
    },
    {
        name: 'Yin & Sound Bath',
        style: 'Yin',
        length: '90 min',
        image: 'images/yin-sound-bath.jpg',
        description: 'Long-held, floor-based yin postures paired with the healing vibrations of singing bowls and gongs. A deeply calming experience for both body and nervous system.',
        tags: ['yin', 'evening'],
    },
    {
        name: 'Classic Bikram 26',
        style: 'Bikram',
        length: '90 min',
        image: 'images/classic-bikram-26.jpg',
        description: 'The traditional 26-posture, 2-breathing-exercise sequence practiced in a room heated to 105°F with 40% humidity. Builds strength, flexibility, and detoxifying sweat.',
        tags: ['bikram', 'morning'],
    },
    {
        name: 'Hot Sculpt & Sweat',
        style: 'Hot Yoga',
        length: '60 min',
        image: 'images/hot-sculpt-sweat.jpg',
        description: 'A fusion class combining hot yoga postures with light hand weights for an intense, calorie-torching workout. Set to upbeat music in a heated room to maximize sweat and strength gains.',
        tags: ['hot yoga', 'mid-day'],
    },
];


const classContainer = document.getElementById("class-card-container");

const searchButton = document.getElementById("searchButton");  
searchButton.addEventListener("click", search);

function search(event) {
    event.preventDefault();
    const userInput = document.getElementById("findClass").value.toLowerCase();

    const filteredClasses = yogaClass.filter(yogaClass => {
        return yogaClass.name.toLowerCase().includes(userInput) ||
            yogaClass.description.toLowerCase().includes(userInput) ||
            yogaClass.tags.some(tag => tag.toLowerCase().includes(userInput));
    });

    filteredClasses.sort(sortYogaClassByName);
    classContainer.innerHTML = '';
    filteredClasses.forEach(function(yogaClass){
        renderClass(yogaClass);
    });
}

function sortYogaClassByName(a, b) {
  if(a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  }
  return 0;
}

document.getElementById("findClass").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search(event);
    }
});

// Template for tags

function tagTemplate(tags) {
    return tags.map((tag)=> `<button>${tag}</button>`).join(' ');
}

// Template for class

function classTemplate(yogaClass) {
    return `<div class="class-card">
        <h2 class="class-name">${yogaClass.name}</h2>
        <img class="class-img" src="${yogaClass.image}" alt="Image of ${yogaClass.name}">
        <p class="description">${yogaClass.description}</p>
        <div class="tags">
            ${tagTemplate(yogaClass.tags)}
        </div>
        <button class="sign-up">Sign Up</button>
    </div>`;
}


function renderClass(yogaClass) {
    let html = classTemplate(yogaClass);
    classContainer.innerHTML += html;
}

// Sign up stuff

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");

const joinClass = document.getElementById("signUp").addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";
    firstName.value.trim();
    lastName.value.trim();
    email.value.trim();

    output.innerHTML = `
    <h2>See you at class!</h2>
    <p>${firstName.value} ${lastName.value}</p>
    <p>${email.value}</p>
    `;

    form.reset();
})

// Sign up toggle

classContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("sign-up")) {
        document.querySelector(".sign-up-container").classList.add("show");
    }
})

// nav sign up link

const signUpLink = document.getElementById("signUpLink");

signUpLink.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(".sign-up-container").classList.add("show");
})
    
// Menu Button

let menuButton = document.querySelector(".menu");

menuButton.addEventListener("click", handleMenuButtonClick);

function handleMenuButtonClick(event) {
    console.log(event);
    let nav = document.querySelector("nav");
    nav.classList.toggle("hide");
    menuButton.classList.toggle("change");
}

// Randomize starting class card

function getRandomClass() {
    const randomIndex = Math.floor(Math.random() * yogaClass.length)
    return yogaClass[randomIndex];
}

classContainer.innerHTML = '';
renderClass(getRandomClass());
