onEvent("recipes", event =>{
    // ID Removal
    event.remove({id: "consistency_plus:stone_crafting"})
    event.remove({id: 'twigs:bundled_bamboo/bundled_bamboo'})
    event.remove({id: 'twigs:bundled_bamboo/bundled_bamboo_undo'})



    // Type Removal
    event.remove({type: 'extendedcrafting:combination'})
    event.remove({type: 'extendedcrafting:compressor'})
    event.remove({type: 'extendedcrafting:shaped_ender_crafter'})
    event.remove({type: 'extendedcrafting:shaped_table'})
    event.remove({type: 'extendedcrafting:shapeless_ender_crafter'})
    event.remove({type: 'extendedcrafting:shapeless_table'})
    event.remove({type: 'extendedcrafting:ultimate_singularity'})

    event.remove({type: 'createsifter:sifting'})

    //maybe remove pneumatic craft explosion craft in favour of lychee?
    
    
    // Input Removal

    event.remove({input: [
        
    ]})

    global.removedItems.forEach((removedItem) => {
        event.remove({input: removedItem})
        event.remove({output: removedItem})
    })

    
    // Output Removal

    event.remove({output: [
        "thermal:bamboo_block", 
        "tropicraft:bamboo_bundle",
        "tropicraft:bamboo_stick",
        'tconstruct:clear_item_frame',
    ]})
    

})