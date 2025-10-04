import { memo, useMemo } from 'react';

import { ErrorMessage, Loading } from '@/components/ui';
import { AppTable } from '@/components/ui/table';
import { PAGE_SIZE } from '@/config/constants';
import { useParties } from '@/features/parties/hooks/useParties';
import { usePagination } from '@/hooks/usePagination';
import type { Party } from '@/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createPartiesTableColumns } from '../utils/tableColumns';

const AllParties = memo(() => {
  const { page, pageSize } = usePagination({
    pageSize: PAGE_SIZE,
  });

  const { data, error, isLoading, refetch } = useParties(page, pageSize);

  console.log(data);

  // Get total count for pagination
  const { allCount } = useMemo(() => {
    const allCount = data?.head?.counts?.partyCount || 0;
    return {
      allCount,
    };
  }, [data?.head?.counts?.partyCount]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage error={error} onRetry={refetch} title="Failed to load parties" />;

  const countText = `Showing <span style={{ fontWeight: 500 }}>${data?.results.length || 0}</span> of <span style={{ fontWeight: 500 }}>${allCount}</span> parties`;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 0.5,
          px: 1,
          py: 1,
          borderRadius: 1,
          borderTop: '1px solid',
          borderBottom: '1px solid',
          borderColor: 'divider',
          mb: 2,
        }}
      >
        <Typography variant="h4">Political Parties</Typography>
        {countText && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: '0.9rem',
            }}
            dangerouslySetInnerHTML={{ __html: countText }}
          />
        )}
      </Box>

      <AppTable<Party>
        data={data?.results || []}
        columns={createPartiesTableColumns()}
        size="medium"
        emptyState={{
          title: 'No parties found',
          message: 'There are no parties to display.',
        }}
      />

      {/* Pagination */}
      {/* {allCount > pageSize && (
        <Box sx={{ marginY: 2 }}>
          <Pagination
            count={allCount}
            page={page - 1}
            onPageChange={(event, newPage) =>
              handleChangePage(event as React.SyntheticEvent, newPage + 1)
            }
            rowsPerPage={pageSize}
            onRowsPerPageChange={handleChangePageSize}
            rowsPerPageOptions={[10, 20, 50, 100]}
          />
        </Box>
      )} */}
    </>
  );
});

export default AllParties;
