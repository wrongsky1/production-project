import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames'
import cls from './AppLink.module.scss'
 
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface PropsAppLink extends LinkProps {
  className?: string,
  theme?: AppLinkTheme;
}
 
const AppLink: FC<PropsAppLink> = (props) => {
 
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
            className={classNames(cls.AppLink, {[cls[theme]]: true}, [className])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
 
export default AppLink