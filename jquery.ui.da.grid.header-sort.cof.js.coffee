
class GridHeaderSortablePresenter
    constructor: (@$target, @settings) ->
        @clicksCount = 0

        click: ->
            alert @clicksCount
            if @clicksCount < 2
                @clicksCount++
            else
                @clicksCount = 0

    ###