const task3Element = document.getElementById('task-3');

const alertName = (name) => alert(name);
const alertRandomJunk = () => alert('Random junk');
const concatThreeStrings = (str1, str2, str3) => str1+str2+str3;

alertName('Myadam');
alertRandomJunk();

task3Element.addEventListener('click', alertRandomJunk);

alert(concatThreeStrings('Adam ', 'is ', 'daBest!'));
