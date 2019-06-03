<?php

namespace LTiollier\NovaMediasManager;

use Illuminate\Support\ServiceProvider;

class NovaMediasManagerServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'ltiollier');
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'medias-manager');
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
        $this->loadRoutesFrom(__DIR__ . '/routes/api.php');

        // Publishing is only necessary when using the CLI.
        if ($this->app->runningInConsole()) {
            $this->bootForConsole();
        }
    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(__DIR__.'/../config/novamediasmanager.php', 'novamediasmanager');

        // Register the service the package provides.
        $this->app->singleton('novamediasmanager', function ($app) {
            return new NovaMediasManager;
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['novamediasmanager'];
    }
    
    /**
     * Console-specific booting.
     *
     * @return void
     */
    protected function bootForConsole()
    {
        // Publishing the configuration file.
        $this->publishes([
            __DIR__.'/../config/novamediasmanager.php' => config_path('novamediasmanager.php'),
        ], 'novamediasmanager.config');

        // Publishing the views.
        /*$this->publishes([
            __DIR__.'/../resources/views' => base_path('resources/views/vendor/ltiollier'),
        ], 'novamediasmanager.views');*/

        // Publishing assets.
        /*$this->publishes([
            __DIR__.'/../resources/assets' => public_path('vendor/ltiollier'),
        ], 'novamediasmanager.views');*/

        // Publishing the translation files.
        /*$this->publishes([
            __DIR__.'/../resources/lang' => resource_path('lang/vendor/ltiollier'),
        ], 'novamediasmanager.views');*/

        // Registering package commands.
        // $this->commands([]);
    }
}
