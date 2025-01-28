import styles from './EditButton.module.css';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {hideLoader, showLoader} from "../../../store/LoaderSlice";
import {useDispatch} from "react-redux";

interface EditButtonProps {
    id?: number
}

const EditButton = ({id}: EditButtonProps) => {
    const [isVisited, setVisited] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(showLoader());
        setTimeout(() => {
            dispatch(hideLoader());
        }, 1000);
        setVisited(true);
        navigate('CreateEditBlog', {state: {isVisited: true, id}});
    };

    return (
        <i
            data-testid="edit-icon"
            onClick={handleClick}
            className={`${styles.icon} fa fa-edit icon`}
        ></i>
    );
}

export default EditButton;
