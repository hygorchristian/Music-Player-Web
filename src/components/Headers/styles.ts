// @ts-nocheck

import styled from 'styled-components'

export const Container = styled.div<{
  fixed: boolean
  overlay: number
  fixed: boolean
  isTablet: boolean
}>`
  display: flex;
  flex-direction: column;
  width: ${({ isTablet }) =>
    isTablet ? 'calc(100vw - 200px)' : 'calc(100vw - 456px)'};
  height: ${({ height, fixed }) => (fixed ? 116 : height)}px;
  max-height: ${({ fixed }) => (fixed ? 116 : 1000)}px;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  border-bottom: ${({ fixed }) => (fixed ? '1px solid #282828' : 'none')};
  z-index: 1000;

  .overlay {
    height: 100%;
    width: 100%;
    background-color: #121212;
    position: absolute;
    opacity: ${({ overlay }) => overlay};
  }

  .gradient {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding-bottom: 52px;
    padding-left: 32px;
    position: absolute;
    background-image: linear-gradient(#414141, #181818);
  }

  .content {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .header-info {
      position: absolute;
      bottom: 0;
      display: flex;
      padding-left: 32px;
      transition: all 200ms ease-in-out;
      display: flex;
      width: 100%;
      flex-direction: column;

      &.fixed {
        bottom: 500px;
      }
    }

    .subheader-info {
      position: absolute;
      bottom: -100px;
      padding-left: 32px;
      transition: all 150ms ease-in-out;
      width: 100%;
      display: flex;

      &.fixed {
        bottom: 0;
      }
    }
  }
`

export const Fixed = styled.div`
  height: 116px;
`

export const SearchContainer = styled.div<{ width: number }>`
  height: 48px;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: linear-gradient(
    rgba(18, 18, 18, ${({ bgOpacity }) => bgOpacity}) 0%,
    rgba(18, 18, 18, ${({ bgOpacity }) => bgOpacity}) 70%,
    rgba(18, 18, 18, 0) 100%
  );

  .search-control {
    margin-left: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > button {
      height: 24px;
      width: 24px;

      &:active {
        i {
          color: #a8a8a8;
        }
      }

      i {
        color: white;
      }
    }

    .search-input {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 24px;
      width: 175px;
      border-radius: 24px;
      background-color: #ffffff;
      margin-left: 14px;
      padding-left: 6px;
      overflow: hidden;

      i {
        color: #000000;
      }

      input {
        border: none;
        padding-left: 6px;
        height: 100%;
        font-size: 12px;
        width: 130px;

        &::placeholder {
          color: #000000;
        }
      }

      & > button {
        height: 24px;
        width: 24px;
      }
    }
  }

  .user-control {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 35px;

    .user-info {
      display: flex;
      flex-direction: row;
      align-items: center;

      .username {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 10px;
        margin-right: 20px;

        &:hover {
          span {
            text-decoration: underline;
          }
        }

        span {
          color: #ffffff;
          font-size: 14px;
          line-height: 10px;
        }
      }
    }

    button {
      height: 24px;
      width: 24px;

      &:active {
        i {
          color: #a8a8a8;
        }
      }
    }
  }
`
