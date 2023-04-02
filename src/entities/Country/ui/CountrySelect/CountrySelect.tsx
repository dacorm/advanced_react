import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { classNames } from 'shared/lib/classNames/classNames';
import { Country } from 'entities/Country';

const options = [{
    value: Country.Armenia,
    label: 'Armenia',
}, {
    value: Country.Belarus,
    label: 'Belarus',
}, {
    value: Country.Kazakhstan,
    label: 'Kazakhstan',
}, {
    value: Country.Russia,
    label: 'Russia',
}, {
    value: Country.Ukraine,
    label: 'Ukraine',
}];

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

export const CountrySelect: FC<CountrySelectProps> = memo(({
    className, onChange, value, readonly,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, []);

    return (
        <Select
            value={value}
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
