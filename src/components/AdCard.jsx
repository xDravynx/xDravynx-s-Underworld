import React from 'react';
import styled from 'styled-components';

const AdWrapper = styled.div`
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #e9ecef;
    margin-bottom: 20px;
`;

const AdImage = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
`;

const AdBody = styled.div`
    padding: 15px;
`;

const AdTitle = styled.h4`
    margin: 0 0 4px 0;
    font-size: 16px;
    font-weight: 600;
    color: #1d3557;
`;

const AdSubtitle = styled.p`
    margin: 0;
    font-size: 14px;
    color: #6c757d;
    line-height: 1.4;
`;

const AdCard = ({ src, title, subtitle}) => {
    return (
        <AdWrapper>
            <AdImage src={src} alt={title} />
            <AdBody>
                <AdTitle>{title}</AdTitle>
                <AdSubtitle>{subtitle}</AdSubtitle>
            </AdBody>
        </AdWrapper>
    );
};

export default AdCard;