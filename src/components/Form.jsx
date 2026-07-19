import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Button from './Button.jsx';

const FormContainer = styled.form`
    background-color: #111;
    padding: 20px;
    border: 1px solid #3a2f28;
    border-radius: 4px;
    box-shadow: 0 4px 29px rgba(0, 0, 0, 0.8), inset 0 0 15px rgba(138, 28, 28, 0.25);
    margin: 20px auto;
    max-width: 600px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 10px;
    `

const Label = styled.label`
    margin-bottom: 5px;
    font-weight: 600;
    color: ${props => props.textColor || '#d1c2a5'};
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

const Input = styled.input`
    padding: 10px 12px;
    border: 1px solid #4a3b32;
    border-radius: 4px;
    font-size: 16px;
    background-color: rgba(20, 20, 20, 0.9);
    color: #e6d3b3;
    transition: all 0.3 ease-in-out;

    &:focus {
        outline: none;
        border-color: #b32424;
        background-color: rgba(30,10,10,0.9)
        box-shadow: 0 0 5px rgba(179, 36, 36, 0.5);
    }

    &::placeholder{
        color: #6e5e53}
`;

const TextArea = styled.textarea`
    padding: 10px 12px;
    border: 1px solid #4a3b32;
    border-radius: 4px;
    font-size: 16px;
    color: #e6d3b3;
    background-color: rgba(30,10,10,0.9) ;
    resize: vertical;
    min-height: 120px;
  
    &:focus {
        outline: none;
        border-color: #b32424;
        box-shadow: 0 0 5px rgba(179, 36, 36, 0.5);
    }
    &::placeholder{
        color: #6e5e53}
`;

const Form =({
    titleLabel,
    titlePlaceholder,
    descLabel,
    descPlaceholder,
    submitButtonText,
    editingPost,
    onSubmit,
    onCancel
}) =>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (editingPost) {
            setTitle(editingPost.title);
            setContent(editingPost.content);
        } else { 
            setTitle('');
            setContent('');
        }
    }, [editingPost]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!title.trim() || !content.trim()){
        alert('Please fill out all fields');
        return;}
    

    if (onSubmit){
        onSubmit(title, content);
    }

    setTitle('')
    setContent('')
};

    const handleCancel = () => {
        setTitle('');
        setContent('');
        if (onClick) {
            onCancel();
        }
    }

return (
    <FormContainer onSubmit={handleSubmit}>
        
        <FormGroup>
            <Label htmlFor="title">{titleLabel}</Label>
            <Input
                id="title"
                name="title"
                type="text"
                placeholder={titlePlaceholder}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
        </FormGroup>

        <FormGroup>
            <Label htmlFor="content">{descLabel}</Label>
            <TextArea
                id="content"
                name="content"
                placeholder={descPlaceholder}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </FormGroup>

        <FormGroup>
            <ButtonGroup>
                <Button type="submit">{submitButtonText || 'Submit Post'}</Button>

                {editingPost && (
                    <Button 
                        type="button" 
                        onClick= {handleCancel} 
                        style={{ 
                            backgroundColor: '#2e2520',
                            color: '#8c7667',
                            border: '1px solid #4a3b32'
                        
                        
                        }}>Cancel</Button>
                    )}
                </ButtonGroup>
            </FormGroup>

        </FormContainer>
);

}

export default Form;