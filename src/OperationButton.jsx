import { ACTIONS } from './App';
export const OperationButton = ({ dispatch, operation }) => {
	return (
		<button
			onClick={() =>
				dispatch({ type: ACTIONS.CHOSE_OPERATION, payload: { operation } })
			}
		>
			{operation}
		</button>
	);
};
