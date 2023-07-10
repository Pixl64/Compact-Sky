onEvent('item.tags', event => {
    // Bamboo Blocks
    event.add('minecraft:leaves', 'twigs:bamboo_thatch')
    event.add('minecraft:logs', ['twigs:bundled_bamboo', 'twigs:stripped_bundled_bamboo'])
    event.add('forge:stripped_logs', 'twigs:stripped_bundled_bamboo')

    
})