onEvent("recipes", e =>{
    let stoneRevers = (blocklist) => {
        blocklist.forEach(output => {
            blocklist.forEach(input => {
                if (input != output){
                    e.stonecutting(output, input)
                }
            })
        })
    }
    
    stoneRevers(["consistency_plus:polished_calcite", "architects_palette:calcite_bricks", "quark:polished_calcite"])
})