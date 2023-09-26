var height = 6; // number of guesses
var width = 5; // lenght of the word

var row = 0; // current guess (attemp #)
var col = 0; // current letter for that attem


var modal = document.getElementById('modal')
var openBtn = document.getElementById('openBtn')
var closeBtn = document.getElementById('closeBtn')


function openModal() {
  modal.classList.add('openModal')

  console.log('123');
}
function closeModal() {
  modal.classList.remove('openModal')
}


window.addEventListener('click' , (e) => {
  if(e.target == modal) {
    modal.classList.remove('openModal')
  }
})




var gameOver = false;

var wordList = [
  "olloh",
  "somsa",
  "divan",
  'apple',
  'korpa',
  'velik',
  'vilka',
  'kiyim',
  'qoqon',
  'ortoq',
  'bulut',
  'okean',
  "paxta",
  "salom",
  "somka",
"abaka",
"abbat",
"abdal",
"abdol",
"abgor",
"abhar",
"abioz",
"abira",
"abjad",
"abjaq",
"abjir",
"ablah",
"ablaq",
"abort",
"abris",
"abror",
"absit",
"abtar",
"abvob",
"abxaz",
"abyot",
"abzal",
"abzas",
"adasi",
"adiba",
"admin",
"adoiy",
"adoyi",
"adras",
"adres",
"advor",
"adyol",
"aeron",
"afgor",
"afifa",
"afkor",
"aflok",
"afruz",
"afsar",
"afsun",
"afsus",
"afyun",
"afzal",
"afzun",
"agami",
"agava",
"agens",
"agent",
"agora",
"agrar",
"ahbob",
"ahkom",
"ahmar",
"ahmoq",
"aholi",
"ahsan",
"ahvol",
"ahyon",
"ajabo",
"ajdar",
"ajdod",
"ajgon",
"ajiba",
"ajina",
"ajiva",
"ajlof",
"ajnos",
"ajrim",
"ajriq",
"ajuva",
"ajuza",
"akaju",
"akant",
"akasi",
"akbar",
"akmal",
"akram",
"akril",
"aksar",
"aksiz",
"akson",
"aktin",
"aktiv",
"aktor",
"akula",
"alapi",
"alayh",
"alban",
"albat",
"albit",
"albom",
"aldol",
"aldoq",
"aldov",
"aleut",
"alfer",
"alfol",
"alfoz",
"algol",
"alhaq",
"alhol",
"alibi",
"alios",
"alkor",
"allil",
"allit",
"allod",
"allof",
"aloha",
"alolo",
"aloqa",
"alpoz",
"alqor",
"alqov",
"altey",
"altof",
"alund",
"alvit",
"alvon",
"alyor",
"amaki",
"ambar",
"ambun",
"amiri",
"amlok",
"amoma",
"amorf",
"ampel",
"amper",
"ampir",
"amraq",
"amrud",
"amsol",
"amvol",
"anavi",
"anbar",
"anbuh",
"andak",
"andin",
"andiz",
"andom",
"andoq",
"anduh",
"anfas",
"anfos",
"anhor",
"anisa",
"anjir",
"anjom",
"anker",
"anlon",
"anona",
"anons",
"anovi",
"anoyi",
"anqov",
"anquv",
"antik",
"antre",
"anura",
"anvar",
"anvoi",
"anzur",
"aorta",
"apart",
"apeks",
"apera",
"aplit",
"apnoe",
"aport",
"aprel",
"aqida",
"aqila",
"aqiqa",
"aqlan",
"aqliy",
"aqlli",
"aqoid",
"aqrab",
"aqvom",
"arabi",
"arafa",
"arama",
"araqi",
"arava",
"arbin",
"arbob",
"ardob",
"ardoq",
"areal",
"arena",
"arest",
"argon",
"ariot",
"ariya",
"ariza",
"arkon",
"arman",
"armon",
"aroba",
"arqal",
"arqon",
"arqoq",
"arqov",
"arqul",
"arsen",
"artel",
"arvoh",
"arxar",
"arxey",
"arxiv",
"arzir",
"arzon",
"asaka",
"asati",
"asbob",
"asira",
"askar",
"asket",
"aslan",
"asliy",
"asnof",
"aspak",
"asriy",
"asrli",
"asror",
"asrov",
"assit",
"astar",
"astat",
"astma",
"astra",
"ataka",
"atala",
"atama",
"atigi",
"atiqa",
"atlas",
"atlet",
"atoll",
"atrof",
"attor",
"atvor",
"audit",
"avans",
"avgit",
"avial",
"avizo",
"avjli",
"avlod",
"avloq",
"avlos",
"avral",
"avran",
"avrat",
"avrav",
"avrod",
"avron",
"avroq",
"avsat",
"avtol",
"avtor",
"avuar",
"avval",
"axbor",
"axiri",
"axlat",
"axloq",
"axtar",
"aybli",
"ayhay",
"aykit",
"aymoq",
"aynan",
"ayniy",
"aynli",
"ayqin",
"ayram",
"ayrim",
"ayron",
"aytim",
"aytuv",
"ayvon",
"ayyom",
"ayyor",
"azali",
"azbas",
"aziza",
"babaq",
"badal",
"badan",
"badar",
"baday",
"badia",
"badik",
"badir",
"badoq",
"badya",
"bagaj",
"baggi",
"baham",
"bahaq",
"bahar",
"bahay",
"bahol",
"bahor",
"bahoy",
"bahra",
"bajon",
"baken",
"bakor",
"bakra",
"balet",
"baliq",
"balka",
"balki",
"balli",
"balma",
"balon",
"baloq",
"balxi",
"banan",
"banda",
"bandi",
"banjo",
"banka",
"banno",
"banot",
"baqam",
"baqar",
"baqay",
"baqir",
"baqqa",
"barak",
"baraz",
"barbi",
"barda",
"bardi",
"bargi",
"barik",
"barin",
"barit",
"bariy",
"barja",
"barka",
"barno",
"barol",
"baron",
"baroq",
"baror",
"barot",
"barpo",
"barra",
"basar",
"basir",
"basit",
"baski",
"basma",
"basta",
"batan",
"batar",
"batat",
"baton",
"batut",
"baxil",
"baxya",
"bayan",
"bayir",
"bayka",
"bayon",
"bayot",
"bayov",
"bayoz",
"bayri",
"bayza",
"bayzo",
"bayat",
"bazal",
"bazis",
"bazur",
"beamr",
"beaql",
"beaso",
"beayb",
"bebok",
"bedav",
"bedil",
"bedin",
"bediz",
"bedod",
"bedor",
"bedov",
"bedog",
"beega",
"begim",
"begor",
"behad",
"behis",
"behol",
"beibo",
"beizn",
"bejiz",
"bejon",
"bejoy",
"bekas",
"bekat",
"bekik",
"bekon",

]

