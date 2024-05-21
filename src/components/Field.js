import './Field.css'
import PropTypes from 'prop-types'


export const Field = ({ fieldArr, click }) => {

	return (
		<div className='field'>

			{fieldArr.map((elem, index) =>
				<button key={index} className='btn' onClick={() => click(index)}>{elem}</button>
			)}

		</div>
	)
}

Field.propTypes = {
	fieldArr: PropTypes.array,
	click: PropTypes.func,
}
