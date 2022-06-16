<script>
  import HeaderScripts from '@settings/HeaderScripts.svelte'
  import { metadata as settings } from '@settings/site.md'
  import {page} from '@/core/router'

  export let seo_title = settings.seo_title || ''
  export let seo_titleAll = settings.seo_titleAll || ''
  export let seo_description = settings.seo_description || ''

  export let site_image = settings.site_image || ''
  export let site_url = settings.site_url || ''
  export let site_themeColor = settings.site_themeColor || ''
  export let scoped = undefined // here to disable console warnings
  export let scopedSync = undefined // here to disable console warnings


  seo_title = seo_title + seo_titleAll
  let fullUrl = site_url + $page.path.replace('/index', '')
</script>

<svelte:head>
  <title>{seo_title}</title>
  <meta name="title" content="{seo_title}"/>
  <meta name="description" content="{seo_description}"/>
  <meta name="theme-color" content={site_themeColor}/>
  <meta property="og:type" content="website">
  <meta property="og:url" content="{site_url}">
  <meta property="og:title" content="{seo_title}">
  <meta property="og:description" content="{seo_description}">
  <meta property="og:image" content="{site_image}">
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="{site_url}">
  <meta property="twitter:title" content="{seo_title}">
  <meta property="twitter:description" content="{seo_description}">
  <meta property="twitter:image" content="{site_image}">
  <link rel="canonical" href={fullUrl}/>
  <link rel="icon" href="/media/icon/favicon.ico" type="image/x-icon" />
  <link rel="apple-touch-icon" sizes="180x180" href="/media/icon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/media/icon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/media/icon/favicon-16x16.png">
  <link rel="manifest" href="/media/icon/site.webmanifest">
  <HeaderScripts />
</svelte:head>