var guessList = [
  "aahed ",
  "aalii",
  "aargh",
  "aarti",
  "abaca",
  "abacs",
  "abaft",
  "abake",
  "abamp",
  "aband",
  "adash",
  "abask",
  "mobel",
  "karma",
  "stink",
];

guessList = guessList.concat(wordList);



// var word = "SQUID"

var word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
console.log(word);
window.onload = function () {
  intialize();
};

function intialize() {
  // create rhe game board

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }

  // create the key board

  let keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "'"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  for (let i = 0; i < keyboard.length; i++) {
    let currRow = keyboard[i];
    let keyboardRow = document.createElement("div");
    keyboardRow.classList.add("keyboard-row");

    for (let j = 0; j < currRow.length; j++) {
      let keyTile = document.createElement("div");

      let key = currRow[j];
      keyTile.innerText = key;
      if (key == "Enter") {
        keyTile.id = "Enter";
      } else if (key == "⌫") {
        keyTile.id = "Backspace";
      } else if ("A" <= key && key <= "Z") {
        keyTile.id = "Key" + key;
      }

      keyTile.addEventListener("click", processKey);

      if (key == "Enter") {
        keyTile.classList.add("enter-key-tile");
      } else {
        keyTile.classList.add("key-tile");
      }
      keyboardRow.appendChild(keyTile);
    }
    document.body.appendChild(keyboardRow);
  }

  // listen for key press

  document.addEventListener("keyup", (e) => {
    proccesInput(e);
  });
}

function processKey() {
  let e = { code: this.id };
  proccesInput(e);
}

function proccesInput(e) {
  if (gameOver) return;

  // alert(e.code)

  if ("KeyA" <= e.code && e.code <= "KeyZ") {
    if (col < width) {
      let currTile = document.getElementById(
        row.toString() + "-" + col.toString()
      );
      if (currTile.innerText == "") {
        currTile.innerText = e.code[3];
        col += 1;
      }
    }
  } else if (e.code == "Backspace") {
    if (0 < col && col <= width) {
      col -= 1;
    }
    let currTile = document.getElementById(
      row.toString() + "-" + col.toString()
    );
    currTile.innerText = "";
  } else if (e.code == "Enter") {
    update();
  }

  if (!gameOver && row == height) {
    gameOver = true;
    document.getElementById("answer").innerText = word;
  }
}

function update() {
  let guess = "";
  document.getElementById("answer").innerText = "";

  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;
    guess += letter;
  }

  guess = guess.toLowerCase();
  if (!guessList.includes(guess)) {
    document.getElementById("answer").innerText = "Not in word list ";
    return;
  }

  let correct = 0;
  let letterCount = {};
  for (let i = 0; i < word.length; i++) {
    letter = word[i];
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;

    if (word[c] == letter) {
      currTile.classList.add("correct");

      let keyTile = document.getElementById("Key" + letter);
      keyTile.classList.remove("present");
      keyTile.classList.add("correct");
      correct += 1;

      letterCount[letter] -= 1;
    }

    if (correct == width) {
      gameOver = true;
    }
  }

  // first iteraciot chek all the correct ones

  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;

    if (!currTile.classList.contains("correct")) {
      if (word.includes(letter) && letterCount[letter] > 0) {
        currTile.classList.add("present");
        let keyTile = document.getElementById("Key" + letter);
        if (!keyTile.classList.contains("correct")) {
          keyTile.classList.add("present");
        }
        letterCount[letter] -= 1;
      } else {
        currTile.classList.add("absent");
      }
    }
  }

  row += 1;
  col = 0;
}
