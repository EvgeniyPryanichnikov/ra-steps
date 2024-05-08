import { FormEvent, useState } from 'react'
import './App.css'
import List from './components/List'
import uuid from 'react-uuid'
import { ListItem } from './components/Item'
function App() {

  const [list, setList] = useState<Array<ListItem>>([])

  const [data, setData] = useState<ListItem>({
    date: '',
    distance: '',
    id: '',
    // onClickDelete: (id:string) => void,
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      id: uuid(),
    }));
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (list.map((it: { date: string }) => it.date).includes(data.date)) {
      const newList = list.slice(0);
      const el = newList.find((el: ListItem) => el.date === data.date);
      if (!el) return;
      el.distance = String(Number(el.distance) + Number(data.distance));  

      setList([...newList]);
      e.target[0].value = '';
      e.target[1].value = '';
    } else {


       setList((prevState: ListItem[] ) => {
        return [...prevState, data].sort((a: ListItem, b: ListItem) => {
        if (a === undefined || b === undefined) return;
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        if (a.date === b.date) return 0;
      })});
      e.target[0].value = '';
      e.target[1].value = '';
      
    }
  }

  const handleDeleteItem = (id: string) :void=> {
    setList((prevState: ListItem[]) => {
      return prevState.filter((list: { id: string }) => list.id !== id)
    })
  }

  return (
    <div className="container">
          <form className="containerForm" onSubmit={onSubmit}>
            <input type="date" id='date' onChange={onChange} required/>
            <input type='number' step={0.1} id='distance' onChange={onChange} required/>
            <button type="submit">Ок</button>
          </form>
          <List onClickDelete={handleDeleteItem} list={list}/>
    </div>
  )
}

export default App
