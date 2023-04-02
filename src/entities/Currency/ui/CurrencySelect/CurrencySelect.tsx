import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { classNames } from 'shared/lib/classNames/classNames';

const options = [{
    value: Currency.RUB,
    label: 'RUB',
}, {
    value: Currency.EUR,
    label: 'EUR',
}];

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

export const CurrencySelect: FC<CurrencySelectProps> = memo(({
    className, onChange, value, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, []);

    return (
        <Select
            value={value}
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
