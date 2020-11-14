import React from 'react'
import { connect } from 'react-redux'

const Item = (props) => {
  const styles = {
    th: {
      fontSize: "14pt",
      backgroundColor: "blue",
      color: "white",
      padding: "5px 10px",
      width: "50px"
    },
    td: {
      fontSize: "14pt",
      backgroundColor: "white",
      color: "darkblue",
      padding: "5px 10px",
      border: "1px solid lightblue",
      minWidth: "300px"
    },
    date: {
      fontSize: "14pt",
      backgroundColor: "white",
      color: "darkblue",
      padding: "5px 10px",
      border: "1px solid lightblue",
      width: "80px"
    }
  }
  //作成した時刻
  let d = props.value.created;
  let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  return (
    <tr><th style={styles.th}>No, {props.index}</th>
      <td style={styles.td}>{props.value.message}</td>
      <td style={styles.date}>{f}</td>
    </tr>
  );
}
///Memoコンポーネントをstoreに接続する
//storeのステートではなく、親から渡ってきたstateを使うのでconnectの引数にstateを返す関数はいらない
export default connect()(Item)
