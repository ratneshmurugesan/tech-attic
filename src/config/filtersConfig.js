export const dashboardNames = {
  EXECUTIVE: "executive",
  SOCIAL: "social",
  SEARCH: "search",
  DMA: "dma",
};

const filters = {
  dates: {
    filter: "dateSelect",
    component: "datePicker",
    values: [],
  },
  //singleSelect
  time_aggregate: {
    filter: "time_aggregate",
    component: "singleSelect",
    values: [],
  },
  conversion_source: {
    filter: "conversion_source",
    component: "singleSelect",
    values: [],
  },
  campaign_subscription: {
    filter: "campaign_subscription",
    component: "singleSelect",
    values: [],
  },
  //multiSelect
  group_value: {
    filter: "group_value",
    component: "multiSelect",
    values: [],
  },
  targeting_type: {
    filter: "targeting_type",
    component: "multiSelect",
    values: [],
  },
  geo: {
    filter: "geo",
    component: "multiSelect",
    values: [],
  },
  channels: {
    filter: "channels",
    component: "multiSelect",
    values: [],
  },
  platforms: {
    filter: "platforms",
    component: "multiSelect",
    values: [],
  },
  campaign_brands: {
    filter: "campaign_brands",
    component: "multiSelect",
    values: [],
  },
  buckets: {
    filter: "buckets",
    component: "multiSelect",
    values: [],
  },
  categories: {
    filter: "categories",
    component: "multiSelect",
    values: [],
  },
  programs: {
    filter: "programs",
    component: "multiSelect",
    values: [],
  },
  keywords: {
    filter: "keywords",
    component: "multiSelect",
    values: [],
  },
  regions: {
    filter: "regions",
    component: "multiSelect",
    values: [],
  },
  match_type: {
    filter: "match_type",
    component: "multiSelect",
    values: [],
  },
  brandNonBrand: {
    filter: "brandNonBrand",
    component: "multiSelect",
    values: [],
  },
  dma_regions: {
    filter: "dma_regions",
    component: "multiSelect",
    values: [],
  },
};

function withSize(filter, filterSize) {
  return { ...filter, ...{ size: filterSize } };
}

export const executiveFilters = [
  withSize(filters.dates, 3),
  withSize(filters.time_aggregate, 3),
  withSize(filters.channels, 3),
  withSize(filters.platforms, 3),

  withSize(filters.geo, 3),
  withSize(filters.conversion_source, 3),
  withSize(filters.campaign_brands, 3),
  withSize(filters.buckets, 3),

  withSize(filters.categories, 3),
  withSize(filters.group_value, 3),
  withSize(filters.targeting_type, 3),
];

export const socialFilters = [
  withSize(filters.dates, 3),
  withSize(filters.campaign_subscription, 3),
  withSize(filters.programs, 3),
  withSize(filters.keywords, 3),
  withSize(filters.geo, 4),
  withSize(filters.regions, 4),
  withSize(filters.platforms, 4),
];

export const searchFilters = [
  withSize(filters.dates, 3),
  withSize(filters.campaign_subscription, 3),
  withSize(filters.programs, 3),
  withSize(filters.keywords, 3),
  withSize(filters.geo, 3),
  withSize(filters.regions, 2),
  withSize(filters.platforms, 2),
  withSize(filters.match_type, 2),
  withSize(filters.brandNonBrand, 3),
];

export const dmaFilters = [
  withSize(filters.dates, 3),
  withSize(filters.channels, 3),
  withSize(filters.platforms, 3),
  withSize(filters.dma_regions, 3),
];

export const dashboardFilters = {
  executive: executiveFilters,
  social: socialFilters,
  search: searchFilters,
  dma: dmaFilters,
};
