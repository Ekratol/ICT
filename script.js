const questionsDatabase = [
    { id: 1, q: "Co je to RAM?", a: ["Operační paměť počítače", "Pevný disk", "Procesor"], correct: 0 },
    { id: 2, q: "Který program je internetový prohlížeč?", a: ["MS Word", "Google Chrome", "Adobe Photoshop"], correct: 1 },
    { id: 3, q: "Co znamená zkratka CPU?", a: ["Grafická karta", "Napájecí zdroj", "Hlavní procesor"], correct: 2 },
    { id: 4, q: "Co je to ROM?", a: ["Operační paměť počítače", "Trvalá paměť počítače", "Procesor"], correct: 1 },
    { id: 5, q: "Který program je antivirový?", a: ["Wordpad", "Opera", "Avast"], correct: 2 },
    { id: 6, q: "Které zařízení je vstupní?", a: ["klávesnice", "monitor", "tiskárna"], correct: 0 },
    { id: 7, q: "Které zařízení je výstupní?", a: ["myš", "tiskárna", "mikrofon"], correct: 1 },
    { id: 8, q: "Který program není antivirový?", a: ["AVG", "Avast", "Skype"], correct: 2 },
    { id: 9, q: "Který program není internetový prohlížeč?", a: ["Acrobat reader", "Opera", "Chrome"], correct: 0 },
    { id: 10, q: "Kolik bitů má 1 Byte", a: ["10", "8", "16"], correct: 1 },
    { id: 11, q: "Kolik Bytů má 1 kB?", a: ["1000", "100", "1024"], correct: 2 },
    { id: 12, q: "Která přípona patří zvukovému souboru?", a: [".avi", ".wav", ".png"], correct: 1 },
    { id: 13, q: "Která přípona patří obrázku?", a: [".bmp", ".mp4", ".obr"], correct: 0 },
    { id: 14, q: "Která přípona nepatří textovému souboru?", a: [".log", ".txt", ".rar"], correct: 2 },
    { id: 15, q: "Která přípona patří textovému dokumentu?", a: [".arj", "docx", ".png"], correct: 1 },
    { id: 16, q: "Která přípona nepatří komprimovanému souboru?", a: [".txt", ".zip", ".rar"], correct: 0 },
    { id: 17, q: "Který program komprimuje soubory?", a: ["VLC", "Wordpad", "Winzip"], correct: 2 },
    { id: 18, q: "Který program přehrává videa a filmy?", a: ["Winrar", "VLC", "Průzkumník"], correct: 1 },
    { id: 19, q: "Který program nekomprimuje soubory?", a: ["Winrar", "Winzip", "Wordpad"], correct: 2 },
    { id: 20, q: "Která přípona nepatří obrázku?", a: [".mp3", ".jpg", ".gif"], correct: 0 },
    { id: 21, q: "Která přípona nepatří filmu?", a: [".mp4", ".mp3", ".mkv"], correct: 1 },
    { id: 22, q: "Které z uvedených není hardware?", a: ["procesor", "monitor", "soubor"], correct: 2 },
    { id: 23, q: "Která přípona nepatří zvukovému souboru?", a: [".gif", ".wav", ".mp3"], correct: 0 },
    { id: 24, q: "K čemu můžeme přirovnat procesor v počítač?", a: ["mozek", "srdce", "játra"], correct: 0 },
    { id: 25, q: "Které z uvedených slouží pro trvalé uložení dat?", a: ["RAM", "Hardisk", "CPU"], correct: 1 },
    { id: 26, q: "Které z uvedených je operační systém?", a: ["Chrome", "Avast", "Linux"], correct: 2 },
    { id: 27, q: "Které z uvedených není operační systém", a: ["Windows", "Linux", "Winrar"], correct: 2 },
    { id: 28, q: "Který program není internetový prohlížeč?", a: ["Chrome", "AVG", "Firefox"], correct: 1 },
    { id: 29, q: "Jaká klávesová zkratka se používá pro zkopírování označeného textu?", a: ["Ctrl+C", "Ctrl+X", "Ctrl+V"], correct: 0 },
    { id: 30, q: "Jaká klávesová zkratka se používá pro vyjmutí označeného textu?", a: ["Ctrl+C", "Ctrl+X", "Ctrl+V"], correct: 1 }, 
    { id: 31, q: "Jaká klávesová zkratka se používá pro vložení označeného textu?", a: ["Ctrl+C", "Ctrl+X", "Ctrl+V"], correct: 2 },
    { id: 32, q: "Která klávesová zkratka vrátí poslední provedenou akci zpět?", a: ["Ctrl+Z", "Ctrl+B", "Ctrl+A"], correct: 0 },
    { id: 33, q: "Který z uvedených programů je programovací jazyk určený pro výuku dětí", a: ["C++", "Scratch", "Python"], correct: 1 },
    { id: 34, q: "Který z uvedených není programovací jazyk?", a: ["Word", "Python", "C++"], correct: 0 },
    { id: 35, q: "Jakou klávesovou zkratkou napíšeme @ ?", a: ["levý ALT+V", "pravý ALT+V", "Ctrl+A"], correct: 1 },
    { id: 36, q: "Paměť typu Flash je zařízení:", a: ["jen vstupní", "jen výstupní", "vstupní i výstupní"], correct: 2 },
    { id: 37, q: "Které z uvedených není integrované na základní desce?", a: ["ROM", "koprocesor", "Hardisk"], correct: 2 },
    { id: 38, q: "Kdo sestrojil první mechanický počítač?", a: ["John Ball", "Charles Babbage", "Bashir Rameev"], correct: 1 },
    { id: 39, q: "Kterou paměť typu Flash nelze koupit?", a: ["62 GB", "32 GB", "16 GB"], correct: 0 },
    { id: 40, q: "Co je to SSD", a: ["šifrovací standard", "elektronický disk", "inteligentní chlazení"], correct: 1 }
];

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const cellSize = 20;      
const stepSize = 2; 

