import styled from 'styled-components'
import Scroll from '~/components/Scroll'

export const Container = styled(Scroll)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  .fake-content{
    height: 300vh;
    padding-top: ${({ fixed }) => fixed ? 240 : 0}px;
    
    p{
      margin: 20px;
    }
  }
  
  .extra-size{
    display: block;
    height: 240px;
  }
  
  .scroll{
    width: 100%;
    background-color: red;
    margin: 0 32px;
  }
`;

