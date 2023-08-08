const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'Google',
      key: '*',
      url: 'https://google.com',
      search: '/search?q='
    },
    {
      category: 'Architecture',
      name: 'Archinect',
      key: 'an',
      url: 'https://archinect.com/',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'fa fa-archinect',
      quickLaunch: true,
    },
    {
      category: 'Architecture',
      name: 'au magazine',
      key: 'au',
      url: 'https://au-magazine.com/',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'fa fa-au',
      quickLaunch: true,
    },
    {
      category: 'Architecture',
      name: 'Detail',
      key: 'det',
      url: 'https://www.detail.de/en/de_en/',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'fa fa-detail',
      quickLaunch: true,
    },   
    {
      category: 'Architecture',
      name: 'Kote',
      key: 'ko',
      url: 'https://www.magasinetkote.no/publikasjoner/mutasjon',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'fa fa-kote',
      quickLaunch: true,
    },        
    {
      category: 'General',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'google fa-brands',
      quickLaunch: true,
    },
    {
      category: 'General',
      name: 'Drive',
      key: 'd',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'google-drive fa-brands',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Dropbox',
      key: 'dp',
      url: 'https://dropbox.com',
      color: '#5682a3',
      icon: 'dropbox fa-brands',
      quickLaunch: false,
    },
    {
      category: 'General',
      name: 'Discord',
      key: 'dc',
      url: 'https://discord.com/app',
      color: '#7289da',
      icon: 'discord fa-brands',
      quickLaunch: false,
    },
    {
      category: 'Programming',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github fa-brands',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'HackerNews',
      key: 'h',
      url: 'https://news.ycombinator.com/',
      search: '/search?stories[query]={}',
      color: 'linear-gradient(135deg, #FF6600, #DC5901)',
      icon: 'hacker-news fa-brands',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Codepen',
      key: 'md',
      url: 'https://codepen.io',
      search: '/search/pens?q=',
      color: '#212121',
      icon: 'codepen fa-brands',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube fa-brands',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit fa-brands',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Twitch',
      key: 'tw',
      url: 'https://www.twitch.tv',
      search: '/directory/game/{}',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'twitch fa-brands',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Plex',
      key: 'px',
      url: 'http://10.0.0.16:32400/',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'circle-play fa-regular',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Overseerr',
      key: 'os',
      url: 'http://10.0.0.16:5055/',
      color: 'linear-gradient(135deg, #6441a5, #4b367c)',
      icon: 'eye fa-regular',
      quickLaunch: false,
    },
    {
      category: 'Other',
      name: 'Instagram',
      key: 'i',
      url: 'https://www.instagram.com',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram fa-brands',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Dribbble',
      key: 'i',
      url: 'https://www.dribbble.com',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'dribbble fa-brands',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Trello',
      key: 'ns',
      url: 'https://www.trello.com',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'trello fa-brands',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Library Genesis',
      key: 'lg',
      url: 'http://libgen.rs/',
      search: 'search.php?req=',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'books fa-regular',
      quickLaunch: false,
    },
    {
      category: 'Other',
      name: 'Translate',
      key: 'tr',
      url: 'https://translate.google.com/',
      search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
      color: '#1a73e8',
      icon: 'language fa-regular',
      quickLaunch: false,
    },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: true,

  /**
   * File extension for icon images
   */
  iconExtension: 'svg'
};
