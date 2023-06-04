import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { HiUser } from 'react-icons/hi';
import { Item, DeleteContact, ListItemName } from './ContactItem.styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteForeverOutlined } from '@mui/icons-material';

export const ContactItem = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id));
    toast.error(`Contact is removed from List.`, {
      position: 'top-right',
      theme: 'dark',
    });
  };

  return (
    <Item>
      <HiUser />
      <ListItemName>
        {name}: {number}
      </ListItemName>
      <DeleteContact type="button" onClick={onDelete}>
        <DeleteForeverOutlined sx={{ fontSize: 30 }} />
      </DeleteContact>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
