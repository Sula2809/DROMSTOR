import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';

export default function IndexPage({params: {locale}}) {
    // Enable static rendering
    unstable_setRequestLocale(locale);

    const t = useTranslations('IndexPage');

    return (
        <PageLayout title={t('title')}>
            <p className="max-w-[590px]">
                {t.rich('description', {
                    code: (chunks) => (
                        <code className="font-mono text-white">{chunks}</code>
                    )
                })}
            </p>
        </PageLayout>
    );
}