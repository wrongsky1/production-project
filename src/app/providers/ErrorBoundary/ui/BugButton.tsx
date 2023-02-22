import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface PropsBugButton {
  className?: string,
}

// Компонент для тестирования ErrorBoundary
const BugButton = ({ className }: PropsBugButton) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
        >
            {t('Throw error')}
        </Button>
    );
};

export default BugButton;
