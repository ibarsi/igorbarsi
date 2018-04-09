export const buildPageTitle = (primaryKeywords, secondaryKeywords) => {
    const brand = 'Igor Barsi';

    if (!primaryKeywords && !secondaryKeywords) { return brand; }

    return secondaryKeywords
        ? `${ primaryKeywords } - ${ secondaryKeywords } | ${ brand }`
        : `${ primaryKeywords } | ${ brand }`;
};
