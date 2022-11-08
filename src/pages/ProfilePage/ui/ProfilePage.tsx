import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;

}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            profilePage
        </div>
    );
};

export default ProfilePage;
