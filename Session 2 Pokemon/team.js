class Team{
    constructor(){
        this.TeamName = 'defolt team';
        this.trainer = 'Ash';
        this.roster = [];
    }

    describe(){
        return `Team ${this.teamName} with trainer ${this.trainer} has the fallowing pokemon: ${[...pokemon]}`
    }

}

export default Team;