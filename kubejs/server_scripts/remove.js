onEvent("recipes", event =>{
    // event.remove({input: "bambooeverything:dry_bamboo"})
    // Variant Removal
    // event.remove({output: ["quark:bamboo_block", "thermal:bamboo_block", "bambooeverything:bamboo_bundle", "tropicraft:bamboo_bundle"]})
    // event.remove({output: ["consistency_plus:polished_calcite", "architects_palette:calcite_bricks"], type: 'minecraft:crafting'})

    // ID Removal
    event.remove({id: "consistency_plus:stone_crafting"})
    event.remove({output: "tropicraft:bamboo_stick"})
    event.remove([
        {id: "bambooeverything:bamboo_bundle"}, {id: "bambooeverything:bamboo_bundle_uncrafting"}, 
        {id: "bambooeverything:dry_bamboo_bundle"}, {id: "bambooeverything:dry_bamboo_bundle_uncrafting"}])

})