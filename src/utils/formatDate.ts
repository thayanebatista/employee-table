import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import i18n from './i18n';

export const formatDate = (date: string): string => {
  try {
    return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR });
  } catch (error) {
    console.error(i18n.t('errors.invalidDateFormat'), date);
    return date;
  }
};
