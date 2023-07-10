onEvent('recipes', event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'minecraft:bamboo' }
        ],
        tool: { tag: 'forge:tools/knives' },
        result: [
            { item: 'twigs:stripped_bamboo' , count: 1},
            { item: 'kubejs:bamboo_twine' , count: 1 , chance: 0.4 },
            { item: 'twigs:bamboo_leaves', count: 1, chance: 0.2 }
        ]
    })

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'twigs:bundled_bamboo' }
        ],
        tool: { tag: 'forge:tools/knives' },
        result: [
            { item: 'twigs:stripped_bundled_bamboo' , count: 1},
            { item: 'kubejs:bamboo_twine' , count: 10 , chance: 0.5 },
            { item: 'twigs:bamboo_leaves', count: 10, chance: 0.1 }
        ]
    })
})