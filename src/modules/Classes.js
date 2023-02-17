class Table{
    
    constructor(){

        this.setPiece(1, 'Pawn', 2, 1);
        this.setPiece(1, 'Pawn', 2, 2);
        this.setPiece(1, 'Pawn', 2, 3);
        this.setPiece(1, 'Pawn', 2, 4);
        this.setPiece(1, 'Pawn', 2, 5);
        this.setPiece(1, 'Pawn', 2, 6);
        this.setPiece(1, 'Pawn', 2, 7);
        this.setPiece(1, 'Pawn', 2, 8);

        this.setPiece(1, 'Tower', 1, 1);
        this.setPiece(1, 'Tower', 1, 8);

        this.setPiece(1, 'Horse', 1, 2);
        this.setPiece(1, 'Horse', 1, 7);
        
        this.setPiece(1, 'Bishop', 1, 3);
        this.setPiece(1, 'Bishop', 1, 6);

        this.setPiece(1, 'Queen', 1, 4);
        this.setPiece(1, 'King', 1, 5);


        
        this.setPiece(2, 'Pawn', 2, 1);
        this.setPiece(2, 'Pawn', 2, 2);
        this.setPiece(2, 'Pawn', 2, 3);
        this.setPiece(2, 'Pawn', 2, 4);
        this.setPiece(2, 'Pawn', 2, 5);
        this.setPiece(2, 'Pawn', 2, 6);
        this.setPiece(2, 'Pawn', 2, 7);
        this.setPiece(2, 'Pawn', 2, 8);

        this.setPiece(2, 'Tower', 1, 1);
        this.setPiece(2, 'Tower', 1, 8);

        this.setPiece(2, 'Horse', 1, 2);
        this.setPiece(2, 'Horse', 1, 7);
        
        this.setPiece(2, 'Bishop', 1, 3);
        this.setPiece(2, 'Bishop', 1, 6);

        this.setPiece(2, 'Queen', 1, 4);
        this.setPiece(2, 'King', 1, 5);

    }


    /**
     * 
     * @param {int} player_id 
     * @param {String} type 
     * @param {} line 
     * @param {*} collumn 
     * @returns 
     */
    setPiece(player_id, type, line, collumn){

        const valid_types = [
            'Pawn',
            'Tower',
            'Horse',
            'Bishop',
            'Queen',
            'King',
        ];

        if(!valid_types.filter(valid_type => valid_type == type )){

            console.error('Tipo "'+ type +'" não é um tipo de peça válido.');

            return false;
        }

        piece = new type(player_id);

        this.possitions[line][collumn] = piece;

    }

}