const feedbackBox = document.createElement("div");
feedbackBox.id = "feedback-box";
canvas.parentElement.appendChild(feedbackBox);

const oldResumeMsg = document.getElementById("resume-msg");
if (oldResumeMsg) oldResumeMsg.style.removeProperty; 

let snake = [];
let currentDir = {x: 0, y: -1}; 
let bufferedDir = {x: 0, y: -1}; 

let foods = [];
let enemySnakes = []; 
const maxFoods = 25; 

let foodEatenCount = 0;
let questionIndex = 0;
let gameInterval;
let isPaused = true; 
let waitingForSpace = false; 

let playerName = "";
let questionStartTime = 0; 
let stats = [];
let dynamicQuestions = [];
let lastHitEnemyIndex = null;
let enemyMoveCounter = 0; // Pomocné počítadlo pro zpomalení nepřátel

window.addEventListener("keydown", e => {
    if (isPaused || waitingForSpace) return;
    switch(e.code) {
        case "ArrowLeft": case "KeyA": if (currentDir.x === 0) bufferedDir = {x: -1, y: 0}; break;
        case "ArrowRight": case "KeyD": if (currentDir.x === 0) bufferedDir = {x: 1, y: 0}; break;
        case "ArrowUp": case "KeyW": if (currentDir.y === 0) bufferedDir = {x: 0, y: -1}; break;
        case "ArrowDown": case "KeyS": if (currentDir.y === 0) bufferedDir = {x: 0, y: 1}; break;
    }
});

document.getElementById("btn-left").onclick = () => {
    if (isPaused || waitingForSpace) return;
    if (currentDir.y === -1) bufferedDir = {x: -1, y: 0};
    else if (currentDir.y === 1) bufferedDir = {x: 1, y: 0};
    else if (currentDir.x === -1) bufferedDir = {x: 0, y: 1};
    else if (currentDir.x === 1) bufferedDir = {x: 0, y: -1};
};

document.getElementById("btn-right").onclick = () => {
    if (isPaused || waitingForSpace) return;
    if (currentDir.y === -1) bufferedDir = {x: 1, y: 0};
    else if (currentDir.y === 1) bufferedDir = {x: -1, y: 0};
    else if (currentDir.x === -1) bufferedDir = {x: 0, y: -1};
    else if (currentDir.x === 1) bufferedDir = {x: 0, y: 1};
};

