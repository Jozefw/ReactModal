import React, {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.Module.css';


const AddUser = (props) =>{
    const [formName, setFormName] = useState('');
    const [formAge, setFormAge] = useState('');
    const [toggleModal, setToggleModal] = useState();
    
    const handleFormChange = (evt)=>{
        evt.preventDefault();

        if(formName.trim().length === 0 || formAge.trim().length === 0){
            setToggleModal({
                title:"Name Error",
                message: "Please enter a correct name"
            })
            return;
        }
        if(parseInt(formAge) < 1){
            setToggleModal({
                title:"Age Error",
                message: "Please enter a correct age over zero"
            })
            return;
        }
        setFormName('');
        setFormAge('');
        props.updateUserData(formName,formAge)
    }
    
    const nameChange = (evt)=>{
        setFormName( evt.target.value)
    }
    const ageChange = (evt)=>{
        setFormAge( evt.target.value)
    }
    const errorToggle = () =>{
        setToggleModal(null)
    }
    return(
        <div>
       {toggleModal && <ErrorModal toggleError={errorToggle} title={toggleModal.title} content={toggleModal.message}></ErrorModal>}

        <Card className={classes.input}>
        <form onSubmit={handleFormChange}>
            <label htmlFor='userName'>UserName</label>
            <input
            type='text'
            id='userName'
            value = {formName}
            onChange = {nameChange}
            ></input>
            <label htmlFor='age'>Age(Years)</label>
            <input
            type='number'
            id='age'
            value ={formAge}
            onChange = {ageChange}
            ></input>
          <Button className={classes.button} type='submit'>Add User</Button>
        </form>
        </Card>
      
        </div>

    )
}

export default AddUser