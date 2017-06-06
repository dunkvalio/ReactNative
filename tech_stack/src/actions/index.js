export const selectLibrary = (libraryId) => {
  console.log('Selected:');
  console.log(libraryId);
  return {
    type: 'select_library',
    payload: libraryId,
  };
};
