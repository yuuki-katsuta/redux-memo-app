import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addMemo } from './Store'

const AddForm = (props) => {
  const [message, messageHandler] = useState('')
  const styles = {
    input: {
      fontSize: "16pt",
      color: "#006",
      padding: "1px",
      margin: "5px 0px"
    },
    btn: {
      fontSize: "14pt",
      color: "#006",
      padding: "2px 10px"
    },
    message: {
      fontSize: "16pt",
      color: "#006",
      margin: "5px 10px"
    }
  }
  const doAction = (e) => {
    e.preventDefault()
    let action = addMemo(message)
    props.dispatch(action)
    messageHandler('')
  }
  const doChange = (e) => {
    messageHandler(e.target.value)
  }

  //props.を使えばstoreのデータにアクセスしている
  return (
    <div>
      <p style={styles.message}>{props.message}</p>
      <form onSubmit={(e) => { doAction(e) }}>
        <input
          type="text"
          size="40"
          onChange={(e) => { doChange(e) }}
          style={styles.input}
          value={message}
          required />
        <input
          type="submit"
          style={styles.btn}
          value="Add" />
      </form>
    </div>
  )
}
export default connect((state) => state)(AddForm)
