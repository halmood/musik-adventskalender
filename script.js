/** * CHOR Adventskalender - Logic & Data (Edition: Modern Pop & Jazz)
 * Fokus: Groove, Pop-Technik, Performance & Modern Classics
 */

const musicRiddles = [
    { 
        day: 1, 
        q: "In der Klassik verpönt, im Pop erwünscht: Ich bin die Technik, mit der man hohe Töne kraftvoll und 'bruststimmig' schmettert (wie Whitney Houston).", 
        a: "Belting (Belten)", 
        e: "Klingt laut, ist aber Technik. **Pop-Chor Tipp:** Nicht schreien! Belting braucht extrem gute Körperanbindung, sonst seid ihr nach 3 Songs heiser." 
    },
    { 
        day: 2, 
        q: "Die goldene Regel des Pop- & Gospel-Rhythmus: Auf welchen Zählzeiten wird geklatscht (im 4/4 Takt)?", 
        a: "Auf 2 und 4 (Backbeat)", 
        e: "Bitte nicht auf 1 und 3 klatschen (der 'deutsche Marsch-Klatscher')! Das tötet den Groove. **Merke:** Friends don't let friends clap on 1 and 3." 
    },
    { 
        day: 3, 
        q: "Ich bin das Gerät, das deine Stimme laut macht. Aber Achtung: Wenn du mich zuhälst (Korbgriff) oder direkt in die Box zeigst, fange ich an zu pfeifen.", 
        a: "Mikrofon (und das Feedback/Rückkopplung)", 
        e: "Das Pfeifen ist Feedback. **Technik-Tipp:** Mikrofonkorb nicht mit der Hand umschließen, das verfälscht den Sound und macht den Techniker unglücklich." 
    },
    { 
        day: 4, 
        q: "Welcher Wham!-Hit von 1984 darf auf keiner Weihnachtsfeier fehlen, obwohl das Video eigentlich in einer Skihütte spielt?", 
        a: "Last Christmas", 
        e: "Man liebt es oder man hasst es. George Michael hat das Lied übrigens im Alleingang geschrieben und produziert." 
    },
    { 
        day: 5, 
        q: "Wenn der Chor 'Doo-dap-ba-da' singt, statt Text. Ursprünglich aus dem Jazz, um Instrumente zu imitieren.", 
        a: "Scat-Gesang (oder Scatting)", 
        e: "Ella Fitzgerald war die Queen des Scat. Im Chor nutzen wir oft 'Silben-Grooves' als Rhythmus-Teppich für die Solisten." 
    },
    { 
        day: 6, 
        q: "Ich sorge dafür, dass die Stimme 'scharf' und durchdringend klingt (wie eine nervige Hexe oder eine Ente). Ohne mich geht man im Pop-Sound unter.", 
        a: "Twang", 
        e: "Twang verengt den Kehltrichter. **Pop-Tipp:** Wer 'twangt', ist lauter bei weniger Luftverbrauch. Unverzichtbar für Gospelsongs!" 
    },
    { 
        day: 7, 
        q: "Wir sind fünf Stimmen, kommen aus Texas und haben A-Cappella wieder cool und radiotauglich gemacht.", 
        a: "Pentatonix (PTX)", 
        e: "Sie beweisen: Man braucht keine Instrumente für fetten Pop-Sound. Nur Bass, Beatbox und drei Stimmen." 
    },
    { 
        day: 8, 
        q: "Im Pop-Chor reicht uns oft ein einziges Blatt Papier pro Song. Darauf stehen Text und Akkorde (z.B. Am7 - G - C). Wie nennt man das?", 
        a: "Lead Sheet", 
        e: "Klassiker haben Partituren, Popper haben Lead Sheets. Man muss wissen, wann man singt, denn Pausen stehen oft nicht drin." 
    },
    { 
        day: 9, 
        q: "Ich bin der Teil im Song, der Spannung aufbaut, oft anders klingt und zum finalen Refrain hinführt. Ich komme meistens nach dem zweiten Refrain.", 
        a: "Die Bridge", 
        e: "Die Bridge ist oft der emotionale Höhepunkt oder der 'Game Changer' im Arrangement." 
    },
    { 
        day: 10, 
        q: "Mariah Carey macht es ständig: Viele schnelle Töne auf einer einzigen Silbe singen. Wie nennt man diese Verzierungen?", 
        a: "Riffs & Runs (oder Melismen)", 
        e: "Sieht leicht aus, ist aber Schwerstarbeit für den Kehlkopf. Im Chor gilt: Alle müssen das Riff exakt gleich timen, sonst klingt es nach Salat." 
    },
    { 
        day: 11, 
        q: "Wir singen nicht die Melodie, wir sind der Teppich darunter. Wir sind die 'Backings'. Was ist unsere wichtigste Aufgabe?", 
        a: "Blending (Sich mischen)", 
        e: "Backing Vocals dürfen nicht wie Solisten klingen. **Regel:** Hörst du dich selbst lauter als deinen Nachbarn, bist du zu laut." 
    },
    { 
        day: 12, 
        q: "Ein Meisterwerk von Queen. Es hat einen Opern-Teil, den jeder Chor liebt ('Scaramouche, Scaramouche!').", 
        a: "Bohemian Rhapsody", 
        e: "Freddie Mercury hat die Chor-Spuren (Overdubs) so oft übereinandergelegt, bis die Tonbänder fast durchsichtig waren." 
    },
    { 
        day: 13, 
        q: "Was macht ein 'Beatboxer' in einem A-Cappella-Ensemble?", 
        a: "Er imitiert das Schlagzeug (Drums)", 
        e: "P (Bassdrum), t (Hi-Hat), K (Snare). **Versuch:** Sag mal schnell und druckvoll 'Pu-Tze-Ka-Tze'." 
    },
    { 
        day: 14, 
        q: "Wenn der Dirigent sagt: 'Ihr schleppt!', was meint er damit?", 
        a: "Wir sind zu langsam (hinter dem Beat)", 
        e: "Der Tod für jeden Pop-Song. Pop muss 'treiben'. **Tipp:** Denkt den Rhythmus eher einen Millimeter *vor* dem Schlag als darauf." 
    },
    { 
        day: 15, 
        q: "Ich bin ein kleiner Knopf im Ohr, damit du dich auf der lauten Bühne selbst hören kannst.", 
        a: "In-Ear Monitoring", 
        e: "Der Retter der Intonation. Wer sich nicht hört, singt falsch (oder brüllt). Wenn kein In-Ear da ist, hilft der 'Monitor-Wedge' am Boden." 
    },
    { 
        day: 16, 
        q: "Welches Wort fehlt? 'I'm dreaming of a _____ Christmas'. Das meistverkaufte Lied der Welt.", 
        a: "White (Bing Crosby)", 
        e: "Geschrieben von Irving Berlin. Ein Jazz-Standard, den man wunderbar 'ver-swingen' kann." 
    },
    { 
        day: 17, 
        q: "Was bedeutet es, wenn ein Song 'shuffelt'?", 
        a: "Die Achtelnoten sind nicht gleich lang (Lang-Kurz, wie beim Blues/Swing)", 
        e: "Das Gegenteil ist 'straight' (binär). Wer 'straight' singt, wenn die Band 'shuffelt', klingt extrem uncool." 
    },
    { 
        day: 18, 
        q: "Wir sind eine schwedische Pop-Gruppe. Unsere Lieder ('Mamma Mia', 'Dancing Queen') sind harmonisch so komplex, dass Chöre sie lieben und hassen.", 
        a: "ABBA", 
        e: "Die Mädels (Agnetha & Anni-Frid) sangen oft unisono oder in sehr engen Terzen, was den typischen metallischen Sound erzeugte." 
    },
    { 
        day: 19, 
        q: "Ich bin eine Übung, bei der die Lippen flattern wie bei einem Pferd. Alle Chorleiter lieben mich zum Aufwärmen.", 
        a: "Lip Trills (Lippenflattern)", 
        e: "Lockert die Muskulatur und verbindet Brust- und Kopfstimme. Sieht doof aus, hilft aber Wunder." 
    },
    { 
        day: 20, 
        q: "Leonard Cohen hat dieses Lied geschrieben, aber Shrek (und Pentatonix) haben es unsterblich gemacht. Es geht um einen 'Secret Chord'.", 
        a: "Hallelujah", 
        e: "Der Text ist eigentlich recht düster, aber der Refrain ist pure Hymne. Achtung: Es hat viele Strophen!" 
    },
    { 
        day: 21, 
        q: "Im Jazz und Pop improvisieren wir manchmal. Wie nennt man es, wenn der Chorleiter spontan Zeichen gibt für 'Loop', 'Solo' oder 'Break'?", 
        a: "Circle Singing (oder Vocal Painting)", 
        e: "Musik entsteht im Moment. Das trainiert das Ohr und die Reaktionsfähigkeit enorm." 
    },
    { 
        day: 22, 
        q: "Was ist ein 'Mashup'?", 
        a: "Zwei oder mehr Songs werden ineinander gemischt", 
        e: "Beliebt im Pop-Chor: Man singt den Text von Song A auf die Akkorde von Song B. Funktioniert super mit den '4 Chords of Pop'." 
    },
    { 
        day: 23, 
        q: "Der Soundcheck ist vorbei, das Konzert geht gleich los. Was sollte man auf der Bühne *nicht* mehr tun?", 
        a: "In den Noten blättern, quatschen oder 'nochmal kurz den Ton testen'", 
        e: "Stage Presence starts before the music! Lächeln, Haltung annehmen, Fokus auf den Dirigenten." 
    },
    { 
        day: 24, 
        q: "Der wichtigste 'Song', der nach der Probe im Kopf bleibt und nicht mehr weggeht.", 
        a: "Der Ohrwurm", 
        e: "Danke für ein Jahr voller Musik, Groove und Gemeinschaft. **Frohe Weihnachten und keep singing!**" 
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

// Kalender initialisieren
function initializeCalendar() {
    const today = new Date();
    
    /* --- EINSTELLUNGEN FÜR DAS DATUM --- */
    
    // VARIANTE A: TEST-MODUS (Damit du JETZT alle Türchen sehen kannst)
    const currentDay = 24; 
    
    // VARIANTE B: ECHTER ADVENTS-MODUS (Ab 1. Dezember nutzen)
    // Entferne die '//' vor der nächsten Zeile und setze sie vor 'const currentDay = 24;'
    const currentDay = (today.getMonth() === 11) ? today.getDate() : 24; 

    /* ----------------------------------- */

    for (let i = 1; i <= 24; i++) {
        const door = document.getElementById(`door-${i}`);
        if (!door) continue;

        if (i <= currentDay) {
            door.classList.add('active');
            door.classList.remove('locked');
            
            // Klick-Event
            door.addEventListener('click', (e) => {
                e.preventDefault();
                openRiddle(i);
            });
        } else {
            door.classList.add('locked');
        }
    }
}

// Rätsel öffnen
function openRiddle(day) {
    const riddle = musicRiddles.find(r => r.day === day);
    
    if(!riddle) {
        console.error("Kein Rätsel für Tag " + day + " gefunden.");
        return;
    }

    // Inhalte füllen
    modalTitle.innerText = `Türchen ${day}`;
    modalText.innerText = riddle.q;
    
    // BILD LADEN: 
    modalImage.src = `images/tag${day}.png`;
    modalImage.alt = `Pop Choir Image Tag ${day}`;
    
    // Antwort vorbereiten
    modalAnswer.innerText = "🎤 " + riddle.a; // Mikrofon-Icon statt Notenschlüssel
    modalExplanation.innerHTML = riddle.e;
    
    // Reset State
    modalResult.style.display = 'none';
    solutionBtn.innerText = "Lösung anzeigen";
    solutionBtn.style.display = "inline-block";
    
    // Anzeigen
    modal.style.display = 'flex';
}

// Antwort zeigen
solutionBtn.addEventListener('click', () => {
    modalResult.style.display = 'block';
    solutionBtn.style.display = 'none';
});

// Schließen
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
