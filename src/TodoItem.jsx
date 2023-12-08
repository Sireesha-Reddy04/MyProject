

import PropTypes from 'prop-types';

const TodoItem = ({ todo, removeTaskWithIndex, index }) => {
  const handleButtonClick = () => {
    removeTaskWithIndex(index);
  };

  return (
    <li className="flex items-center w-min gap-5">
      {todo} 
      <button onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"/>
        </svg>
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  removeTaskWithIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default TodoItem;
