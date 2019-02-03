import React, { Component } from 'react';
import FlashCard from './FlashCard';
import PropTypes from 'prop-types';

class Collection extends Component {
  render() {
    return (
      <div style={gridStyle}>
        { this.props.cardsList.map((card) => (
          <FlashCard key={card.id} card={card} triggerEdit={this.props.triggerEdit} />
        )) }
        <a href="#" onClick={this.props.triggerNew}>
          <div className='square'>
            <div className='content'>
              <div className='table'>
                <div className='table-cell'>
                  Click to add
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

// PropTypes
Collection.propTypes = {
  cardsList: PropTypes.array.isRequired
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridGap: '0px',
  padding: '1em'
}

export default Collection;