const mobileSpaceBtn = document.getElementById("btn-space-mobile");
if (mobileSpaceBtn) mobileSpaceBtn.style.display = "none";

function startGame() {
    const nameInput = document.getElementById("player-name").value.trim();
    if (nameInput === "") {
        alert("Prosím, zadej své jméno před spuštěním hry.");
        return;
    }
    playerName = nameInput;
    document.getElementById("intro-screen").style.display = "none";
    document.getElementById("game-container").style.display = "block";
    document.getElementById("game-title").innerText = `Hráč: ${playerName}`;
    
    snake = [{x: 200, y: 200}, {x: 200, y: 220}, {x: 200, y: 240}, {x: 200, y: 260}];
    currentDir = {x: 0, y: -1}; bufferedDir = {x: 0, y: -1};
    foodEatenCount = 0; questionIndex = 0; stats = [];
    enemyMoveCounter = 0;
    
    let tempQuestions = [...questionsDatabase];
    for (let i = tempQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempQuestions[i], tempQuestions[j]] = [tempQuestions[j], tempQuestions[i]];
    }
    
    dynamicQuestions = tempQuestions.map(item => {
        let answers = [...item.a];
        let correctText = item.a[item.correct];
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }
        return { id: item.id, q: item.q, a: answers, correct: answers.indexOf(correctText) };
    });
    
    isPaused = false; waitingForSpace = false;
    feedbackBox.style.display = "none";
    
    generateAllItems();
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(update, 27); 
}

function generateAllItems() {
    foods = [];
    for (let i = 0; i < maxFoods; i++) foods.push(getRandomGridPosition());
    
    enemySnakes = [];
    for (let i = 0; i < dynamicQuestions.length; i++) {
        let pos = getRandomGridPosition();
        enemySnakes.push({
            id: i,
            body: [
                {x: pos.x, y: pos.y}, 
                {x: pos.x, y: pos.y + cellSize}, 
                {x: pos.x, y: pos.y + cellSize * 2},
                {x: pos.x, y: pos.y + cellSize * 3}
            ],
            dir: {x: 1, y: 0}
        });
    }
    document.getElementById("score").innerText = `Sežráno krmiva: 0 | Zbývá nepřátel (otázek): ${dynamicQuestions.length}`;
}

