onEvent('player.logged_in', event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
        event.player.stages.add('starting_items')
      // Give some items to player
        event.player.give(Item.of('eccentrictome:tome', `{"eccentrictome:mods":{
        alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}},
        apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},
        ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},byg:{0:{Count:1b,id:"byg:biomepedia"}},
        compactmachines:{0:{Count:1b,id:"compactmachines:personal_shrinking_device"}},
        dimdungeons:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"dimdungeons:guide_book"}}},
        extendedcrafting:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"extendedcrafting:guide"}}},
        modularrouters:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"modularrouters:book"}}},
        powah:{0:{Count:1b,id:"powah:book"}},rftoolsbase:{0:{Count:1b,id:"rftoolsbase:manual"}},
        storagenetwork:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"storagenetwork:network_book"}}},
        tconstruct:{0:{Count:1b,id:"tconstruct:encyclopedia",tag:{"akashictome:definedMod":"tconstruct_4",mantle:{book:{current_page:""}}}},
        1:{Count:1b,id:"tconstruct:mighty_smelting",tag:{"akashictome:definedMod":"tconstruct_1"}},
        2:{Count:1b,id:"tconstruct:materials_and_you",tag:{mantle:{book:{current_page:""}}}},
        3:{Count:1b,id:"tconstruct:tinkers_gadgetry",tag:{"akashictome:definedMod":"tconstruct_2"}},
        4:{Count:1b,id:"tconstruct:puny_smelting"},
        5:{Count:1b,id:"tconstruct:fantastic_foundry",tag:{"akashictome:definedMod":"tconstruct_3"}}},
        tetra:{0:{Count:1b,id:"tetra:holo",tag:{"holo/core":"holo/core","holo/core_material":"frame/dim","holo/frame":"holo/frame","holo/frame_material":"core/ancient"}}},
        theoneprobe:{0:{Count:1b,id:"theoneprobe:probenote"}},
        thermal:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"thermal:guidebook"}}}},"eccentrictome:version":1}`))
    }
})