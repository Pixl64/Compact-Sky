onEvent("recipes", event => {
    event.shaped("minecraft:stick", [
        'A',
        'A'
    ], {
        A: "minecraft:bamboo"
    }).id('minecraft:stick_from_bamboo_item')
    event.shaped('createsifter:string_mesh', [
        'AAA',
        'ABA',
        'AAA'
    ],{
        A: 'minecraft:stick',
        B: '#forge:string'
    }).id('createsifter:string_mesh')
    event.shaped('kubejs:bamboo_clump', [
        'AA',
        'AA'
    ],{
        A: 'minecraft:bamboo'
    })
    event.shaped('twigs:bundled_bamboo', [
        'AA',
        'AA'
    ], {
        A: 'kubejs:bamboo_clump'
    })
    event.shaped('minecraft:dirt', [
        'AB',
        'BA'
    ], {
        A: 'minecraft:bone_meal',
        B: '#minecraft:leaves'
    })    
})