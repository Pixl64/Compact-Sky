onEvent("recipes", event =>{        // String Mesh Recipes
    event.custom({ 
        type: "createsifter:sifting", 
        ingredients: [
            { item: "createsifter:string_mesh" }, 
            { item: "minecraft:dirt" } 
        ], 
        results: [ 
            { item: "twigs:pebble", chance: 0.7 },
            { item: "minecraft:wheat_seeds", chance: 0.1 },
            { item: "minecraft:pumpkin_seeds", chance: 0.05 },
            { item: "minecraft:melon_seeds", chance: 0.05 },
            { item: "minecraft:beetroot_seeds", chance: 0.05 },
            { item: "minecraft:potato", chance: 0.025 },
            { item: "minecraft:carrot", chance: 0.025 },
            { item: "aquaculture:worm", chance: 0.01 },
        ], 
        processingTime: 500 
    })
})

onEvent("recipes", event =>{        // Andesite Mesh Recipes
    
})

onEvent("recipes", event =>{        // Zinc Mesh Recipes
    
})

onEvent("recipes", event =>{        // Brass Mesh Recipes
    
})