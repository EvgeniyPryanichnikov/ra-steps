interface ListItem {
    date: string,
    distance: string,
    id: string,
    onClickDelete: (id: string) => void,
}

const Item = ({date, distance, id, onClickDelete}:ListItem) => {
  return (
    <div className="list__item" key={id}>
        <span className="list__data">{date}</span>
        <span className="list__distance">{distance}</span>
        <button type="button" onClick={() => onClickDelete(id)}>x</button>
    </div>
  )
}

export default Item;
export type { ListItem };
