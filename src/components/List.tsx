import { ListItem } from "./Item";
import Item from "./Item";

interface ListProps {
    list: ListItem[],
    onClickDelete: (id: string) => void,
}

const List = ({list = [], onClickDelete}: ListProps) => {
  
  return (
    <div className="list">
    <div className="title__container">
    <span>Дата</span>
          <span>Пройдено км</span>
    </div>
 
    { list.map((item: { date: string; distance: string; id: string })=> (
        <Item id={item.id} onClickDelete={onClickDelete} key={item.id}  date={item.date} distance={item.distance}/>
    ))}
    </div>
  )
}

export default List;