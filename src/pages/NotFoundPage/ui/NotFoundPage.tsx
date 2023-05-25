import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

interface PropsNotFoundPage {
  className?: string,
}

const NotFoundPage = ({ className }: PropsNotFoundPage) => {
    const { t } = useTranslation();
    return (
        <Page
            data-testid="NotFoundPage"
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            {t('Страница не найдена')}
        </Page>
    );
};

export default NotFoundPage;
