
    let pronoun = ['the','our'];
    let adj = ['great', 'big'];
    let noun = ['jogger','racoon'];
    let domain = [ '.com', '.net'];
    for (let pronombre of pronoun){
        for (let adjetivo of adj){
            for (let nombre of noun){
                for (let dom of domain){
                    console.log(pronombre+adjetivo+nombre+dom);
                }
            }
        } 
    }
    

