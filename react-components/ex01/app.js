const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(`
  Folosind metoda map pe arrayul skills, returneaza si afiseaza in consola un array in care
  fiecare consoana este scrisa cu litera mare (vocalele nu)
`);
const vowels = ['a', 'e', 'i', 'o', 'u'];
const arrVowels = person.skills.map((skill) => {
  const letters = skill.split('');
  const upperCaseVowels = letters.map((letter) => {
    if (vowels.includes(letter)) {
      return letter.toUpperCase();
    }

    return letter;
  });

  return upperCaseVowels.join('');
});

console.log(arrVowels);

console.warn(`
  Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
  “Ma numesc {name} {surname} si am {age} ani.”
`);
const sentences = person.friends.map((friend) => {
  const { name, surname, age } = friend;

  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(sentences);

console.warn(`
  Folosind map pe arrayul friends, returneaza un array in care fiecare pozitie contine propozitia
  “Diferenta de varsta dintre {friendName} si {personName} este {diff}”
`);
const { name: personName } = person;
const ageDifferences = person.friends.map((friend) => {
  const { name: friendName, age } = friend;
  const diff = person.age - age;

  return `Diferenta de varsta dintre ${friendName} si ${personName} este ${diff}`;
});
console.log(ageDifferences);

console.warn(`
  Returneaza si afiseaza un array in care fiecare pozitie contine diferenta dintre varsta persoanei
  si lungimea cuvantului de pe arrayul skill
`);
const { age: personAge } = person;
const skillsDiff = person.skills.map((skill) => {
  const diff = personAge - skill.length;

  return diff;
});
console.log(skillsDiff);

console.warn(`
Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele cu prima si ultima litera mari.
`);
const upperCase = person.skills.map((skill) => {
  const letters = skill.split('');
  const upperCaseLetters = letters.map((letter, index) => {
    if (index === 0 || index === letters.length - 1) {
      return letter.toUpperCase();
    }
    return letter;
  });

  return upperCaseLetters.join('');
});
console.log(upperCase);

console.warn(`
Folosind metoda map pe arrayul skills, returneaza un array care contine cuvintele inversate (exemplu: lmth)
`);
const reversedSkills = person.skills.map((skill) => {
  return skill.split('').reverse().join('');
});
console.log(reversedSkills);

console.warn(`
Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”
`);
const friendsAges = person.friends.map((friend) => {
  const { name: friendName, age } = friend;

  return `${friendName} are ${age} ani.`;
});
console.log(friendsAges);

console.warn(`
  Folosind metoda map pe arrayul friends, returneaza un array care contine numele inversat al prietenilor pe fiecare
  pozitie (exemplu: Stevenson Steven)
`);
const reversedFriends = person.friends.map((friend) => {
  const { name, surname } = friend;

  return `${surname} ${name}`;
});
console.log(reversedFriends);

console.warn(`
  Folosind metoda map pe arrayul friends, returneaza un array care contine pe fiecare pozitie diferenta dintre
  lungimea totala al numelui complet (fara spatii) si varsta prietenului de pe iteratie
`);
const friendsDiff = person.friends.map((friend) => {
  const { name, surname, age } = friend;
  const nameLength = name.length;
  const surnameLength = surname.length;
  const diff = Math.abs(nameLength + surnameLength - age);

  return diff;
});
console.log(friendsDiff);

console.warn(`
  Folosind metoda map pe arrayul skills returneaza un array care contine diferenta dintre lungimea fiecarui skill si
  varsta prietenului
`);
const friendSkillDiff = person.friends.map((friend) => {
  const { age } = friend;

  const skillLength = person.skills.map((skill) => {
    return Math.abs(age - skill.length);
  });

  return skillLength;
});
console.log(friendSkillDiff);
