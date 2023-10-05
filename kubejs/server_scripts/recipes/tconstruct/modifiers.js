/*
event.custom({
        "type": "tconstruct:modifier",
        "inputs": [
            { "item": "example_item"},
            { "item": "example_item2" },
            { "ingredient": [
                { "item": "example_item3" },
                { "item": "example_item3.5" }
            ]}
            { "tag": "example_tag1" },
            { "tag": "example_tag2" }
        ],
        "tools": { "tag": "example_weapon_tag" },
        "slots": { "abilities": 1 },
        "allow_crystal": true,
        "result": { 
            "name": "example_result",
            "level": 1 
        },
        "max_level": 1
    })
*/




onEvent('recipes', event => {
    event.custom({
        "type": "tconstruct:modifier",
        "inputs": [
            { "item": "create:fluid_pipe"},
            { "item": "thermal:fluid_reservoir" },
            { "item": "pipez:fluid_pipe" },
            { "tag": "forge:ender_pearls" },
            { "tag": "forge:ender_pearls" }
        ],
        "tools": { "tag": "tconstruct:modifiable/staffs" },
        "slots": { "abilities": 1 },
        "allow_crystal": true,
        "result": { 
            "name": "tconstruct:bucketing",
            "level": 1 
        },
        "max_level": 1
    })
})