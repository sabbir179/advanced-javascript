const students = [
    {id: 21, name: 'Tomal Khan' },
    {id: 32, name: 'Sammi Ahmed'},
    {id: 41, name: 'Bipasha Hamid'},
    {id: 61, name: 'Chanchal Mia'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);

const bigger = students.filter(s => s.id > 40);
const bigger1 = students.find(s => s.id > 40);
console.log(bigger1);