function getRandomGridPosition() {
    return {
        x: Math.floor(Math.random() * (canvas.width / cellSize)) * cellSize,
        y: Math.floor(Math.random() * (canvas.height / cellSize)) * cellSize
    };
}
function update() {
    if (isPaused || waitingForSpace) return;

    let playerHead = snake.at(0);

    if (snake.length > 0 && playerHead.x % cellSize === 0 && playerHead.y % cellSize === 0) {
        currentDir = bufferedDir;
    }

    let targetX = playerHead.x + currentDir.x * stepSize;
    let targetY = playerHead.y + currentDir.y * stepSize;

    // KONTROLA ZDI: Pokud by hráč narazil, zastaví se a update dál nepokračuje
    if (targetX < 0 || targetX + cellSize > canvas.width || targetY < 0 || targetY + cellSize > canvas.height) {
        draw();
        return; 
    }

    let newHead = { x: targetX, y: targetY };
    snake.unshift(newHead);

    // Počítadlo pro zpomalení botů o 20%
    enemyMoveCounter++;
    let shouldEnemiesMove = (enemyMoveCounter % 6 !== 0);

    if (shouldEnemiesMove) {
        enemySnakes.forEach(enemy => {
            let enemyHead = enemy.body.at(0);
            
            if (enemyHead.x % cellSize === 0 && enemyHead.y % cellSize === 0) {
                const dirs = [{x:1,y:0}, {x:-1,y:0}, {x:0,y:1}, {x:0,y:-1}];
                let safeDirs = dirs.filter(d => !(d.x === -enemy.dir.x && d.y === -enemy.dir.y));
                
                safeDirs = safeDirs.filter(d => {
                    let nextX = enemyHead.x + d.x * cellSize;
                    let nextY = enemyHead.y + d.y * cellSize;
                    return (nextX >= 0 && nextX < canvas.width && nextY >= 0 && nextY < canvas.height);
                });

                let avoidPlayerDirs = safeDirs.filter(d => {
                    let nextX = enemyHead.x + d.x * cellSize;
                    let nextY = enemyHead.y + d.y * cellSize;
                    return !snake.some(pPart => Math.abs(pPart.x - nextX) < cellSize && Math.abs(pPart.y - nextY) < cellSize);
                });

                let avoidAllDirs = avoidPlayerDirs.filter(d => {
                    let nextX = enemyHead.x + d.x * cellSize;
                    let nextY = enemyHead.y + d.y * cellSize;
                    return !enemySnakes.some(otherEnemy => {
                        if (otherEnemy === enemy) return false;
                        return otherEnemy.body.some(ePart => Math.abs(ePart.x - nextX) < cellSize && Math.abs(ePart.y - nextY) < cellSize);
                    });
                });

                let finalChoices = avoidAllDirs.length > 0 ? avoidAllDirs : (avoidPlayerDirs.length > 0 ? avoidPlayerDirs : safeDirs);

                if (finalChoices.length > 0) {
                    let currentDirIsSafe = finalChoices.some(d => d.x === enemy.dir.x && d.y === enemy.dir.y);
                    if (Math.random() < 0.15 || !currentDirIsSafe) {
                        enemy.dir = finalChoices[Math.floor(Math.random() * finalChoices.length)];
                    }
                }
            }
            let newEnemyHead = {
                x: enemyHead.x + enemy.dir.x * stepSize,
                y: enemyHead.y + enemy.dir.y * stepSize
            };

            if (newEnemyHead.x < 0) { newEnemyHead.x = 0; enemy.dir = {x: 0, y: 1}; }
            if (newEnemyHead.x >= canvas.width) { newEnemyHead.x = canvas.width - stepSize; enemy.dir = {x: 0, y: -1}; }
            if (newEnemyHead.y < 0) { newEnemyHead.y = 0; enemy.dir = {x: 1, y: 0}; }
            if (newEnemyHead.y >= canvas.height) { newEnemyHead.y = canvas.height - stepSize; enemy.dir = {x: -1, y: 0}; }

            enemy.body.unshift(newEnemyHead);

            let enemyGridHead = enemy.body.at(0);
            let enemyHitFoodIndex = -1;
            if (enemyGridHead.x % cellSize === 0 && enemyGridHead.y % cellSize === 0) {
                enemyHitFoodIndex = foods.findIndex(f => f.x === enemyGridHead.x && f.y === enemyGridHead.y);
            }

            if (enemyHitFoodIndex !== -1) {
                foods[enemyHitFoodIndex] = getRandomGridPosition();
            } else {
                enemy.body.pop();
            }
        });
    }

    if (newHead.x % cellSize === 0 && newHead.y % cellSize === 0) {
        let hitFoodIndex = foods.findIndex(f => f.x === newHead.x && f.y === newHead.y);
        if (hitFoodIndex !== -1) {
            foodEatenCount++;
            foods[hitFoodIndex] = getRandomGridPosition();
            document.getElementById("score").innerText = `Sežráno krmiva: ${foodEatenCount} | Zbývá nepřátel (otázek): ${enemySnakes.length}`;
            draw();
            return;
        }

        let hitEnemyIndex = -1;
        for (let i = 0; i < enemySnakes.length; i++) {
            let enemy = enemySnakes.at(i);
            let hitPart = enemy.body.some(part => Math.abs(part.x - newHead.x) < cellSize && Math.abs(part.y - newHead.y) < cellSize);
            if (hitPart) {
                hitEnemyIndex = i;
                break;
            }
        }

        if (hitEnemyIndex !== -1) {
            lastHitEnemyIndex = hitEnemyIndex;
            triggerQuiz();
            return;
        }
    }

    snake.pop();
    draw();
}
function triggerQuiz() {
    if (enemySnakes.length === 0) { endGame(); return; }
    isPaused = true;
    questionStartTime = Date.now();
    
    const qData = dynamicQuestions[questionIndex];
    document.getElementById("question-text").innerText = qData.q;
    
    for (let i = 0; i < 3; i++) {
        const btn = document.getElementById(`opt${i}`);
        btn.innerText = qData.a[i];
        btn.onclick = () => handleAnswer(i);
    }
    document.getElementById("quiz-overlay").style.display = "flex";
}

