// event.recipes.summoningrituals.altar(Catalyst)

onEvent('recipes', event => {
    event.recipes.summoningrituals
        .altar("ars_nouveau:blank_glyph")
        .itemOutput("ars_nouveau:glyph_summon_steed")
        .itemOutput("born_in_chaos_v1:empty_fel_lamp")
        .input("4x ars_nouveau:conjuration_essence")
        .input("8x farmersdelight:horse_feed")
        .input("born_in_chaos_v1:fel_lamp")
        .input("minecraft:saddle")
        .recipeTime(200)        
});