"use client"

import * as React from "react"
import {
  BookOpen,
  Package,
  Pentagon,
  Sheet,
  CalendarFold,
  MessagesSquare,
  House,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Mathijs",
    email: "mvdb0207@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Start",
      url: "#",
      icon: House,
    },
    {
      title: "Berichten",
      url: "#",
      icon: MessagesSquare,
    },
    {
      title: "Evenementen",
      url: "#",
      icon: CalendarFold,
    },
    {
      title: "Inventaris",
      url: "#",
      icon: Package,
      items: [
        {
          title: "Licht",
          url: "#",
        },
        {
          title: "Geluid",
          url: "#",
        },
      ],
    },
    {
      title: "Data",
      url: "#",
      icon: Sheet,
      items: [
        {
          title: "Licht - DMX Plan",
          url: "#",
        },
        {
          title: "Geluid - Prik Plan",
          url: "#",
        },
      ],
    },
    {
      title: "Handleidingen",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Licht - Controle Paneel",
          url: "#",
        },
        {
          title: "Licht - Fixtures",
          url: "#",
        },
        {
          title: "Geluid - Mengpaneel",
          url: "#",
        },
        {
          title: "Geluid - Apparatuur",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Pentagon className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Techniek Team</span>
                  <span className="truncate text-xs">Jacob van Liesveldt</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}