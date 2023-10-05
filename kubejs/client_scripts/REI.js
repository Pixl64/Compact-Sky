// Hide Items
onEvent('rei.hide.items', event => {
    // event.hide('decorative_blocks:blockstate_copy_item')
    // event.hide('botania:pebble')
    // event.hide('statues:pebble')
    // event.hide('tconstruct:clear_item_frame')

    global.removedItems.forEach((removedItem) => {
        event.hide(removedItem)
    })

})

// Remove Recipe Categories
onEvent('rei.remove.categories', event => {
    event.remove('twilightforest:uncrafting') 
})

// Group Items
onEvent('rei.group', event =>{      // Groups similar items
    const useNbt = [
        'potion', 'enchanted_book', 'splash_potion', 'tipped_arrow', 'lingering_potion', 'apotheosis:potion_charm', 
        'woodenbucket:wooden_bucket', 'mekanism:creative_fluid_tank', 'mekanism:creative_chemical_tank', 'tconstruct:potion_bucket',
        'tconstruct:crafting_station', 'tconstruct:tinker_station', 'tconstruct:part_builder', 'quark:seed_pouch']

    useNbt.forEach(id => {
    const item = Item.of(id)
    const { namespace, path } = Utils.id(item.id)
    event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.name, item)
    })

})

