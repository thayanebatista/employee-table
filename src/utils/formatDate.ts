import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (date: string): string => {
  try {
    return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR });
  } catch (error) {
    console.error('Invalid date format:', date);
    return date;
  }
};
