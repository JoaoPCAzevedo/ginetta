/** Dependencies */
import React from 'react';
import Button from '../atoms/Button';

/** Atoms */
import Form from '../atoms/Form';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

/**
 * Props interface
 */
interface Props {
  searchTerm: string;
  onSearchInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.ChangeEvent<HTMLFormElement>) => void;
  onPressUpDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const SearchBox: React.FunctionComponent<Props> = ({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
  onPressUpDown,
}: Props) => {
  /**
   * Render
   */
  return (
    <Form onSubmit={onSearchSubmit}>
      <Input
        id="search"
        value={searchTerm}
        type="text"
        onChange={onSearchInput}
        onKeyDown={onPressUpDown}
      />
      <Label htmlFor="search">
        <strong>Search: </strong>
      </Label>

      <Button disabled={!searchTerm}>Submit</Button>
    </Form>
  );
};

/**
 * Export
 */
export default SearchBox;
