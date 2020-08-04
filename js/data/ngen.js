// Publish date: 11/11/2015 10:09:00 PM
// ID: 910307
// ICP_SWNAV_V18: H658806U67619J24
// ICP_TRANS: D595821R29187R46
// ICC10: D532331L76810F16

IBMCore.common.util.data.provide('v18main', {
  unav: {
    title: 'Discover IBM',
  },
  mastheadNav: {
    links: [
      {
        title: 'Products',
        url: '',
        hasMenu: true,
        hasMegapanel: false,
        menuSections: [
          {
            heading: 'Find',
            menuItems: [
              {
                title: 'All products',
                url: 'https://www.ibm.com/products?lnk=mpra_ngen&lnk2=learn',
              },
            ],
          },
          {
            heading: 'Explore',
            menuItems: [
              {
                title: 'Products',
                url: 'https://www.ibm.com/products?lnk=mpr_ngen&lnk2=learn',
              },
              {
                title: 'Analytics',
                url:
                  'https://www.ibm.com/analytics?lnk=mpr_bua_ngen&lnk2=learn',
              },
              {
                title: 'Automation',
                url:
                  'https://www.ibm.com/automation?lnk=mpr_buau_ngen&lnk2=learn',
              },
              {
                title: 'Blockchain',
                url:
                  'https://www.ibm.com/blockchain?lnk=mpr_bubk_ngen&lnk2=learn',
              },
              {
                title: 'Cloud',
                url: 'https://www.ibm.com/cloud?lnk=mpr_bucl_ngen&lnk2=learn',
              },
              {
                title: 'Internet of Things',
                url:
                  'https://www.ibm.com/internet-of-things?lnk=mpr_iot_ngen&lnk2=learn',
              },
              {
                title: 'IT Infrastructure',
                url:
                  'https://www.ibm.com/it-infrastructure?lnk=mpr_buit_ngen&lnk2=learn',
              },
              {
                title: 'Mobile',
                url: 'https://www.ibm.com/mobile?lnk=mpr_bumf_ngen&lnk2=learn',
              },
              {
                title: 'Security',
                url:
                  'https://www.ibm.com/security?lnk=mpr_buse_ngen&lnk2=learn',
              },
              {
                title: 'Supply Chain',
                url:
                  'https://www.ibm.com/supply-chain?lnk=mpr_busc_ngen&lnk2=learn',
              },
              {
                title: 'Talent',
                url:
                  'https://www.ibm.com/services/process/talent?lnk=mpr_buta_ngen&lnk2=learn',
              },
              {
                title: 'Watson',
                url: 'https://www.ibm.com/watson?lnk=mpr_buwa_ngen&lnk2=learn',
              },
              {
                title: 'Watson Health',
                url:
                  'https://www.ibm.com/watson/health?lnk=mpr_buwh_ngen&Ink2=learn',
              },
            ],
          },
        ],
      },
      {
        title: 'Services',
        url: '',
        hasMenu: true,
        hasMegapanel: false,
        menuSections: [
          {
            heading: '',
            menuItems: [
              {
                title: 'Financing (US)',
                url:
                  'https://www.ibm.com/financing?lnk=mse_fin_ngen&lnk2=learn',
              },
              {
                title: 'Industry expertise (US)',
                url:
                  'https://www.ibm.com/industries?lnk=mse_ie_ngen&lnk2=learn',
              },
              {
                title: 'Training and skills (US)',
                url: 'https://www.ibm.com/training?lnk=mse_tr_ngen&lnk2=learn',
              },
            ],
          },
        ],
      },
      {
        title: 'Industries',
        url: 'https://www.ibm.com/industries?lnk=min_ngen',
        hasMenu: false,
        hasMegapanel: false,
        menuSections: [],
      },
      {
        title: 'Developers',
        url: '',
        hasMenu: true,
        hasMegapanel: false,
        menuSections: [
          {
            heading: '',
            menuItems: [
              {
                title: 'developerWorks (US)',
                url: 'https://www.ibm.com/developerworks/',
              },
              {
                title: 'PartnerWorld',
                url: 'https://www.ibm.com/partnerworld/',
              },
            ],
          },
        ],
      },
      {
        title: 'Support',
        url: 'https://www.ibm.com/support/en-us/',
        hasMenu: false,
        hasMegapanel: false,
        menuSections: [],
      },
    ],
  },
  profileMenu: {
    signedout: [
      { title: 'My IBM', url: 'https://myibm.ibm.com/dashboard/' },
      {
        title: 'Sign in',
        url:
          'https://idaas.iam.ibm.com/idaas/mtfim/sps/authsvc?PolicyId=urn:ibm:security:authentication:asf:basicldapuser&Target={{window.location}}',
      },
    ],
    signedin: [
      { title: 'My IBM', url: 'https://myibm.ibm.com/dashboard/' },
      { title: 'Profile', url: 'https://myibm.ibm.com/profile/' },
      {
        title: 'Billing',
        url: 'https://myibm.ibm.com/billing/?lnk=mmi',
      },
      {
        id: 'signout',
        title: 'Sign out',
        url: 'https://www.ibm.com/account/us-en/signout.html',
      },
    ],
  },
  marketplace: {
    title: 'Products',
    url: '',
  },
  footerMenu: [
    {
      title: 'Discover',
      links: [
        {
          title: 'Products (US)',
          url: 'https://www.ibm.com/products?lnk=fdi_ngen',
        },
        {
          title: 'Redbooks (US)',
          url: 'https://www.redbooks.ibm.com?lnk=fdi_ngen',
        },
        {
          title: 'Services (US)',
          url: 'https://www.ibm.com/services?lnk=fdi_ngen',
        },
        {
          title: 'Industries (US)',
          url: 'https://www.ibm.com/industries?lnk=fdi_ngen',
        },
        {
          title: 'IBM Research (US)',
          url: 'https://research.ibm.com?lnk=fdi_ngen',
        },
        {
          title: 'Case studies (US)',
          url: 'https://www.ibm.com/case-studies?lnk=fdi_ngen',
        },
        {
          title: 'Financing (US)',
          url: 'https://www.ibm.com/financing?ref=ibmfooter&lnk=fdi_ngen',
        },
      ],
    },
    {
      title: 'Information for...',
      links: [
        {
          title: 'Developers (US)',
          url: 'https://www.ibm.com/developerworks?lnk=fif_ngen',
        },
        {
          title: 'Business Partners',
          url: 'https://www.ibm.com/partnerworld?lnk=fif_ngen',
        },
      ],
    },
    {
      title: 'Connect with us',
      links: [
        { title: 'Support', url: 'https://www.ibm.com/support/ng/en/' },
        {
          title: 'Find a Business Partner (US)',
          url: 'https://www.ibm.com/partnerworld/wps/bplocator/search.jsp',
        },
      ],
    },
    {
      title: 'About IBM',
      links: [
        { title: 'Careers', url: 'https://www.ibm.com/employment/' },
        {
          title: 'Latest news (US)',
          url: 'https://www.ibm.com/press/us/en/index.wss',
        },
        {
          title: 'Investor relations (US)',
          url: 'https://www.ibm.com/investor/',
        },
        {
          title: 'Corporate responsibility (US)',
          url: 'https://www.ibm.com/ibm/responsibility/',
        },
        { title: 'About IBM', url: 'https://www.ibm.com/ng-en/about' },
      ],
    },
  ],
  footerThin: [
    { title: 'Contact', url: 'https://www.ibm.com/contact/ng/en/' },
    { title: 'Privacy', url: 'https://www.ibm.com/privacy/ng/en/' },
    { title: 'Terms of use', url: 'https://www.ibm.com/ng-en/legal' },
    { title: 'Accessibility', url: 'https://www.ibm.com/accessibility/ng/en/' },
  ],
  localeSelector: {
    localVersions: 'Translated versions of this page',
    homepages: 'Worldwide ibm.com home pages',
  },
  socialFollow: {
    title: 'Follow IBM',
    links: [
      {
        linkClass: 'ibm-twitter-encircled-link',
        title: 'Twitter',
        url: 'https://www.twitter.com/ibm',
      },
      {
        linkClass: 'ibm-linkedin-encircled-link',
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/company/ibm',
      },
      {
        linkClass: 'ibm-facebook-encircled-link',
        title: 'Facebook',
        url: 'https://www.facebook.com/ibm',
      },
      {
        linkClass: 'ibm-youtube-encircled-link',
        title: 'YouTube',
        url: 'https://www.youtube.com/ibm',
      },
    ],
  },
  socialSharing: [
    {
      id: 'digg',
      title: 'Digg',
      url: 'https://digg.com/submit?phase=2&url=%{URL}&title=%{TITLE}',
    },
    {
      id: 'facebook',
      title: 'Facebook',
      url: 'https://www.facebook.com/sharer.php?u=%{URL}&t=%{TITLE}',
    },
    {
      id: 'twitter',
      title: 'Twitter',
      url: 'https://twitter.com/home?status=%{URL}%20-%20%{TITLE}',
    },
    {
      id: 'delicious',
      title: 'Delicious',
      url: 'https://delicious.com/post?url=%{URL}&title=%{TITLE}',
    },
    {
      id: 'linkedin',
      title: 'Linked In',
      url:
        'https://www.linkedin.com/shareArticle?mini=true&url=%{URL}&title=%{TITLE}',
    },
  ],
  leaving: {
    LEAVING001: 'Leaving the IBM Web site',
    LEAVING002:
      "You are now leaving the IBM Web site. IBM makes no representations or warranties about any other Web site which you may access through this one. When you access non-IBM Web sites, even though they might contain the IBM logo and content regarding IBM's products and services, such Web sites are independent of IBM and IBM has no control over the operation of non-IBM Web sites. In addition, a link to a non-IBM Web site does not mean that IBM endorses that Web site or has any responsibility for the use of such Web site.",
    LEAVING003: 'The link you requested or were directed to is',
    LEAVING004: 'Notice',
  },
  misc: {
    backtotop: 'Back to top',
    cancelText: 'Cancel',
    close: 'Close',
    cookiePrefs: 'Cookie preferences',
    continueText: 'Continue',
    editProfile: 'Edit profile',
    emailThisPage: '',
    feedback: 'Feedback',
    mpScopedSearh: 'In Products',
    withinMp: 'Products',
    next: 'Next',
    noresults: 'No results found',
    prev: 'Previous',
    resultsNav: 'Use down and up arrow keys to navigate through the results.',
    search: 'Search',
    selectCountry: 'Select a country/region',
    sharePage: 'Share this page',
    signin: 'Sign in',
    signout: 'Sign out',
    sitenav: 'Site navigation',
    welcomeback: 'Welcome back',
  },
});
