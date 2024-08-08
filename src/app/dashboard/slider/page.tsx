"use client";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function SliderDemo({ className, ...props }: SliderProps) {
    const [sliderValue, setSliderValue] = useState(10);
    const [rangeValue, setRangeValue] = useState([10,20]);
  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider Value: {sliderValue}</span>
      <Slider defaultValue={[sliderValue]} 
      onValueChange={(value) => setSliderValue(value[0])} max={100} step={1} />
    
    <span>Slider Value: {rangeValue.join(',')}</span>
    <Slider defaultValue={rangeValue} 
      onValueChange={setRangeValue} max={100} step={1} />
        
    </div>
  );
}
