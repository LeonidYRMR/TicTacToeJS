window.onload = () => {
  let allField = document.getElementsByClassName("game-field_cell");
  let yourMove = 0;
  const moves = [];

  // Выигрышные позиции-------------------------------------
  const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  // создаем тег h1 для вывода победителя-------------------
  let h1 = document.createElement("h1");
  h1.innerHTML = "Ход крестиков:";
  h1.className = "winner";
  document.body.prepend(h1);

  //ходы по очереди крестики и нолики-----------------------
  onclick = (event) => {
    // console.log(event)
    if (event.target.className == "game-field_cell") {
      if (yourMove % 2 == 0) {
        event.target.classList.add("blocked");
        event.target.innerHTML = "x";
        h1.innerHTML = "Ход ноликов:";
      } else {
        event.target.innerHTML = "0";
        event.target.classList.add("blocked");
        h1.innerHTML = "Ход крестиков:";
      }
      moves.push(yourMove);
      //Проверка ничьи------------------------------------------
      if (moves.length == 9) {
        h1.innerHTML = "Ничья!";
      }
      // console.log(moves)
      yourMove += 1;
      checkWinner();
    }
  };

  // Кнопка сброса поля-------------------------------------
  document.querySelector(".reset-button").onclick = resetBt = () => {
    // alert('reset')
    for (let i = 0; i <= 8; i++) {
      allField[i].innerHTML = "";
      allField[i].classList.remove("blocked");
      h1.innerHTML = "Ход крестиков:";
      moves.length = 0;
      yourMove = 0;
    }
  };

  //Проверка выигрыша---------------------------------------
  checkWinner = () => {
    for (let i = 0; i <= winPositions.length; i++) {
      if (
        allField[winPositions[i][0]].innerHTML == "x" &&
        allField[winPositions[i][1]].innerHTML == "x" &&
        allField[winPositions[i][2]].innerHTML == "x"
      ) {
        h1.innerHTML = "Выиграли крестики!";
        stopGame();
      } else if (
        allField[winPositions[i][0]].innerHTML == "0" &&
        allField[winPositions[i][1]].innerHTML == "0" &&
        allField[winPositions[i][2]].innerHTML == "0"
      ) {
        h1.innerHTML = "Выиграли нолики!";
        stopGame();
      }
    }
  };

  //Окончание игры------------------------------------------
  stopGame = () => {
    for (let i = 0; i <= 8; i++) {
      allField[i].classList.add("blocked");
    }
  };
};
