// Hide Items
onEvent('jei.hide.items', event => {
    // event.hide(Item.of('ae2:facade').ignoreNBT())
    event.hide(/^allthecompressed:allthemodium_block_/)
    event.hide(/^allthecompressed:vibranium_block_/)
    event.hide(/^allthecompressed:unobtainium_block_/)
    event.hide(/^allthecompressed:va_alloy_block_/)
    event.hide(/^allthecompressed:ua_alloy_block_/)
    event.hide(/^allthecompressed:uv_alloy_block_/)
    event.hide(/^allthecompressed:atm_star_block_/).ignoreNBT()
    event.hide(/^allthecompressed:ender_pearl_block_/)
    event.hide(/^allthecompressed:nether_star_block_/).ignoreNBT()
    event.hide(/^allthecompressed:wax_block_/)


    event.hide(/^exnihilosequentia:.*_sieve/)

})

// Remove Recipe Categories
onEvent('jei.remove.categories', event => {
    event.remove('jeresources:enchantment') // Enchantment Info does it better
    event.remove('jeresources:plant') // Doesn't include the modded plants lol
    event.remove('jeresources:worldgen') // No worldgen to use
    event.remove('jeresources:dungeon') // Also doesn't include modded loot
})