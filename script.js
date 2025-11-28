/**
 * CHOR Adventskalender - Logic & Data (Edition: Modern Pop & Jazz + Bonus)
 * Fokus: Groove, Pop-Technik, Performance & Chor-Liebe
 */

const musicRiddles = [
    // ... (Tage 1 bis 3 wie gehabt) ...
    { day: 1, q: "In der Klassik verpönt, im Pop erwünscht: Ich bin die Technik, mit der man hohe Töne kraftvoll und 'bruststimmig' schmettert.", a: "Belting (Belten)", e: "Klingt laut, ist aber Technik. **Pop-Chor Tipp:** Nicht schreien! Belting braucht extrem gute Körperanbindung." },
    { day: 2, q: "Die goldene Regel des Pop- & Gospel-Rhythmus: Auf welchen Zählzeiten wird geklatscht (im 4/4 Takt)?", a: "Auf 2 und 4 (Backbeat)", e: "Bitte nicht auf 1 und 3 klatschen! Das tötet den Groove. **Merke:** Friends don't let friends clap on 1 and 3." },
    { day: 3, q: "Ich bin das Gerät, das deine Stimme laut macht. Aber Achtung: Wenn du mich zuhälst oder in die Box zeigst, fange ich an zu pfeifen.", a: "Mikrofon (Feedback)", e: "Das Pfeifen ist Rückkopplung. **Technik-Tipp:** Mikrofonkorb nicht mit der Hand umschließen!" },
    // ... (Tage 4 bis 12 wie gehabt) ...
    { day: 4, q: "Ich bin der wichtigste Muskel für Sänger, aber ich sitze nicht im Hals. Wenn du tief einatmest, bewege ich mich nach unten. Ohne mich klingt der Chor dünn.", a: "Das Zwerchfell (Diaphragma)", e: "Der Motor deiner Stimme! **Pop-Tipp:** Stell dir beim Singen vor, du hast einen 'Schwimmreifen' um den Bauch, der stabil bleiben muss." },
    { day: 5, q: "Wenn der Chor 'Doo-dap-ba-da' singt, statt Text. Ursprünglich aus dem Jazz.", a: "Scat-Gesang", e: "Im Chor nutzen wir oft 'Silben-Grooves' als Rhythmus-Teppich für die Solisten." },
    { day: 6, q: "Ich sorge dafür, dass die Stimme 'scharf' und durchdringend klingt. Ohne mich geht man im Pop-Sound unter.", a: "Twang", e: "Twang verengt den Kehltrichter. Wer 'twangt', ist lauter bei weniger Luftverbrauch." },
    { day: 7, q: "Ich bin ein Ton, der absichtlich ein bisschen tiefer gesungen wird, als er in der klassischen Tonleiter steht. Ich gebe dem Blues und Jazz seinen typischen Sound.", a: "Blue Note", e: "Oft ist es die erniedrigte 3., 5. oder 7. Stufe. Sie bringt den 'Soul' in die Musik." },
    { day: 8, q: "Im Pop-Chor reicht uns oft ein Blatt Papier. Darauf stehen Text und Akkorde (z.B. Am7 - G - C).", a: "Lead Sheet", e: "Man muss wissen, wann man singt, denn Pausen stehen oft nicht drin." },
    { day: 9, q: "Ich bin der Teil im Song, der Spannung aufbaut, oft anders klingt und zum finalen Refrain hinführt.", a: "Die Bridge", e: "Die Bridge ist oft der emotionale Höhepunkt im Arrangement." },
    { day: 10, q: "Viele schnelle Töne auf einer einzigen Silbe singen (typisch Mariah Carey).", a: "Riffs & Runs (Melismen)", e: "Im Chor gilt: Alle müssen das Riff exakt gleich timen, sonst klingt es matschig." },
    { day: 11, q: "Wir singen nicht die Melodie, wir sind der Teppich darunter. Was ist unsere wichtigste Aufgabe?", a: "Blending (Sich mischen)", e: "**Regel:** Hörst du dich selbst lauter als deinen Nachbarn, bist du zu laut." },
    { day: 12, q: "Ein Meisterwerk von Queen. Es hat einen Opern-Teil ('Scaramouche!').", a: "Bohemian Rhapsody", e: "Freddie Mercury hat die Chor-Spuren so oft übereinandergelegt, bis die Bänder fast durchsichtig waren." },
    // ... (Tage 13 bis 24 wie gehabt, mit deinen neuen Favoriten) ...
    { day: 13, q: "Welche Intervalle bilden zusammen mit dem Grundton einen Dreiklang?", a: "Terz und Quinte", e: "Das Fundament der Harmonie. **Merke:** Kleine Terz = Moll-Dreiklang (traurig), große Terz = Dur-Dreiklang (fröhlich)." },
    { day: 14, q: "Wenn der Dirigent sagt: 'Ihr schleppt!', was meint er damit?", a: "Wir sind zu langsam", e: "Pop muss 'treiben'. Denkt den Rhythmus eher einen Millimeter *vor* dem Schlag." },
    { day: 15, q: "In welcher Gesangstechnik werden die 4 Modi 'Neutral', 'Curbing', 'Overdrive' und 'Edge' beschrieben?", a: "CVT (Complete Vocal Technique)", e: "Entwickelt von Cathrine Sadolin. Sie hilft, Sounds gesund zu erzeugen." },
    { day: 16, q: "Was muss beim Chorsingen besonders sauber sein?", a: "Die Intonation (Reinheit der Töne)", e: "Wenn es 'schwebt', stimmt die Intonation. **Was hilft:** Aktive Ohren und gute Stütze." },
    { day: 17, q: "Was bedeutet es, wenn ein Song 'shuffelt'?", a: "Die Achtel sind ungleich (Lang-Kurz)", e: "Das Gegenteil ist 'straight'. Wer 'straight' singt, wenn die Band 'shuffelt', klingt uncool." },
    { day: 18, q: "Wir sind die Stimmen in der Mitte. Wir singen selten die Melodie und haben oft die schwierigsten Töne.", a: "Der Alt (Mittelstimmen)", e: "Ein Hoch auf den 'Klebstoff' des Chores! Ohne euch würde der Sound zusammenbrechen." },
    { day: 19, q: "Eine Übung, bei der die Lippen flattern wie bei einem Pferd.", a: "Lip Trills", e: "Lockert die Muskulatur und verbindet Brust- und Kopfstimme." },
    { day: 20, q: "Der magischste Moment im Konzert: Der letzte Akkord ist verklungen, und es ist sekundenlang totenstill vor dem Applaus.", a: "Die 'heilige Stille'", e: "Gänsehaut pur. Der Moment, in dem man spürt, dass die Musik das Publikum erreicht hat." },
    { day: 21, q: "Wie nennt man es, wenn der Chorleiter spontan Zeichen gibt für Loops und Improvisation?", a: "Circle Singing", e: "Musik entsteht im Moment. Trainiert das Ohr extrem." },
    { day: 22, q: "Zwei Songs werden ineinander gemischt.", a: "Mashup", e: "Funktioniert super mit den '4 Chords of Pop'." },
    { day: 23, q: "Was sollte man auf der Bühne *nicht* tun?", a: "In Noten blättern oder quatschen", e: "Stage Presence starts before the music! Lächeln!" },
    { day: 24, q: "Wir feilen das ganze Jahr an Technik. Aber was ist das Wichtigste, das wir unserem Publikum heute schenken können?", a: "Emotion (Herz)", e: "Technik ist das Werkzeug, aber das Herz ist die Musik. Habt ein wundervolles Fest!" },
    
    // --- DAS NEUE BONUS TÜROHEN ---
    { 
        day: 25, 
        q: "Wer ist der beste Chor der Welt?", 
        a: "IHR!", 
        e: "Danke für eure Leidenschaft, eure Stimmen und die tolle Gemeinschaft. Auf ein fantastisches neues Chorjahr voller Musik!" 
    }
];

