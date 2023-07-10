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

    //maybe remove pneumatic craft explosion craft in favour of lychee?
    
    
    // Input Removal

    
    // Output Removal

    event.remove({output: "tropicraft:bamboo_stick"})
    event.remove({output: ["thermal:bamboo_block", "tropicraft:bamboo_bundle"]})
    

})