import { quickData } from "@/app/utils/constants/constantx";

export default function QuickButton() {
    return (
        <>
            {quickData.map((item) => (
                <div key={item.id}>
                    <p>{item.datatooltip}</p>
                    <p>{item.tooltiptype}</p>
                </div>
            ))}
        </>
    );
}
