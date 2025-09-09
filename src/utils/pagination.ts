/**
 * Generates page numbers for pagination with ellipsis support
 * @param currentPage - Current page number (1-based)
 * @param totalPages - Total number of pages
 * @param maxVisiblePages - Maximum number of visible page buttons
 * @returns Array of page numbers and ellipsis strings
 */
export const getPageNumbers = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number = 5
): (number | string)[] => {
  const pages: (number | string)[] = [];

  if (totalPages <= maxVisiblePages) {
    // Show all pages if total is small
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Show first 5 pages if we're on page 1-3
  if (currentPage <= 3) {
    for (let i = 1; i <= 5; i++) {
      pages.push(i);
    }
    pages.push('...');
    pages.push(totalPages);
    return pages;
  }

  // Show last 5 pages if we're near the end
  if (currentPage >= totalPages - 2) {
    pages.push(1);
    pages.push('...');
    for (let i = totalPages - 4; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Show pages around current page (no first/last page in middle)
  pages.push('...');

  // Show 5 pages around current page
  const startPage = currentPage - 2;
  const endPage = currentPage + 2;

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  pages.push('...');

  return pages;
};
