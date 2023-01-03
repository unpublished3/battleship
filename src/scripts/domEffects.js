function onPlace(player) {
  console.log(player.board);
  const domBoard = document.getElementById(player.name);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (player.board.board[i][j].ship) {
        {
          if (player.board.board[i][j].position === 1)
            domBoard.children[i * 10 + j - 11].classList.add("placed-left");

          if (
            player.board.board[i][j].value.length ===
            player.board.board[i][j].position
          )
            domBoard.children[i * 10 + j - 11].classList.add("placed-right");

          domBoard.children[i * 10 + j - 11].classList.add("placed");
        }
      }
    }
  }
}

export { onPlace };
