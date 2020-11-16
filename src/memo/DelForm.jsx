import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteMemo } from './Store'

const DelForm = (props) => {
  const styles = {
    input: {
      fontSize: "12pt",
      color: "#006",
      padding: "1px",
      margin: "5px 0px"
    },
    btn: {
      fontSize: "10pt",
      color: "#006",
      padding: "2px 10px"
    }
  }
  const [number, numberHandler] = useState(0)

  // return {
  //   data: newdata,
  //   message: `delete ${action.index}`,
  //   mode: "delete",
  //   fdata: []
  // }

  let n = 0
  let items = props.data.map((value) => (
    <option key={n} value={n++}>
      {value.message.substring(0, 10)}
    </option>
    //optionのvalueは送信されるクエリ値を指定する
  ))

  const doAction = (e) => {
    e.preventDefault() //画面遷移を停止
    //アクションをディスパッチする
    let action = deleteMemo(number)
    props.dispatch(action)
    numberHandler(0)
  }

  const doChange = (e) => {
    numberHandler(e.target.value)
    //e.target.valueは選択したoption要素のインデックス番号を示している
  }

  return (
    <div>
      <form onSubmit={doAction}>
        <select onChange={doChange} style={styles.input} defaultValue="-1">
          {items}
        </select>
        <input
          type="submit"
          style={styles.btn}
          value="Del" />
      </form>
    </div>
  )
  //defaultValueはselectの初期値

}
export default connect((state) => state)(DelForm)
//connectでstoreに接続したから.propsでstoreのstateにアクセスできる
