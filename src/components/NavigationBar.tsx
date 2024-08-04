import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
}  from "@/components/ui/navigation-menu"

import {cn} from "@/lib/utils";
import * as React from "react"

const explore: { title: string; href: string; description: string }[] = [
  {
    title: "Explore",
    href: "/",
    description:
      "Here is all my ongoing and completed projects reside. Check it out!",
  },
  {
    title: "Hobbies",
    href: "/",
    description:
      "Here is where I talk about my hobbies. Check it out!",
  },
]

function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/" className="text-lg font-bold mr-4">[K.A]</a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {explore.map((explore) => (
                      <ListItem key={explore.title} title={explore.title} href={explore.href}>
                        {explore.description}
                      </ListItem>))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">>(({ className, title, children, ...props }, ref) => {
    return (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", 
        className)} {...props}>
          <div className="text-sm font-medium leading-none">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"