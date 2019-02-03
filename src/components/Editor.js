import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Editor extends Component {
  
  render() {
    const {term, definition} = this.props.editingCard;
    return (
      <form onSubmit={ this.props.saveEdit }>
        <div style={editStyle}>
          <p>Term:</p>
          <input
            type="text"
            name="term"
            value={ term }
            style={termStyle}
            onChange={this.props.editTermChange}
            autoComplete='off'
            autoFocus='autofocus'
          />
          <br/><br/>
          
          <p>Definition:</p>
          <textarea
            name="def"
            style={defStyle}
            value={ definition }
            onChange={this.props.editDefChange}
          />
          <br/>
        </div>
          <input type="submit" onClick={ this.props.deleteEdit } value="Delete" style={ deleteStyle } />
          <input type="submit" onClick={ this.props.cancelEdit } value="Cancel" style={ cancelStyle } />
          <input type="submit" value="Save" style={ saveStyle } />
      </form>
    )
  }
}

Editor.propTypes = {
  editingCard: PropTypes.object.isRequired,
  editTermChange: PropTypes.func.isRequired,
  editDefChange: PropTypes.func.isRequired,
  deleteEdit: PropTypes.func.isRequired,
  cancelEdit: PropTypes.func.isRequired,
  saveEdit: PropTypes.func.isRequired,
}

const editStyle = {
  margin: '10%',
  lineHeight: '2',
}

const termStyle = {
  backgroundColor: '#f4f4f4',
  width: '100%',
  padding: '10px',
  border: '1px #ccc solid',
  borderRadius: '3px',
}

const defStyle = {
  backgroundColor: '#f4f4f4',
  width: '100%',
  height: '150px',
  fontFamily: 'Arial, Helvetica, sans-serif',
  padding: '10px',
  borderRadius: '5px',
  border: '1px #ccc solid',
  resize: 'none',
}

const deleteStyle = {
  width: '33.33%',
  height: '50px',
  marginTop: '10px',
  backgroundColor: '#dd0000',
  border: 'none',
  color: '#ffffff',
  fontSize: '20px',
}

const cancelStyle = {
  width: '33.33%',
  height: '50px',
  marginTop: '10px',
  backgroundColor: '#777',
  border: 'none',
  color: '#ffffff',
  fontSize: '20px',
}

const saveStyle = {
  width: '33.33%',
  height: '50px',
  marginTop: '10px',
  backgroundColor: '#00dd00',
  border: 'none',
  color: '#ffffff',
  fontSize: '20px',
}

export default Editor;