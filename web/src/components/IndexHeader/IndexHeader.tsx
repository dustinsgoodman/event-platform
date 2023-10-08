import { type FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Link } from '@redwoodjs/router';

import Button from 'src/components/Button/Button';

type IndexHeaderProps = {
  entityType: string;
  entityCreateRoute: string;
};

const IndexHeader: FC<IndexHeaderProps> = ({
  entityType,
  entityCreateRoute,
}) => {
  const { t } = useTranslation();

  return (
    <div className="mb-2 flex items-center justify-between">
      <h2>{t(`${entityType}.index`)}</h2>
      <Button
        component={Link}
        to={entityCreateRoute}
        theme="alternative"
        size="sm"
      >
        {t(`${entityType}.create`)}
      </Button>
    </div>
  );
};

export default IndexHeader;
