var Counter = React.createClass({
	getDefaultProps: function(){
		console.log('Ustawianie domyślnych wartości propsów (które nie zostały przekazane do komponentu');
	},

	getInitialState: function(){
		console.log('Ustawienie poczatkowego stanu komponentu, np. w tym przypadku 0');
		return {
			counter: 0
		};
	},

	componentWillMount: function(){
		console.log('Metoda wywoływana przed wykonaniem metody render. Ustawienie stanu w tej metodzie nie spowoduje przerenderowania komponentu');
	},

	render: function(){
		console.log('Zwraca ReactElement')
		return React.createElement('div', {},
			React.createElement('span', {}, 'Licznik'),
			React.createElement('button', {onClick: this.increment}, '+'),
			React.createElement('button', {onClick: this.decrement}, '-'),
			this.state.counter
			);	
	},

	componentDidMount: function(){
		console.log('Metoda wywoływana po wywołaniu metody render. W chwili wykonywania tej metody komponent już widnieje na stronie. Można wykonywać różnego rodzaju operacje maninpulacji, używać jQuery czy pobrać dane');
	},

	conponentWillReceiveProps: function(){
		console.log('Metoda zostanie wywołana tylko wtedy gdy komponent otrzyma nowe właściwości i nie jest to faza pierwszego renderowania (montowanie komponentu). Metoda ta pozwala aktualizować stan na podstawie nadchodzcych właściwiości.');
	},

	shouldComponentUpdate: function(){
		console.log('Metoda wywoływana tuż przed metoda render. Pozwala sprawdzić czy faktycznie trzeba jeszcze raz przerysować komponent. Zwracana jest tutaj wartość true/false');
		return true;
	},

	componentWillUpdate: function(){
		console.log('Jeśli metoda "shouldComponentUpdate" zwróci wartość true, to natychmiast zostanie wywołana metoda "componentWillUpdate". Powinna zostać wywołana tylko do przygotowania na nadchodzce zmiany. Nie wolno w niej modyfikować stanu.');
	},

	componentDidUpdate: function(){
		console.log('Jako ostatnia zaraz po przerysowaniu komponentu wywołuje się metoda "componentDidUpdate" - w niej możemy wykonać np. jakieś manipulację DOM (analogicznie do metody "componentDidMount"');
	},

	componentWillUnmount: function(){
		console.log('Metoda "sprzatajaca-konczaca życie komponentu". wykonać można w niej wszystkie rzeczy zwiazane w odpinaniem timerów czy nasłuchiwaniem zdarzen na elementach DOM');
	},

	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	}

	
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));