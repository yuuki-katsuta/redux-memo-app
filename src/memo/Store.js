import { createStore } from 'redux'

//メモに関するデータの初期値
const initData = {
  data: [{ message: "sample data", created: new Date() }],
  message: "please type message",
  mode: "default",
  fdata: [] //検索したメモをまとめておくもの
}

//reducerはタイプごとの分岐を行うだけにする
export const memoReducer = (state = initData, action) => {
  switch (action.type) {
    case 'ADD':
      return addReducer(state, action);
    case 'DELETE':
      return deleteReducer(state, action);
    case 'FIND':
      return findReducer(state, action);
    default:
      return state;
  }
  //これらの関数はstateを戻り値としなければ奈良に
}

const addReducer = (state, action) => {
  //stateは初期値initdata
  let data = {
    message: action.message,
    created: new Date()
  };
  let newData = state.data.slice();
  //sliceでdata: [{ message: "sample data", created: new Date() }],から要素を取り出して新しい配列を作成する
  //reduxではstate.dataを直接操作してそのままstate.dataを返すと「変更なし」と認識されてしまうため　新しい配列をつくりsetStateする
  newData.unshift(data)
  //unshiftで配列の最初にどんどん追加する
  return {
    data: newData,
    message: "Added",
    mode: "dafault",
    fdata: []
  }
}

const findReducer = (state, action) => {
  let f = action.find;
  let fdata = []
  //addReducerの処理によりstate.dataには新しいデータが追加されていく
  state.data.forEach((value) => {
    if (value.message.indexOf(f) >= 0) {
      //value.message.indexOf(f) >= 0で,　その積み上がった配列のデータから検索文字を探し出す
      //indexOf(f) >= 0は、もし、先頭から1文字ずつ検索して8番目からの文字列が「apple」と一致したら、「8」という数値を返す
      //値が見つからない場合は -1 を返します。
      fdata.push(value)
    }
  })
  return {
    data: state.data,
    message: `find '${f}'`,
    mode: 'find',
    fdata: fdata
  }
}

const deleteReducer = (state, action) => {
  let newdata = state.data.slice()
  newdata.splice(action.index, 1)
  //newdataは連想配列？？　action.indexは変更する位置、１は何個の要素を取り除くかを表す
  return {
    data: newdata,
    message: `delete ${action.index}`,
    mode: "delete",
    fdata: []
  }
}

export const addMemo = (text) => {
  return {
    type: 'ADD',
    message: text
  }
}

export const deleteMemo = (num) => {
  return {
    type: 'DELETE',
    index: num
  }
}

export const findMemo = (text) => {
  return {
    type: 'FIND',
    find: text
  }
}

export default createStore(memoReducer)
//引数にはすべてのreducerを指定
