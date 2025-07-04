document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.getElementById('change-theme-btn');
    let darkMode = false;

    const images = [
        {
            selector: 'img[alt="face"]',
            light: 'assets/face.png',
            dark: 'assets/Dface.png',
        },
        {
            selector: '.blueEll',
            light: 'assets/Ellipse 1.png',
            dark: 'assets/DEllipse 1.png',
        },
        {
            selector: '.greeenEll',
            light: 'assets/Ellipse 2.png',
            dark: 'assets/DEllipse 2.png',
        },
        {
            selector: '.pinkEll',
            light: 'assets/Ellipse 3.png',
            dark: 'assets/DEllipse 3.png',
        },
        {
            selector: '.bluePolyg',
            light: 'assets/Polygon 1.png',
            dark: 'assets/DPolygon 1.png',
        },
        {
            selector: '.blueRect1',
            light: 'assets/Rectangle 1.png',
            dark: 'assets/DRectangle 1.png',
        },
        {
            selector: '.blueRect2',
            light: 'assets/Rectangle 1.png',
            dark: 'assets/DRectangle 1.png',
        },
        {
            selector: '.greenRect',
            light: 'assets/Rectangle 2.png',
            dark: 'assets/DRectangle 2.png',
        },
        {
            selector: '.yellowPlus',
            light: 'assets/pluss.png',
            dark: 'assets/Dpluss.png',
        },
        {
            selector: '.arm1',
            light: 'assets/arm.png',
            dark: 'assets/Darm.png',
        },
        {
            selector: '.arm2',
            light: 'assets/arm.png',
            dark: 'assets/Darm.png',
        },
        {
            selector: '.leg1',
            light: 'assets/leg.png',
            dark: 'assets/Dleg.png',
        },
        {
            selector: '.leg2',
            light: 'assets/leg.png',
            dark: 'assets/Dleg.png',
        },
    ];

    themeBtn.addEventListener('click', () => {
        const existingTheme = document.getElementById('theme-style');

        if (!darkMode) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'css/evil_theme.css';
            link.id = 'theme-style';
            document.head.appendChild(link);

            images.forEach(({ selector, dark }) => {
                const el = document.querySelector(selector);
                if (el) el.src = dark;
            });
        } else {
            if (existingTheme) {
                existingTheme.remove();
            }

            images.forEach(({ selector, light }) => {
                const el = document.querySelector(selector);
                if (el) el.src = light;
            });
        }

        darkMode = !darkMode;
    });
});
