import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Input placeholder="Введите текст" onChange={onChange} value={value} />
        </div>
    );
}

export default MainPage;
