define('configuration/icboe/production', ['configuration/production', 'icboe/ApplicationModule'], function(baseConfiguration, IONApplicationModule) {
    return mergeConfiguration(baseConfiguration, {
        modules: [
            new IONApplicationModule()
        ]
    });
});
