import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Label } from './ui/label.tsx';
import { Switch } from './ui/switch.tsx';

function AppHeader() {
  const [, setTheme] = useState('light');
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleTheme = (val: boolean) => {
    setIsLightMode(val);
    if (val) setTheme('light');
    else setTheme('dark');
  };
  return (
    <header className="flex items-center justify-between py-[20px] px-[30px] text-2xl font-bold">
      <h1>GeoVa</h1>

      <div className="flex items-center justify-between gap-[10px]">
        <Label htmlFor="theme-mode">
          <Moon color="black" size={20} />
        </Label>
        <Switch
          id="theme-mode"
          checked={isLightMode}
          onCheckedChange={toggleTheme}
        />
        <Label htmlFor="theme-mode">
          <Sun color="black" size={20} />
        </Label>
      </div>
    </header>
  );
}
export default AppHeader;
