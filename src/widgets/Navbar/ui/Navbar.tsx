import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    useEffect(() => {
        if (authData) {
            setIsAuthModal(false);
        }
    }, [authData]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, []);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
                {isAuthModal && <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />}
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal onClose={onCloseModal} isOpen={isAuthModal} />
        </div>
    );
};
