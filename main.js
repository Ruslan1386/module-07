let body = document.body;
body.classList.add('container');
let letter = {
	firstRow: ['q','w','e','r','t','y','u','i','o','p','[',']','\\'],
	nextRow: ['a','s','d','f','g','h','j','k','l',';','\''],
	lastRow: ['z','x','c','v','b','n','m',',','.','/']
};
//Функция для создания клавиатуры 
function createLayout() {
	let keyboard = document.createElement('div');
	body.prepend(keyboard);
	keyboard.classList.add('keyboard');
//Создаем верхний ряд и заполняем символами кнопки
	let topRow = document.createElement('div');
	keyboard.prepend(topRow);

	for(let index = 0; index < 13; index++){
		let button = document.createElement('div')
		let p = document.createElement('p');
		let n;
		for (let key in letter){			
			n = letter.firstRow[index];
			p.innerHTML = n;			
		};
		p.classList.add('paragraph');
		button.classList.add('button');	
		topRow.appendChild(button);
		button.appendChild(p);
	};	

//Создаем средний ряд и заполняем символами кнопки	
	let middleRow = document.createElement('div');
	keyboard.appendChild(middleRow);
	for(let index = 0; index < 11; index++){
		let button = document.createElement('div')
		let p = document.createElement('p');
		let n;
		for (let key in letter){			
			n = letter.nextRow[index];
			p.innerHTML = n;			
		};
		p.classList.add('paragraph');
		button.classList.add('button');	
		middleRow.appendChild(button);
		button.appendChild(p);
	};

//Создаем верхний ряд и заполняем символами кнопки
	let bottomRow = document.createElement('div');
	keyboard.appendChild(bottomRow);
	for(let index = 0; index < 10; index++){
		let button = document.createElement('div')
		let p = document.createElement('p');
		let n;
		for (let key in letter){			
			n = letter.lastRow[index];
			p.innerHTML = n;			
		};
		p.classList.add('paragraph');
		button.classList.add('button');	
		bottomRow.appendChild(button);
		button.appendChild(p);
	};
}
createLayout();