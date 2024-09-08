import { Frame, Dropdown, Button } from '@react95/core';
import { FC } from 'react';

const Chevron: FC<{ rotate: 90 | 270 }> = ({ rotate }) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32">
      <g transform={`rotate(${rotate} 13 13)`} fill="currentColor">
        <polygon points="6,10 20,10 13,17" />
      </g>
    </svg>
  );
};

export const Pagination: FC<{
  onPrevious: () => void;
  onNext: () => void;
  perPage: number;
  perPageOptions: number[];
  onPerPageChange: (perPage: number) => void;
  currentPage: number;
  totalPages?: number;
}> = ({
  onPrevious,
  onNext,
  onPerPageChange,
  perPage,
  perPageOptions,
  currentPage,
  totalPages,
}) => {
  return (
    <Frame
      boxShadow="$in"
      p="$4"
      mt="$6"
      display="flex"
      justifyContent="space-between"
    >
      <Frame display="flex" gap="$6" alignItems="center">
        Showing
        <Frame className="[&>*]:w-14">
          <Dropdown
            options={perPageOptions}
            value={perPage}
            onChange={({ target }) => {
              const { value } = target as HTMLInputElement;
              onPerPageChange(Number(value));
            }}
          />
        </Frame>
        movies
      </Frame>
      {/* chevron left */}
      <Frame display="flex">
        <Frame display="flex" alignItems="center" mr="$6">
          Page {currentPage} of {totalPages}
        </Frame>
        <Button
          size="$20"
          p="$0"
          pl="$4"
          pt="$2"
          title="Go to previous page"
          className="active:p-0 active:pl-[4px] active:pt-[2px]"
          onClick={onPrevious}
        >
          <Chevron rotate={90} />
        </Button>
        {/* chevron right */}
        <Button
          size="$20"
          p="$0"
          pl="$4"
          pt="$2"
          title="Go to next page"
          className="active:p-0 active:pl-[4px] active:pt-[2px]"
          onClick={onNext}
        >
          <Chevron rotate={270} />
        </Button>
      </Frame>
    </Frame>
  );
};
