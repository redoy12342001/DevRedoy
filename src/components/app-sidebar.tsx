"use client"

import * as React from "react"
import {
  AudioWaveform,
  BetweenHorizonalStart,
  BookOpen,
  Bot,
  Command,
  FolderKanban,
  Frame,
  GalleryVerticalEnd,
  Home,
  HomeIcon,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavHome } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "DevRedoy",
    email: "devredoy@gmail.com",
    avatar: "/DevRedoy-Icon.png",
  },
  teams: [
    {
      name: "DevRedoy",
      logo: GalleryVerticalEnd,
      plan: "Portfolio",
    }
  ],
  navMain: [
    {
      title: "Home",
      url: "/dashboard",
      icon: HomeIcon,
      isActive: true,
      
    },
    {
      title: "Blogs",
      url: "/admin-boy/blogs",
      icon: BetweenHorizonalStart,
      items: [
        {
          title: "All Blogs",
          url: "/dashboard/blogs",
        },
        {
          title: "Add Blog",
          url: "#",
        },
        
      ],
    },
    {
      title: "Projects",
      url: "#",
      icon: FolderKanban,
      items: [
        {
          title: "All Projects",
          url: "#",
        },
        {
          title: "Add Project",
          url: "#",
        },
       
      ],
    },
    {
      title: "Services",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "All Services",
          url: "#",
        },
        {
          title: "Add Service",
          url: "#",
        },
        
      ],
    },
  ],
  home: [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      name: "Blogs",
      url: "/blogs",
      icon: BetweenHorizonalStart,
    },
    
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavHome home={data.home} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
