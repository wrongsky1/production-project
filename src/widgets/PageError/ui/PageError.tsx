/* eslint-disable i18next/no-literal-string */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageError.module.scss';

interface PropsPageError {
  className?: string,
}

const PageError = ({ className }: PropsPageError) => {
    // eslint-disable-next-line spaced-comment
    //const { t } = useTranslation;

    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <button type="button" onClick={reloadPage}>Обновить страницу</button>
        </div>
    );
};

export default PageError;
