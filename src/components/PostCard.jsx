import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const CardWrapper = styled.li`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin-bottom: 16px;
    list-style-type: none;
`;

const HeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #1d3557;
`;

const ActionButtons = styled.div`
    display: flex;
    gap: 8px;
`;

const ActionIconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
    border-radius: 4px;
    
    &.edit-btn {
        color: #0077b6;
        &:hover {background-color: rgba(0, 119, 182, 0.1);}
        }

    &.delete-btn {
        color: #e63946;
        &:hover {background-color: rgba(230, 57, 70, 0.1);}
    }
`;

const Description = styled.p`
    margin: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #4a5568;
`;

const PostCard = ({ avatar, title, content, onEdit, onDelete}) => {
    return (
        <CardWrapper>
            <HeaderSection>
                <UserProfile>
                    <Avatar src={avatar} alt="User Avatar" />
                    <Title>{title}</Title>
                </UserProfile>
                <ActionButtons>
                    <ActionIconButton className="edit-btn" aria-label ="Edit Post"
                    onClick={onEdit}>
                        <FaEdit />
                    </ActionIconButton>
                    <ActionIconButton className="delete-btn" aria-label="Delete Post"
                    onClick={onDelete}>
                        <FaTrashAlt />
                    </ActionIconButton>
                </ActionButtons>
            </HeaderSection>
            <Description>{content}</Description>
        </CardWrapper>
    );
}

export default PostCard;