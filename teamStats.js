const team = {
    _players:[
      {firstName: 'First',
      lastName: 'Last',
      age: 0}
    ],
    _games: [
      {opponent: 'Opponent',
      teamPoints: 0,
      opponentPoints: 0}
      ],
  
  
    get players() {
      return this._players;
    },
  
    get games(){
      return this._games;
    },
  
  
    // addPlayer() {
    //   newFirstName:'newFirstName',
    //   newLastName:'newLastName',
    //   newAge: 0,
  
    // const player = {
    //   firstName: 'Bibek',
    //   lastName: 'Hamal',
    //   age: 25,
  
    // },
  
      addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
  
  
     addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
   
  
  team.addPlayer('Bugs', ' Bunny', 76);
  team.addGame('Titans', 100, 98);
  console.log(team);
  