
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, themeColor, setTheme, setThemeColor } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="border-border">
            {theme === "light" ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick={() => setTheme("light")}
            className={theme === "light" ? "bg-accent text-accent-foreground" : ""}
          >
            <Sun className="h-4 w-4 mr-2" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setTheme("dark")}
            className={theme === "dark" ? "bg-accent text-accent-foreground" : ""}
          >
            <Moon className="h-4 w-4 mr-2" />
            Dark
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="border-border">
            <Palette className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Change color theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem 
            onClick={() => setThemeColor("default")}
            className={themeColor === "default" ? "bg-accent text-accent-foreground" : ""}
          >
            Default
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setThemeColor("blue")}
            className={themeColor === "blue" ? "bg-accent text-accent-foreground" : ""}
          >
            Blue
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setThemeColor("purple")}
            className={themeColor === "purple" ? "bg-accent text-accent-foreground" : ""}
          >
            Purple
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setThemeColor("green")}
            className={themeColor === "green" ? "bg-accent text-accent-foreground" : ""}
          >
            Green
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
