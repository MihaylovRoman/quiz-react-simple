
import { useState } from 'react';
import './App.css';

const questions = [
	{
		title: 'React - это ...?',
		variants: ['Библиотека', 'Фреймворк', 'Приложение'],
		correct: 0,
	},
	{
		title: 'Компонент - это ...?',
		variants: ['Приложение', 'Фреймворк', 'Часть приложения'],
		correct: 2,
	},
	{
		title: 'Что такое JSX?',
		variants: ['Библиотека', 'Фреймворк', 'Приложение'],
		correct: 1,
	},
]


function Game({ question, onClickVariant, step }) {

	const percent = Math.round((step / questions.length) * 100)

	return (
		<div className='wrapper'>
			<div className='progress'>
				<div style={{ width: `${percent}%` }} className='game'></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{
					question.variants.map((text, index) => (
						<li onClick={() => { onClickVariant(index) }} key={text} className='li'>{text}</li>
					))
				}

			</ul>
		</div>
	)
}

function Result({ correct }) {
	return (
		<div className='result'>
			<img src='./img/confetti.png' alt='qwe' />
			<h2>Вы отгадали {correct} ответа из {questions.length}</h2>
			<a href='/'>
				<button>Попробовать снова</button>
			</a>
		</div>
	)
}

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]

	const onClickVariant = (index) => {
		setStep(step + 1)
		if (question.correct === index) {
			setCorrect(correct + 1)
		}
	}
	return (
		<div className='App'>
			{
				step !== questions.length ?
					(<Game step={step} question={question} onClickVariant={onClickVariant} />)
					:
					(<Result correct={correct} />)
			}
		</div>
	);
}

export default App;
