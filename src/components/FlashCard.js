import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class FlashCard extends Component {
  render() {
    const { id, term } = this.props.card;
    return (
      <a href="#" onClick={this.props.triggerEdit.bind(this, id)}>
        <div className='square'>
          <div className='content'>
            <div className='table'>
              <div className='table-cell'>
                { term }
              </div>
            </div>
          </div>
        </div>
      </a>
    )
  }
}

// PropTypes
FlashCard.propTypes = {
  card: PropTypes.object.isRequired,
  triggerEdit: PropTypes.func.isRequired,
}

export default FlashCard;