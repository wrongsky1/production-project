import { Theme, useTheme } from 'app/providers/ThemeProvider';
import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/theme-light.svg';
import DarkIcon from 'shared/assets/theme-dark.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface PropsThemeSwitcher {
  className?: string,
}

const ThemeSwitcher = ({ className }: PropsThemeSwitcher) => {
    const { theme, toggleTheme } = useTheme();

    return (

        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>

    );
};

export default ThemeSwitcher;
