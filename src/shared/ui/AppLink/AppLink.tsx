import React, { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface PropsAppLink extends LinkProps {
  className?: string,
  theme?: AppLinkTheme;
  children?: ReactNode;
}

const AppLink = memo((props: PropsAppLink) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

export default AppLink;
