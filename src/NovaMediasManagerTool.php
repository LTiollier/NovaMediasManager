<?php

namespace LTiollier\NovaMediasManager;

use Laravel\Nova\Tool;
use Laravel\Nova\Nova;

class NovaMediasManagerTool extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is bootxed.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('medias-manager', __DIR__.'/../dist/js/medias-manager.js');
        Nova::style('medias-manager', __DIR__.'/../dist/css/medias-manager.css');
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return \Illuminate\View\View
     */
    public function renderNavigation()
    {
        return view('medias-manager::navigation');
    }
}
