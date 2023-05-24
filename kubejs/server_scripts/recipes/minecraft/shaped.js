onEvent("recipes", event => {
    event.shaped("minecraft:stick", [
        'A',
        'A'
    ], {
        A: "minecraft:bamboo"
    })
    event.shaped("bambooeverything:dry_bamboo_bundle", [
        'AA',
        'AA'
    ], {
        A: "bambooeverything:dry_bamboo"
    })
    event.shaped("bambooeverything:bamboo_bundle", [
        'AA',
        'AA'
    ], {
        A: "minecraft:bamboo"
    })
})