import './Item.css';
function Item(props){
    const item=props.name;
    return (
    <p className="nirma">{item}</p>);

}
export default Item;