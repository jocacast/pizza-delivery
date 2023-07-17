import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { deleteItem } from './cartSlice';
function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();
    const handleDelete= () => {
        console.log(`Delete item with id ${pizzaId}`);
        dispatch(deleteItem((pizzaId)));
    }
    return (
        <Button type="small" onClick={handleDelete} key={pizzaId}>Delete</Button>
    )
}

export default DeleteItem
