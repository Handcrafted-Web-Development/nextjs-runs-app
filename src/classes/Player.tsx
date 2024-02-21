class Player {
    social: number;
    motivation: number;
    fitness: number;
    money: number;

    constructor(social: number, motivation: number, fitness: number, money: number) {
        this.social = social;
        this.motivation = motivation;
        this.fitness = fitness;
        this.money = money;
    }

    // getStats(): [string, number][] {
    //     return [
    //         ['social', this.social],
    //         ['motivation', this.motivation],
    //         ['fitness', this.fitness]
    //         ['money', this.money],
    //     ];
    // }

    changeStat(stat: string, value: number): void {
        switch (stat) {
            case 'social':
                this.social += value;
                break;
            case 'motivation':
                this.motivation += value;
                break;
            case 'fitness':
                this.fitness += value;
                break;
            case 'money':
                this.money += value;
                break;
            default:
                console.error('Not a stat');
        }
    }
}