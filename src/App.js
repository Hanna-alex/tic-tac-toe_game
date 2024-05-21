
import './App.css'
import { Field } from './components/Field.js'
import { Information } from './components/Information.js'
import { StrictMode } from 'react'
import { useState } from 'react'

export const Game = () => {

	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(null))
	const [winner, setWinner] = useState(null)

	const WIN_PATTERNS = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	]



	const changeState = (arr) => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i]

			if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
				setIsGameEnded(true)
				setWinner(arr[a])
				return

			}
		}

		if (!arr.includes(null)) {
			setIsDraw(true)
		}

	}


	const clickField = (index) => {
		const fieldCopy = [...field]

		//определить есть ли значение у кнопки или игра закончилась
		if (isGameEnded || fieldCopy[index] || isDraw) return

		//устанавливаем ход игрока
		fieldCopy[index] = currentPlayer

		// обновить стейт
		setField(fieldCopy)
		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')

		//проверяем состояние игры
		changeState(fieldCopy)

	}


	const startAgain = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(Array(9).fill(null))
	}


	return (
		<StrictMode>
			<div className='wrapper'>
				<Information player={currentPlayer} isEnd={isGameEnded} isDraw={isDraw} winner={winner} />
				<Field fieldArr={field} click={clickField} />
				{isGameEnded && <button className='btnStart' onClick={startAgain}>Начать заново</button>}
				{isDraw && <button className='btnStart' onClick={startAgain}>Начать заново</button>}
			</div>
		</StrictMode>


	)


}


