import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 88px;
  width: 100%;
  background-color: #282828;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  .music{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 16px;
    
    & > img{
      height: 56px;
      width: 56px;
      object-fit: cover;
      background-color: rgba(139,139,139,0.72);
      margin-right: 14px;
    }
    
    .music-info{
      display: flex;
      flex-direction: column;
      
      .music-title{
        display: flex;
        flex-direction: row;
        margin-bottom: 4px;
        
        .title{
          cursor: pointer; 
          
          span{
            font-size: 14px;
            font-weight: 600;
            color: #ffffff;
            letter-spacing: 0.2px;  
        
            &:hover{
              color: #ffffff;
              border-bottom: 1px solid #ffffff;
            }
          }  
        }
      }
      
      .author-name{
        cursor: pointer;
          
        span{
          font-size: 12px;
          font-weight: 600;
          color: #999999;
          letter-spacing: 0.2px;
          padding-bottom: 2px;
                 
          &:hover{
            color: #ffffff;
            border-bottom: 1px solid #ffffff;
          }
        }
      }
    }
  }
`;
