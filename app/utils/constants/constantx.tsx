import IcTopArrow from '@/app/assets/IcTopArrow';
import { EMAIL } from './constant';
import IcMail from '@/app/assets/IcMail';
import IcFeedback from '@/app/assets/IcFeedback';

export const quickData = [
  {
    id: 1,
    dataTooltip: EMAIL,
    toolTipType: 'left',
    icon: <IcMail width={'20'} height={'20'} />,
  },
  {
    id: 2,
    dataTooltip: 'feedback',
    toolTipType: 'left',
    icon: <IcFeedback width={'20'} height={'20'} />,
  },
  {
    id: 3,
    dataTooltip: '맨 위로 이동',
    toolTipType: 'left',
    icon: <IcTopArrow width={'20'} height={'20'} />,
  },
];
