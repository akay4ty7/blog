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
                  <NavigationMenuLink href="/projects">Projects</NavigationMenuLink>
                  <NavigationMenuLink href="/hobbies">Hobbies</NavigationMenuLink>
                  {/* Add more links here */}
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