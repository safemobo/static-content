(function () {
    var html = document.documentElement;
    var savedTheme = null;
    var appPrefix = 'LightFingered-';
    var userAgent = navigator.userAgent || '';

    try {
        savedTheme = localStorage.getItem('theme');
    } catch (error) {
        savedTheme = null;
    }

    html.classList.toggle('dark', savedTheme !== 'light');

    if (!userAgent.startsWith(appPrefix)) {
        initThemeToggle();
        return;
    }

    html.classList.add('app-user-agent');
    initThemeToggle();

    function initThemeToggle() {
        function bindThemeToggle() {
            var btn = document.getElementById('theme-toggle-btn');
            var icon = document.getElementById('theme-icon');

            if (!btn || !icon) {
                return;
            }

            function updateIconState() {
                icon.classList.toggle('rotated-icon', !html.classList.contains('dark'));
            }

            updateIconState();

            btn.addEventListener('click', function () {
                var isDark = html.classList.toggle('dark');

                try {
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                } catch (error) {
                    // Ignore storage failures and keep the in-memory theme state.
                }

                updateIconState();
            });
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', bindThemeToggle, { once: true });
            return;
        }

        bindThemeToggle();
    }
})();
