import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Chip, { ChipProps } from '@mui/material/Chip';
import { green } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { useTranslate } from '@refinedev/core';
import { IStore } from '../../../interfaces';

type Props = {
  value: IStore['isActive'];
  size?: ChipProps['size'];
  label?: string;
};

export const StoreStatus = (props: Props) => {
  const { palette } = useTheme();
  const isDarkMode = palette.mode === 'dark';

  const t = useTranslate();

  const color = props.value ? (isDarkMode ? green[200] : green[800]) : 'default';
  const icon: ChipProps['icon'] = props.value ? (
    <CheckCircleIcon
      sx={{
        fill: isDarkMode ? green[200] : green[600],
      }}
    />
  ) : (
    <BlockOutlinedIcon color='action' />
  );

  return (
    <Chip
      label={props?.label ?? t(`stores.fields.isActive.${props.value}`)}
      icon={icon}
      sx={{
        borderColor: color,
        color: color,
      }}
      variant='outlined'
      size={props?.size || 'small'}
    />
  );
};
