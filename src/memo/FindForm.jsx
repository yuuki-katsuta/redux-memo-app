import React, { useState } from 'react'
import { connect } from 'react-redux'
import { findMemo } from './Store'

const FindForm = (props) => {
  const styles = {
    input: {
      fontSize: "14pt",
      color: "#006",
      padding: "0px",
    },
    btn: {
      fontSize: "12pt",
      color: "#006",
      padding: "1px 10px",
    }
  }
  const [find, findMemoHandler] = useState('')

  const doChange = (e) => {
    findMemoHandler(e.target.value)
  }

  const doAction = (e) => {
    e.preventDefault()//form送信を停止
    let action = findMemo(find)
    props.dispatch(action)
    findMemoHandler('')
    //Memoコンポーネントはswitchによって、modeによって表示するコンポーネントを切り替えているため、検索したメモが表示される
  }

  return (
    <div>
      <form onSubmit={doAction}>
        <input type="text" size="10" onChange={doChange} value={find} style={styles.input} />
        <input type="submit" value="Find" style={styles.btn} />
      </form>
    </div>
  )
}
export default connect((state) => state)(FindForm)
