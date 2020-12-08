import React from "react";

import {
  EXECUTIVE_DASHBOARD,
  SOCIAL_DASHBOARD,
  SEARCH_DASHBOARD,
  DMA_DASHBOARD,
} from "constants/urlConstants";

import ExecutiveContext from "context/ExecutiveContext";
import SocialContext from "context/SocialContext";
import SearchContext from "context/SearchContext";
import DmaContext from "context/DmaContext";

import ExecutiveDashboard from "components/6micro-apps/dashboard-app/Executive";
import SocialDashboard from "components/6micro-apps/dashboard-app/Social";
import SearchDashboard from "components/6micro-apps/dashboard-app/Search";
import DmaDashboard from "components/6micro-apps/dashboard-app/Dma";

import {
  ExecutiveSidebarMenuIcon,
  SocialSidebarMenuIcon,
  SearchSidebarMenuIcon,
  DmaSidebarMenuIcon,
} from "components/1atoms/SvgIcons";

export const DASHBOARD_LINKS = [
  {
    title: "Executive",
    desc: "Summary of Executive Content",
    url: EXECUTIVE_DASHBOARD,
    image: "",
    src: "",
    icon: <ExecutiveSidebarMenuIcon />,
    pageKey: "executive",
    hasNestedPages: false,
    isEnabled: true,
    ContextWrapper: ExecutiveContext.Wrapper,
    Dashboard: ExecutiveDashboard,
  },
  {
    title: "Social",
    desc: "Summary of Social Content",
    url: SOCIAL_DASHBOARD,
    image: "",
    src: "",
    icon: <SocialSidebarMenuIcon />,
    pageKey: "social",
    hasNestedPages: false,
    isEnabled: true,
    ContextWrapper: SocialContext.Wrapper,
    Dashboard: SocialDashboard,
  },
  {
    title: "Search",
    desc: "Summary of Search Content",
    url: SEARCH_DASHBOARD,
    image: "",
    src: "",
    icon: <SearchSidebarMenuIcon />,
    pageKey: "search",
    hasNestedPages: false,
    isEnabled: true,
    ContextWrapper: SearchContext.Wrapper,
    Dashboard: SearchDashboard,
  },
  {
    title: "Designated Market Area",
    desc: "Summary of Designated Market Area",
    url: DMA_DASHBOARD,
    image: "",
    src: "",
    icon: <DmaSidebarMenuIcon />,
    pageKey: "dma",
    hasNestedPages: false,
    isEnabled: true,
    ContextWrapper: DmaContext.Wrapper,
    Dashboard: DmaDashboard,
  },
];
