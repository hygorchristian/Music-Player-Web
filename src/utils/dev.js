export const __DEV__ = process.env.NODE_ENV === 'development'

export const lorem = {
  short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  medium: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ipsum in sem tristique, consequat imperdiet lacus vehicula. Vivamus ac nulla auctor, blandit sem vitae, facilisis elit. ',
  large: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ipsum in sem tristique, consequat imperdiet lacus vehicula. Vivamus ac nulla auctor, blandit sem vitae, facilisis elit. Vestibulum metus nisl, eleifend vitae nisi eu, posuere lacinia lectus. Nam placerat quam luctus augue efficitur scelerisque. Nam vulputate ultrices enim, eu dictum augue bibendum in. Duis rutrum scelerisque dolor maximus aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ornare semper nisi non ultricies. In efficitur magna non orci sodales, sed dignissim nisl mollis. Phasellus non pharetra nisl. Donec fringilla tincidunt mi id mollis. Integer blandit, ipsum ac euismod tincidunt, nisi nunc blandit purus, ut malesuada tortor dolor eget ex. Duis eget nunc consequat, sagittis eros sit amet, cursus augue. Etiam tempus orci eu lectus placerat eleifend. Donec a interdum sapien, vitae venenatis turpis. Donec tincidunt est erat.'
}

export function getItemWidth (width) {
  if (width >= 1740) {
    return ((width - 520 - (24 * 5)) / 6)
  }
  if (width < 1740 && width >= 1280) {
    return ((width - 520 - (24 * 3)) / 4)
  }
  if (width < 1280 && width >= 1190) {
    return ((width - 520 - (24 * 2)) / 3)
  }
  if (width < 1190 && width >= 1020) {
    return ((width - 264 - (24 * 3)) / 4)
  }
  if (width < 1020 && width >= 800) {
    return ((width - 264 - (24 * 2)) / 3)
  }

  return 162
}

export function getItemsPerRow (width) {
  if (width >= 1740) {
    return 6
  }
  if (width < 1740 && width >= 1280) {
    return 4
  }
  if (width < 1280 && width >= 1190) {
    return 3
  }
  if (width < 1190 && width >= 1020) {
    return 4
  }
  if (width < 1020 && width >= 800) {
    return 3
  }

  return 3
}
