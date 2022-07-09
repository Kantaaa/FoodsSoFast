import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MySearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return <Searchbar placeholder="Search" onChange={onChangeSearch} value={searchQuery} />;
};

export default MySearchbar;
