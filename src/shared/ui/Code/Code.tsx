import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    children: React.ReactNode;
}

export const Code: FC<CodeProps> = ({ className, children }) => {
    const { t } = useTranslation();

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button className={cls.copyBtn}>Копировать</Button>
            <code>
                {children}
            </code>
        </pre>
    );
};
