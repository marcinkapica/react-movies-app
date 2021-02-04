import { useEffect } from 'react';
import { APP_TITLE } from '../constants';

const useUpdateTitle = (subtitle) => {
  useEffect(() => {
    const fullTitle = subtitle ? `${APP_TITLE} - ${subtitle}` : `${APP_TITLE}`;
    document.title = fullTitle;
  }, [subtitle]);
};

export default useUpdateTitle;