function handleAnswer(selectedIndex) {
    const qData = dynamicQuestions[questionIndex];
    const timeTaken = ((Date.now() - questionStartTime) / 1000).toFixed(1);
    const isCorrect = selectedIndex === qData.correct;
    
    stats.push({
        q: qData.q, userAns: qData.a[selectedIndex], correctAns: qData.a[qData.correct], correct: isCorrect, time: timeTaken
    });
    
    document.getElementById("quiz-overlay").style.display = "none";
    questionIndex++;

    if (lastHitEnemyIndex !== null && lastHitEnemyIndex >= 0) {
        enemySnakes.splice(lastHitEnemyIndex, 1);
        lastHitEnemyIndex = null;
    }

    let remainingEnemies = enemySnakes.length;
    document.getElementById("score").innerText = `Sežráno krmiva: ${foodEatenCount} | Zbývá nepřátel (otázek): ${remainingEnemies}`;
    
    if (isCorrect && snake.length > 0) {
        let lastPart = snake.at(-1);
        snake.push({ x: lastPart.x, y: lastPart.y });
    }
    
    if (remainingEnemies === 0) {
        endGame();
        return;
    }

    waitingForSpace = true; 
    feedbackBox.style.display = "block";

    if (isCorrect) {
        feedbackBox.innerHTML = `<span class="correct-text">SPRÁVNĚ!</span><br><br>Had zničen a tvůj had se prodlužuje.`;
    } else {
        feedbackBox.innerHTML = `<span class="wrong-text">ŠPATNĚ!</span><br><br>Had zničen, ale správná odpověď byla:<br><strong>${qData.a[qData.correct]}</strong>`;
    }

    setTimeout(() => {
        let count = 3;
        feedbackBox.innerHTML = `Připrav se...<br><div class="countdown-text">${count}</div>`;
        
        let countdownInterval = setInterval(() => {
            count--;
            if (count > 0) {
                feedbackBox.innerHTML = `Připrav se...<br><div class="countdown-text">${count}</div>`;
            } else {
                clearInterval(countdownInterval);
                feedbackBox.style.display = "none";
                waitingForSpace = false;
                isPaused = false;
                draw();
            }
        }, 1000);

    }, 2000); 
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Krmivo (zelené tečky)
    ctx.fillStyle = "#2ecc71";
    foods.forEach(f => {
        ctx.beginPath(); ctx.arc(f.x + cellSize/2, f.y + cellSize/2, cellSize/2.5, 0, Math.PI * 2); ctx.fill();
    });

    // Vykreslení nepřátelských hadů
    enemySnakes.forEach(enemy => {
        ctx.fillStyle = "#e67e22"; 
        for(let i = 1; i < enemy.body.length; i++) {
            let part = enemy.body.at(i);
            ctx.fillRect(part.x, part.y, cellSize, cellSize);
        }
        if(enemy.body.length > 0) {
            let eHead = enemy.body.at(0);
            ctx.fillStyle = "#c0392b";
            ctx.fillRect(eHead.x, eHead.y, cellSize, cellSize);
        }
    });

    // Tělo hráče
    ctx.fillStyle = "#34495e";
    for (let i = 1; i < snake.length; i++) {
        let part = snake.at(i);
        ctx.fillRect(part.x, part.y, cellSize, cellSize);
    }

    // OPRAVENÁ HLAVA S OČIMA PRO VŠECHNY SMĚRY
    if (snake.length > 0) {
        let head = snake.at(0);
        ctx.fillStyle = "#2c3e50";
        ctx.fillRect(head.x, head.y, cellSize, cellSize);

        ctx.strokeStyle = "#e74c3c"; ctx.lineWidth = 3; ctx.fillStyle = "#ffffff"; 

        ctx.beginPath();
        if (currentDir.x === 1) { // DOPRAVA
            ctx.moveTo(head.x + cellSize, head.y + 10); ctx.lineTo(head.x + cellSize + 8, head.y + 10); ctx.stroke();
            ctx.beginPath(); ctx.arc(head.x + 14, head.y + 5, 2, 0, Math.PI * 2); ctx.arc(head.x + 14, head.y + 15, 2, 0, Math.PI * 2); ctx.fill();
        } else if (currentDir.x === -1) { // DOLEVA
            ctx.moveTo(head.x, head.y + 10); ctx.lineTo(head.x - 8, head.y + 10); ctx.stroke();
            ctx.beginPath(); ctx.arc(head.x + 6, head.y + 5, 2, 0, Math.PI * 2); ctx.arc(head.x + 6, head.y + 15, 2, 0, Math.PI * 2); ctx.fill();
        } else if (currentDir.y === -1) { // NAHORU
            ctx.moveTo(head.x + 10, head.y); ctx.lineTo(head.x + 10, head.y - 8); ctx.stroke();
            ctx.beginPath(); ctx.arc(head.x + 5, head.y + 6, 2, 0, Math.PI * 2); ctx.arc(head.x + 15, head.y + 6, 2, 0, Math.PI * 2); ctx.fill();
        } else if (currentDir.y === 1) { // DOLŮ (Zde opraveny souřadnice očí na head.y + 14)
            ctx.moveTo(head.x + 10, head.y + cellSize); ctx.lineTo(head.x + 10, head.y + cellSize + 8); ctx.stroke();
            ctx.beginPath(); ctx.arc(head.x + 5, head.y + 14, 2, 0, Math.PI * 2); ctx.arc(head.x + 15, head.y + 14, 2, 0, Math.PI * 2); ctx.fill();
        }
    }
}


