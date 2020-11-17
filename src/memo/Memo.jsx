import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'

class Memo extends React.Component {
  render() {
    let data;
    let n = 0
    switch (this.props.mode) {
      //modeの値に対して表示内容を変えたい
      //state更新⇢再レンダリング
      case 'default':
        //sateにはthis.propsでアクセスする。そのためにconnectを使う
        data = this.props.data.map((value, index) => (
          <Item key={index} value={value} index={n++} />
          //valueには、data: [{ message: "sample data", created: new Date() }]が渡ってくる
        ))
        break

      case 'find':
        data = this.props.fdata.map((value, index) => (
          <Item key={index} value={value} index={n++} />
        ))
        break

      case 'delete':
        data = this.props.data.map((value, index) => (
          <Item key={index} value={value} index={n++} />
        ))
        break

      default:
        data = this.props.data.map((value, index) => (
          <Item key={index} value={value} index={n++} />
        ))
        break
    }
    return (
      <table><tbody>{data}</tbody></table>
    )
  }
}

//Memoコンポーネントをstoreに接続する（this.props.ステートでstateにアクセスできるようになる）
//stateを受け取りstateを返すだけだが、[このコンポーネントで利用するstateを返す関数]の意味（ここではすべてのstateを利用できるようにした）
//これをconnectの引数に設定して、Memoコンポーネントを第二引数に指定するとstoreのstateにアクセスできるようになる
export default connect((state) => state)(Memo)

//(state) => state でstoreに登録されているstateをすべて参照できるようになっているため、そのstoreのstateに一つでも変更があった場合、再レンダリングされる
