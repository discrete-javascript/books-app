import styled from 'styled-components';

export const BookContainer = styled.div(
  () => `
    .bookscontent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.flex-row {
  display: flex;
  flex-flow: row;
  align-items: center;
}

.flex-column {
  display: flex;
  flex-flow: column;
}

.center {
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.list {
  border-radius: 3px;
  overflow: hidden;

  .card {
    cursor: pointer;
    margin-bottom: 2%;
    perspective: 600px;
    transition: all 0.1s;
    background-color: #212140;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    height: 90px;

    .bottom {
      height: 0px;
      overflow: hidden;
      width: 500px;
      font-size: 12px;
      color: #777;
      font-weight: normal;
    }

    &.open {
      padding: 30px;
      height: auto;

      .bottom {
        margin-top: 10px;
        height: 100%;
        overflow: visible;
      }

      .book {
        transform: rotateY(50deg);
        box-shadow: -10px 10px 10px 2px rgba(0, 0, 0, 0.2), -2px 0px 0px 0px #888;
        transition: all 0.5s;
        transition-delay: 0.05s;
      }

      .info {
        transform: translate(0, -10px);
      }

      .members {
        padding: 15px 20px;
        border-radius: 4px;
        align-self: flex-start;
      }
    }

    button.simple {
      cursor: pointer;
      color: #ccc;
      border: none;
      outline: none;
      border-radius: 4px;
      background-color: #1ea94b;
      padding: 15px 20px;
      font-family: "Montserrat";
      font-weight: bold;
      transition: all 0.1s;

      &:hover {
        box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.3);
        transform: translate(0, -2px);
      }
    }

    .book {
      transition: all 0.5s;
      width: 120px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    }

    .info {
      transition: all 0.2s;
      min-width: 200px;
      padding: 0px 30px;
      font-family: "Montserrat";
      font-weight: bold;

      .title {
        font-size: 1em;
        color: #fff;
        letter-spacing: 1px;
      }

      .author {
        font-size: 12px;
        font-weight: normal;
        color: #888;
      }
    }

    .group {
      margin-left: auto;
    }

    .members {
      transition: all 0.1s;
      padding: 40px;
      font-family: "Montserrat";
      color: #ccc;
      background-color: #1c1c36;

      .current {
        font-weight: bold;
        margin-right: 10px;
      }

      .max {
        opacity: 0.5;
        margin-left: 10px;
      }
    }
  }
}

.container {
  display: flex;
  list-style: none;
}

.page {
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
}

.disabled {
  cursor: not-allowed;
}

.active {
  border: 2px solid #000;
  font-weight: bold;
}

.previous {
  padding: 10px;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
}

.break {
  padding: 10px;
}

.next {
  padding: 10px;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
}

.go-to-start, .filter-button, .close-button, .clear-button {
  padding: 10px;
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
  background: #131325;
  border: 1px solid white;
  color: white;
}

.filter-button {
  position: absolute;
  top: 15px;
  right: 0;
}

.clear-button {
  position: absolute;
  top: 15px;
  right: 70px;
}
`
);
