import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  
  .top{
    display: flex;
    flex-direction: row;
    flex: 1;
  }
  
  .bottom{
    display: flex;
  }
`

export const Content = styled.section`
  display: flex;
  flex: 1;
`
