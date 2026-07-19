import React from 'react';
import styled from 'styled-components';
import AdCard from './AdCard';

const RightNavContainer = styled.aside`
    display: flex;
    flex-direction: column;
`;

const SectionHeader = styled.h3`
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: #6c757d;
    margin: 0 0 12px 0;
`;

const RightNav = ({ ads = [], sectionTitle = "Sponsored"}) => {
    return (
        <RightNavContainer>
            <SectionHeader>{sectionTitle}</SectionHeader>
            {ads.map(ad => (
                <AdCard 
                key={ad.id} 
                src={ad.src} 
                title={ad.title} 
                subtitle={ad.subtitle} />
            ))}
            
        </RightNavContainer>
    );
};

export default RightNav;