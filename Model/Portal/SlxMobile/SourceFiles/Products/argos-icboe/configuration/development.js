define('configuration/icboe/development', ['configuration/development', 'icboe/ApplicationModule'], function(baseConfiguration, IONApplicationModule) {
    return mergeConfiguration(baseConfiguration, {
        modules: [
            new IONApplicationModule()
        ]
    });
});
