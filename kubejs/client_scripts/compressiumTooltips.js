onEvent('item.tooltip', event => {
    for (let i = 1; i <= 9; i++) {
        event.add(
            RegExp(`compressium.*_${i}`),
            Text.aqua (
                `Contains ${Math.pow(9, i)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
            )
        )
    }
})

