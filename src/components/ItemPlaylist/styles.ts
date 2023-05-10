import styled from 'styled-components'

export const Container = styled.tr`
  &:hover {
    background-color: #282828;

    td {
      .control-button.hide {
        opacity: 1 !important;
      }
    }
  }

  &.playing {
    background-color: #282828;

    & .text * {
      color: #1fd760 !important;
    }
  }

  td {
    padding: 0 12px;
    height: 40px;
    border-bottom: 1px solid #282828;

    &.button {
      width: 44px;

      .control-button.hide {
        opacity: 0;
      }

      .control-button {
        width: 28px;
        height: 28px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &.outlined {
          border-radius: 50%;
          border: 1px solid #b3b3b3;
          background-color: #1d1d1d;
        }
      }
    }

    .title,
    .artist,
    .album,
    .number {
      font-size: 14px;
      font-weight: 600;
      color: #ffffff;
    }

    .artist,
    .album {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .date,
    .time {
      color: #b3b3b3;
      font-size: 15px;
    }
  }
`
