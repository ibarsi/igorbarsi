export const buildPageTitle = (primaryKeywords, secondaryKeywords) => {
    const brand = 'Igor Barsi';

    return secondaryKeywords
        ? `${ primaryKeywords } - ${ secondaryKeywords } | ${ brand }`
        : `${ primaryKeywords } | ${ brand }`;
};