// Elemente referenzieren
const modal = document.getElementById('riddle-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalResult = document.getElementById('modal-result');
const modalAnswer = document.getElementById('modal-answer');
const modalExplanation = document.getElementById('modal-explanation');
const solutionBtn = document.getElementById('solution-btn');
const closeBtn = document.querySelector('.close-btn');

function initializeCalendar() {
    const today = new Date();
    
    /* --- DATUMS EINSTELLUNG --- */
    
    // AKTUELL: TEST-MODUS (auf 24 gestellt, damit man auch die Bonus-Logik testen kann)
    const currentDay = 24; 

    // SPÄTER (für Dezember): Kommentiere die Zeile oben aus und aktiviere diese:
    // const currentDay = (today.getMonth() === 11) ? today.getDate() : 0; 
    
    /* ----------------------------------- */

    // Schleife läuft jetzt bis 25!
    for (let i = 1; i <= 25; i++) {
        const door = document.getElementById(`door-${i}`);
        if (!door) continue;

        // Standard-Logik: Türchen öffnet, wenn der Tag erreicht ist
        let shouldOpen = (i <= currentDay);

        // SONDERLOGIK FÜR TAG 25 (Bonus):
        // Es öffnet sich, wenn es mindestens der 24. Dezember ist.
        if (i === 25) {
             shouldOpen = (currentDay >= 24);
        }

        if (shouldOpen) {
            door.classList.add('active');
            door.classList.remove('locked');
            
            door.addEventListener('click', (e) => {
                e.preventDefault();
                openRiddle(i);
            });
        } else {
            door.classList.add('locked');
        }
    }
}

function openRiddle(day) {
    const riddle = musicRiddles.find(r => r.day === day);
    if (!riddle) return;

    modalTitle.innerText = (day === 25) ? "★ Bonus ★" : `Türchen ${day}`;
    modalText.innerText = riddle.q;

    // BILD LADEN: Sucht nach images/tag25.png für den Bonus
    modalImage.src = `images/tag${day}.png`;
    modalImage.alt = `Bild zu Türchen ${day}`;

    // Falls Bild nicht existiert, Fehler abfangen und Bild ausblenden
    modalImage.onerror = function() {
        this.style.display = 'none';
    };
    // Falls Bild doch existiert, wieder einblenden
    modalImage.onload = function() {
        this.style.display = 'block';
    };

    // Bonus-Antwort bekommt ein Herz statt Mikrofon
    const icon = (day === 25) ? "❤️ " : "🎤 ";
    modalAnswer.innerText = icon + riddle.a;
    modalExplanation.innerHTML = riddle.e;

    modalResult.style.display = 'none';
    solutionBtn.innerText = "Lösung enthüllen";
    solutionBtn.style.display = "inline-block";
    modal.style.display = 'flex';
}

solutionBtn.addEventListener('click', () => {
    modalResult.style.display = 'block';
    solutionBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalImage.src = "";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        modalImage.src = "";
    }
});

document.addEventListener('DOMContentLoaded', initializeCalendar);
