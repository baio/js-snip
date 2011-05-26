#jQuery plugin example implemented with coffeescript
#http://stackoverflow.com/questions/4533848/writing-a-jquery-plugin-in-coffeescript-how-to-get-function-and-jquery
#https://gist.github.com/909017

$ = jQuery

class GridHeaderSortablePresenter
    constructor: (@$target, @settings) ->

        @clicksCount = 0

    click: ->
        alert @clicksCount
        if @clicksCount < 2
            @clicksCount++
        else
            @clicksCount = 0

$.fn.extend
  GridHeaderSort: (method) ->

    settings = {
        'callbackUrl' : null,

        'delay' : 3000
    }

    methods = {
        init: (options) ->
            @.each ->

                if options
                    $.extend settings, options

                $this = $(@)
                data = $this.data "GridHeaderSort"

                #bind events here
                $this.bind "click.GridHeaderSort", methods.click

                if !data
                   $this.data "GridHeaderSort", {presenter : new GridHeaderSortablePresenter $this, settings}

        destroy: ->
            @.each ->

                 $this = $(@)
                 data = $this.data "GridHeaderSort"

                 #unbind events
                 $this.unbind ".GridHeaderSort"
                 #remove referenced data
                 data.GridHeaderSort.remove()
                 $this.removeData "GridHeaderSort"

        click: ->
            $(@).data("GridHeaderSort").presenter.click()
        }

    if  methods[method]  
        methods[ method ].apply this, Array.prototype.slice.call( arguments, 1)
    else if typeof method == 'object' || ! method
        methods.init.apply this, arguments
    else
        $.error "Method " +  method + " does not exist on jQuery.GridHeaderSort"