onEvent('recipes', event => {
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: 'minecraft:bamboo' }
        ],
        tool: { tag: 'forge:tools/knives' },
        result: [
            { item: "kubejs:bamboo_twine" , count: 1},
            { item: "bambooeverything:dry_bamboo" , count: 1 , chance: 0.5 }
        ]
    })

    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            { item: "bambooeverything:bamboo_bundle" }
        ],
        tool: { tag: 'forge:tools/knives' },
        result: [
            { item: "kubejs:bamboo_twine" , count: 10},
            { item: "bambooeverything:dry_bamboo" , count: 10 , chance: 0.5 }
        ]
    })
})