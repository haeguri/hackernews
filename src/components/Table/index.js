import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

const Table = ({list, onDismiss}) => {
    const largeColumn = { width: '40%' };
    const mediumColumn = { width: '30%' };
    const smallColumn = { width: '10%' };
  
    return (
      <div className="table">
        {list.map(item => 
          <div key={item.objectID} className="table-row">
            <span style={largeColumn}>
              <a href={item.url}>{item.title}</a>
            </span>
            <span style={mediumColumn}>
              {item.author}
            </span>
            <span style={smallColumn}>
              {item.num_comments}
            </span>
            <span style={smallColumn}>
              {item.points}
            </span>
            <span style={smallColumn}>
              <Button 
                onClick={() => onDismiss(item.objectID)}
                className="button-inline"
              >
                dismiss1
              </Button>
            </span>
          </div>
        )}
      </div>
    )
}

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired
}

export default Table;