import styled from 'styled-components';

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 240px 1fr 280px;
  gap: 24px;
  max-width: 1200px;
  margin: 84px auto 24px auto;
  padding: 0 24px;

  @media (max-width: 992px) {
    grid-template-columns: 200px 1fr;
    & > div:last-child {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    & > div:first-child {
      display: none;
    }
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const SideBarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;