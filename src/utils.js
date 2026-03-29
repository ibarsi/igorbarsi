export const buildPageTitle = (primaryKeywords, secondaryKeywords) => {
  const brand = 'Igor Barsi';

  if (!primaryKeywords && !secondaryKeywords) {
    return brand;
  }

  return secondaryKeywords
    ? `${primaryKeywords} - ${secondaryKeywords} | ${brand}`
    : `${primaryKeywords} | ${brand}`;
};

const BLOG_DATE_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
});

const BLOG_DATE_WITH_YEAR_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

export const parsePostDate = (value) => {
  if (!value) {
    return null;
  }

  const [month, day, year] = value.split('-').map(Number);

  if (!month || !day || !year) {
    return null;
  }

  return new Date(year, month - 1, day);
};

export const getPostYear = (value) => {
  const date = parsePostDate(value);

  return date ? date.getFullYear() : null;
};

export const formatPostDate = (value) => {
  const date = parsePostDate(value);

  return date ? BLOG_DATE_FORMATTER.format(date) : value;
};

export const formatPostDateWithYear = (value) => {
  const date = parsePostDate(value);

  return date ? BLOG_DATE_WITH_YEAR_FORMATTER.format(date) : value;
};
