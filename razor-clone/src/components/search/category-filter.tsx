import { useTranslation } from 'next-i18next';
import Heading from '../ui/heading';
import CategoryFilterMenu from '../search/category-filter-menu';
import Alert from '../ui/alert';
import Scrollbar from '../ui/scrollbar';
import CategoryListCardLoader from '../ui/loaders/category-list-card-loader';
import { useCategoriesQuery } from '../../framework/basic-rest/category/get-all-categories';

export const CategoryFilter = () => {
  const { t } = useTranslation('common');
  const {
    data,
    isLoading: loading,
    error,
  } = useCategoriesQuery({
    limit: 10,
  });

  if (loading) {
    return (
      <div className="hidden xl:block">
        <div className="w-72 mt-8 px-2">
          <CategoryListCardLoader uniqueKey="category-list-card-loader" />
        </div>
      </div>
    );
  }
  if (error) return <Alert message={error.message} />;

  return (
    <div className="block">
      <Heading className="lg:text-xl mb-5 -mt-1 block-title">{t('text-categories')}</Heading>
      <div className=" max-h-full overflow-hidden ">
        <Scrollbar className="w-full category-filter-scrollbar">
          {data?.categories?.data?.length ? (
            <CategoryFilterMenu items={data?.categories?.data} />
          ) : (
            <div className="min-h-full pt-6 pb-8 px-9 lg:p-8">
              {t('text-no-results-found')}
            </div>
          )}
        </Scrollbar>
      </div>
    </div>
  );
};
