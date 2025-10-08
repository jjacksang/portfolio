import { quickData } from '@/app/utils/constants/constantx';
import { ReactNode } from 'react';

export const QuickButtonWrap = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed right-5 bottom-5 z-[2] flex flex-col items-center justify-center gap-3">
      {children}
    </div>
  );
};

export default function QuickButton() {
  return (
    <QuickButtonWrap>
      {quickData.map((item) => (
        <div key={item.id} className="">
          <p>{item.datatooltip}</p>
          <p>{item.tooltiptype}</p>
        </div>
      ))}
    </QuickButtonWrap>
  );
}
