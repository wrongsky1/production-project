import React from 'react'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames'
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss'
 
interface PropsLangSwitcher {
  className?: string,
}
 
const LangSwitcher = ({className}: PropsLangSwitcher) => {
 
    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? "en" : "ru" )
    }

    return (
            <Button 
                className={classNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            >
                {t('Язык')}
            </Button>
    )
}
 
export default LangSwitcher