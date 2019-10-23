import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.section`
  margin-top: 50px;
`;

export const ResultTitle = styled.p`
  color: ${(props) => props.theme.thirdColor};
  font-size: ${(props) => props.theme.regularSize};
  margin-bottom 30px;
  margin-top: 30px;
`;

export const RecentlyViewedAlbums = styled.p`
  color: ${(props) => props.theme.thirdColor};
  font-size: ${(props) => props.theme.regularSize};
  margin-bottom 30px;
`;
