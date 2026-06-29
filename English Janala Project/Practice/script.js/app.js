const   createElement = (arr) => {
    const htmlElements = arr.map( el => `<span class = "btn"> ${el} </span>`)
    return htmlElements.join(" ");
}

const pronounceWord = (word) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-EN";
    window.speechSynthesis.speak(utterance);
}

const loadLessons = () => {
    fetch('https://openapi.programming-hero.com/api/levels/all')
        .then(res => res.json())
        .then(data => displayLesson(data.data))
}

const loadLevelWord = (id) => {
    // console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive();
            const clickBtn = document.getElementById(`lesson-btn-${id}`)
            clickBtn.classList.add('active');
            displayLevelWord(data.data);
        })
}

const removeActive = () => {
    const lessonBtn = document.querySelectorAll(".lesson-btn");
    lessonBtn.forEach(btn => {
        btn.classList.remove('active');
    });
}

// for word details info button

const loadWordDetails = async (id) => {
    const url = (`https://openapi.programming-hero.com/api/word/${id}`)
    console.log(url);
    const res = await fetch(url)
    const details = await res.json();
    displayWordDetails(details.data);
}


const displayWordDetails = (word) => {
    console.log(word);
    const detailsBox = document.getElementById('details-container');
    detailsBox.innerHTML = `
    <div class="">
                    <h2 class="text-2xl font-bold"> ${word.word} ( <i class="fa-solid fa-microphone-lines"></i> :${word.pronunciation})</h2>
                </div>
                <div class="">
                    <h2 class="font-bold"> Meaning </h2>
                    <p>${word.meaning}</p>
                </div>
                <div class="">
                    <h2 class="font-bold"> Example </h2>
                    <p>${word.sentence}</p>
                </div>
                <div class="">
                    <h2 class="font-bold"> Synonym </h2>
                  
                </div>
                <div class=""> ${createElement(word.synonyms)} </div>
`;

    document.getElementById('my_modal_5').showModal();
}

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";

    if (words.length === 0) {
        wordContainer.innerHTML = `
           <div class= "text-center col-span-full space-y-2">
            <img class = "mx-auto" src="./assets/alert-error.png" alt="">
            <p class="text-sm opacity-50">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-medium text-4xl">নেক্সট Lesson এ যান</h2>
        </div>
        `
        return;
    }

    words.forEach(word => {
        // console.log(word);
        const card = document.createElement('div');
        card.innerHTML = `
         <div class="text-center flex flex-col bg-white space-y-5 py-20 px-5 rounded-lg">
                <h2 class="font-bold text-4xl "> ${word.word ? word.word : "এই শব্দ পাওয়া যায় নি"} </h2>
                <p class="font-medium text-xl">Meaning / Pronounciation</p>
                <h2 class="font-bangla font-semibold text-3xl"> ${word.meaning ? word.meaning : "অর্থ পাওয়া যায় নি"} / ${word.pronunciation ? word.pronunciation : "Pronounciation এই শব্দ পাওয়া যায় নি"} </h2>

                <div class="flex justify-between">
                    <button onclick = "loadWordDetails(${word.id})" class="btn"> <i class="fa-solid fa-circle-info"></i> </button>
                    <button onclick = "pronounceWord('${word.word}')" class="btn"> <i class="fa-solid fa-volume-low"></i> </button>
                </div>
            </div>
        `

        wordContainer.append(card);
    })
}


const displayLesson = (lessons) => {
    const levelContainer = document.getElementById('level-container');
    levelContainer.innerHTML = "";

    for (let lesson of lessons) {
        // console.log(lesson);
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
 <button id = "lesson-btn-${lesson.level_no}" onclick = "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"> <i class="fa-solid fa-book-open"> </i> Lesson - ${lesson.lessonName} </button>
        `
        levelContainer.append(btnDiv)
    }

}

loadLessons();