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

function NavBar() {

  const content = [
    { title: 'Projects', link: '/projects' },
    { title: 'Hobbies', link: '/hobbies' },
    // Add more in future.
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/" className="text-lg font-bold mr-4">Logo</a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a 
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/projects">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Projects
                          </div>
                          <p>
                            Here is all my ongoing and completed projects reside. Check it out!
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a 
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/hobbies">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Hobbies
                          </div>
                          <p>
                            Here is where I talk about my hobbies. Check it out!
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
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

export default NavBar;

// Make the above better