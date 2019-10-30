var Counter = React.createClass({
	propTypes: {
		number: React.PropTypes.number.isRequired
	},

	getDefaultProps: function(){
		console.log('Ustawianie domyślnych wartości propsów (które nie zostały przekazane do komponentu');
	},

	getInitialState: function(){
		console.log('Ustawienie poczatkowego stanu komponentu, np. w tym przypadku 0');
		return {
			counter: 0
		};
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
	},

	componentWillMount: function(){
		console.log('Metoda wywoływana przed wykonaniem metody render. Ustawienie stanu w tej metodzie nie spowoduje przerenderowania komponentu');
	},

	render: function(){
		console.log('Zwraca ReactElement')
		return React.createElement('div', {},
			React.createElement('span', {}, "Licznik nr " + this.props.number + ": "),
			React.createElement('span', {}, this.state.counter),
			React.createElement('button', {onClick: this.increment, className: "button"}, '+'),
			React.createElement('button', {onClick: this.decrement, className: "button"}, '-'),
			);	
	},

	componentDidMount: function(){
		console.log('Metoda jest wywoływana po bezpośrednio po zamontowaniu komponentu. Jeśli potrzebujesz załadować dane ze zdalnego zasobu, jest to dobre miejsce do wykonania zapytania sieciowego');
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
	
});

var CounterList = React.createClass({
	propTypes: {
		countersNumber: React.PropTypes.array.isRequired
	},
	render: function(){
		var counterList = this.props.countersNumber.map(function(counter){
			return React.createElement(Counter, {key: counter, number: counter });
		});
		return React.createElement('div', {}, counterList);
	}

});

var countersNumber = [1, 2, 3, 4];

var element = React.createElement(CounterList, {countersNumber: countersNumber});
ReactDOM.render(element, document.getElementById('app'));