import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;

}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch<any>();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onSubmit = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text theme={TextTheme.ERROR} text={error} />}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
                onClick={onSubmit}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
