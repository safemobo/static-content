(function() {
    var appPrefix = 'LightFingered-';
    var userAgent = navigator.userAgent || '';

    if (!userAgent.startsWith(appPrefix)) {
        return;
    }

    document.documentElement.classList.add('app-user-agent');
})();