function endGame() {
    clearInterval(gameInterval);
    isPaused = true;
    document.getElementById("game-container").style.display = "none";
    document.getElementById("result-table-container").style.display = "block";
    
    let html = `<table><tr><th>Otázka</th><th>Tvoje odpověď</th><th>Správná odpověď</th><th>Čas (s)</th></tr>`;
    stats.forEach(s => {
        const rowColor = s.correct ? "#d4edda" : "#f8d7da";
        html += `<tr style="background-color: ${rowColor}"><td>${s.q}</td><td>${s.userAns}</td><td>${s.correctAns}</td><td>${s.time}</td></tr>`;
    });
    html += `</table>`;
    document.getElementById("table-space").innerHTML = html;
}

function sendEmail() {
    // 1. SEM VLOŽTE VAŠE FORM-ID Z FORMSPREE:
    const formspreeUrl = "https://formspree.io/f/xgaowjqe";

    // 2. Sestavení přehledného textu výsledků do e-mailu
    let textZpravy = `Výsledky edukačního testu ze hry Had\n`;
    textZpravy += `====================================\n`;
    textZpravy += `Student: ${playerName}\n`;
    textZpravy += `Sežráno krmiva: ${foodEatenCount}\n`;
    textZpravy += `Celkem vyřešeno otázek: ${stats.length}\n`;
    textZpravy += `Datum: ${new Date().toLocaleString("cs-CZ")}\n`;
    textZpravy += `====================================\n\n`;
    textZpravy += `PODROBNÝ PŘEHLED ODPOVĚDÍ:\n\n`;

    stats.forEach((s, i) => {
        const vysledek = s.correct ? "✅ SPRÁVNĚ" : "❌ ŠPATNĚ";
        textZpravy += `Otázka ${i + 1}: ${s.q}\n`;
        textZpravy += `Odpověď studenta: ${s.userAns} [${vysledek}]\n`;
        textZpravy += `Správná odpověď: ${s.correctAns}\n`;
        textZpravy += `Čas na rozmyšlení: ${s.time} s\n`;
        textZpravy += `------------------------------------\n`;
    });

    // 3. Zabalení dat do formátu, který Formspree standardně zpracuje
    const dataProFormspree = {
        name: playerName,
        krmivo: foodEatenCount,
        celkem_otazek: stats.length,
        zprava: textZpravy
    };

    // 4. Odeslání na Formspree pomocí fetch API
    fetch(formspreeUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataProFormspree)
    })
    .then(response => {
        if (response.ok) {
            alert("Výsledky byly úspěšně odeslány učiteli e-mailem!");
        } else {
            alert("Chyba při odesílání: Formspree odmítlo data zpracovat.");
        }
    })
    .catch(error => {
        console.error("Chyba:", error);
        alert("Nepodařilo se navázat spojení se serverem Formspree.");
    });
}
